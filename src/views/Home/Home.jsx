import React, { PureComponent } from "react";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import DiscordWidget from "../../components/DiscordWidget/DiscordWidget.jsx";
import "./Home.css";


class Home extends PureComponent {
    render() {
        return (
            <div id="parent" className="parent">
                <Header/>
                <div className="body"> 
                    <h1>Hello World!</h1>
                    <DiscordWidget/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Home;