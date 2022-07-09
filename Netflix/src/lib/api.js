import { collection, addDoc,where,getDocs,query } from 'firebase/firestore';
import { db } from '../Firebase';
import { auth } from '../Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export async function addUser(userData) {
    const response = await createUserWithEmailAndPassword(auth, userData.email, userData.password);
    console.log(response.user.uid);
    const docRef = await addDoc(collection(db, 'users'), {
        email: userData.email,
        password: userData.password
    });
    console.log(docRef.id);
}

export async function isValidUser(userData)
{
    let errors=false;
    const q=query(collection(db,'users'),where('email','==',userData.email));
    const documents= await getDocs(q);
    if(documents)errors=true;
    return errors;
}