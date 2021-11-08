import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import MyCustomInput from '../CustomInput/MyCustomInput';

const ConnectForm = () => {
    return(
        <Stack>
            <p className="text-center">Подключитесь к тесту прямо сейчас</p>
            <Stack spacing={1} direction="row">
                <MyCustomInput placeholderText="Код тестирования"/>
                <MyCustomInput placeholderText="Ваше имя"/>                                                   
            </Stack>
            <p className="text-center">или создайте свой</p>
            <Button variant="outlined">Создать тест</Button>
        </Stack>
    );
}

export default ConnectForm;