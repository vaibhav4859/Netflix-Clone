import { collection, addDoc, where, getDocs, query, updateDoc, doc } from 'firebase/firestore';
import { auth, db, storage } from '../Firebase';
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

export async function isValidUser(userData) {
    if ((await isValidSignin(userData)).email) return false;
    return true;
}

export async function signInUser(userData) {
    const q = query(collection(db, 'users'), where('email', '==', userData.email), where('password', '==', userData.password));
    const documents = await getDocs(q);
    documents.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
    });
}

export async function isValidSignin(userData) {
    let errors = {
        email: true,
        password: true
    };

    const q = query(collection(db, 'users'), where('email', '==', userData.email));
    const documents = await getDocs(q);
    let user;
    documents.forEach((doc) => {
        user = doc.data();
    });
    if (user) {
        errors.email = false;
        if (user.password === userData.password) errors.password = false;
    }
    return errors;
}

export async function updatePassword(userData) {
    const documents = await getDocs(query(collection(db, 'users'), where('email', '==', userData.email)));
    let userId;
    documents.forEach((doc) => {
        userId = doc._key.path.segments[6];
    });
    const userRef = doc(db, 'users', userId);
    await updateDoc(userRef, {
        password: userData.password
    });

    return null;
}

export async function getImages(name) {
    const urls = [];
    await storage.ref().child(`/${name}`).listAll()
        .then(res => {
            res.items.forEach((item) => {
                item.getDownloadURL().then(url => {
                    urls.push(url);
                }).catch(error => {
                    // Handle any errors
                    console.log(error);
                });
            })
        }).catch(err => {
            console.log(err);
        })
    // console.log(urls);
    return [...urls];
}