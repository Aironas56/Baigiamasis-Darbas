
import React from "react";
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import store from './store'
import Content from "./Components/Content/Content";

function App() {
    return (
        <>
            <Provider store={store()}>
                <Router>
                    <Header/>
                    <Content/>
                    <Footer/>
                </Router>
            </Provider>
        </>

    );
}

export default App;