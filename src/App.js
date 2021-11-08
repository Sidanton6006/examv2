import React, { Fragment } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Main/Main';

function App() {
  return (
    <Fragment>
      <Navbar/>
      <div className="container">
        <Main/>
      </div>
    </Fragment>
  );
}

export default App;
