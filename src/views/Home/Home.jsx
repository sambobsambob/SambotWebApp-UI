import React, { PureComponent } from "react";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends PureComponent {
    render() {
        return (
            <div id="parent" class="bg-dark">
                <Header/>
                <div> 
                    <h1>Hello World!</h1>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Home;