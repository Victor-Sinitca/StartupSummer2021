import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import {BrowserRouter} from "react-router-dom";
import {Provider,} from "react-redux";
import store from "./redux/redux-store";
import ProfilePage from "./Components/ProfilePage/ProfilePage";




function App() {



  return (
    <div className="displayApp">
        <Header />
        <ProfilePage/>
    </div>
  );
}



const MainApp = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
}

export default MainApp