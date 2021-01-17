import React, { PureComponent } from "react";
import "./Footer.css"

class Footer extends PureComponent {
    render() {
        return (
            <footer>
                <br/>
                <p className="footerInfo">Contact: <a target="_blank" rel="noreferrer" href="mailto: canhamsam@gmail.com">canhamsam@gmail.com</a>
                </p>
                <p className="footerInfo">&#169;Sam Canham 2021</p>
            </footer>
        );
    }
}

export default Footer;