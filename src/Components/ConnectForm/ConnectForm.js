import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import MyCustomInput from '../CustomInput/MyCustomInput';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import TestsReducer from '../../Reducers/TestsReducer';

const ConnectForm = ({ myTests }) => {
    return(
        <Stack>
            <p className="text-center">Подключитесь к тесту прямо сейчас</p>
            <Stack spacing={1} direction="row">
                <MyCustomInput placeholderText="Код тестирования"/>
                <MyCustomInput placeholderText="Ваше имя"/>
                <Link to="/testing" className="link">
                    <Button variant="outlined" onClick={()=>{console.log(myTests)}}>Подключиться</Button>                                                   
                </Link>
            </Stack>
            <p className="text-center">или создайте свой</p>
            <Link to='/create' className="link">
                <Button variant="outlined">Создать тест</Button>
            </Link>
        </Stack>
    );
}

const mapStateToProps = ({ TestsReducer }) => {
    console.log(TestsReducer);
    const { myTests } = TestsReducer;
    return { myTests };
}

export default connect(mapStateToProps,null)(ConnectForm);