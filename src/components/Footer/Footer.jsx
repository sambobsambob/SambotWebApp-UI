import React, { PureComponent } from "react";
import "./Footer.css"

class Footer extends PureComponent {

    //TODO add resize listener to change font size

    render() {
        return (
            <footer>
                <p className="footer-contact">Contact: <a target="_blank" rel="noreferrer" href="mailto: canhamsam@gmail.com">canhamsam@gmail.com</a></p>
                <p className="footer-copyright">&#169;Sam Canham 2021</p>
            </footer>
        );
    }
}

export default Footer;