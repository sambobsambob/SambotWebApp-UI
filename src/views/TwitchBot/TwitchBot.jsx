import React, { PureComponent } from "react";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";


class Home extends PureComponent {
    render() {
        return (
            <div id="parent" className="parent">
                <Header page="twitchBot"/>
                <div className="body"> 
                    <h1>This page is a work in progress...</h1>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Home;