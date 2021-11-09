import React from 'react'
import ConnectForm from '../../Components/ConnectForm/ConnectForm';
import MyCarousel from '../../Components/Carousel/Carousel';

const Main = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col mt-2">
                    <MyCarousel />
                </div>
                <div className="col mt-2">
                    <ConnectForm />
                </div>
            </div>
        </div>
    );
}

export default Main;