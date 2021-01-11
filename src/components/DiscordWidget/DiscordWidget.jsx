import React, { PureComponent } from "react";
import "./DiscordWidget.css";

class DiscordWidget extends PureComponent {
    render() {
        return (
            <iframe title="discordwidget" src="https://discord.com/widget?id=488460809727639563&theme=dark" width="350" height="500" allowtransparency="true" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
        );
    }
}

export default DiscordWidget;