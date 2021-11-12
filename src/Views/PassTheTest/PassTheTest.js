import React from 'react';

import { useSelector} from 'react-redux';
import BasicCard from '../../Components/Card/BasicCard';
import MyStepper from '../../Components/Stepper/Stepper';

const PassingTest = () => {
    const username = useSelector(state => state.TestReducer.username);

    const currentTest = useSelector(state => state.TestReducer.currentTest);
        return(
                <MyStepper test={currentTest} />
            );
}

export default PassingTest;