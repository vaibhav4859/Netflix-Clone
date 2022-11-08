import * as React from 'react';
import { styled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';
import classes from './User.module.css';
import { useNavigate } from 'react-router-dom';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: 'black',
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: 'white',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}));

const User = (props) => {
    const navigate = useNavigate();
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const navigateHandler = () => navigate('/logout');

    const scrollClasses = `${props.clicked ? classes.clicked : classes.scroll}`;

    return (
        <div className={scrollClasses}>

            <FormControl sx={{ m: 1 }} variant="standard">
                <Select
                    labelId="demo-customized-select-label"
                    id="demo-customized-select"
                    value={age}
                    onChange={handleChange}
                    input={<BootstrapInput />}
                >
                    <MenuItem>Account</MenuItem>
                    <MenuItem onClick={navigateHandler}>Sign out of Netflix</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}

export default User;
