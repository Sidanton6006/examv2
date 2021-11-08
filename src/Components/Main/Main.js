import React, { Fragment } from 'react'
import ConnectForm from '../ConnectForm/ConnectForm';
import MyCarousel from '../Carousel/Carousel';

const Main = () => {
    return(
        <Fragment>
            <div className="container">
                <div className="row border border-info rounded-bottom">
                    <div className="col mt-2">
                        {/* <MyCarousel /> */}
                    </div>
                    <div className="col mt-2">
                        <ConnectForm />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Main;