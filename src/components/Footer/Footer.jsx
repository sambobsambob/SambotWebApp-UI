import React, { PureComponent } from "react";
import "./Footer.css"

class Footer extends PureComponent {
    render() {
        return (
            <div className="footer">
                <p>Contact: <a target="_blank" rel="noreferrer" href="mailto: canhamsam@gmail.com">canhamsam@gmail.com</a>
                </p>
                <p>&#169;Sam Canham 2021</p>
            </div>
        );
    }
}

export default Footer;