import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import MyCustomInput from '../CustomInput/MyCustomInput';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';

import { setTestAndUsername } from '../../Actions/TestsActions';

let search = '';
const OnGetSearchId = (e) => {
    search = e.target.value;
}

let username = '';
const OnGetUsername = (e) => {
    username = e.target.value;
}

const FindTest = (tests, id) => {
    let element;
    tests.forEach(elem => {
        if(elem.code === id) element = elem;
        else element = null;
    });
    return element;    
}

const ConnectForm = () => {
    const dispatch = useDispatch();
    const myTests = useSelector(state => state.TestReducer.myTests);

    return(
        <Stack>
            <p className="text-center">Подключитесь к тесту прямо сейчас</p>
            <Stack spacing={1} direction="row">
                <MyCustomInput placeholderText="Код тестирования" onSearch={OnGetSearchId}/>
                <MyCustomInput placeholderText="Ваше имя" onSearch={OnGetUsername}/>
                <Link to="/testing" className="link">
                    <Button variant="outlined" onClick={() => { dispatch(setTestAndUsername([FindTest(myTests,search),username])) }}>Подключиться</Button>                                                   
                </Link>
            </Stack>
            <p className="text-center">или создайте свой</p>
            <Link to='/create' className="link">
                <Button variant="outlined">Создать тест</Button>
            </Link>
        </Stack>
    );
}

export default ConnectForm;