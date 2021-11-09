import React, { Fragment } from 'react';
import NotFound from './Components/NotFound/NotFound'
import Main from './Views/Main/Main';
import PassingTest from './Views/PassTheTest/PassTheTest'; 

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';

import store from "./store";
import { Provider } from "react-redux";

const App = () => {
  console.log(store);
  return (
    <Fragment>
      <Navbar />
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/testing" element={<PassingTest />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </Provider>
    </Fragment>
  );
}

export default App;
