import React, { PureComponent } from "react";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import DiscordWidget from "../../components/DiscordWidget/DiscordWidget.jsx";
import DiscordLogo from "../../resources/Images/Discord-Logo+Wordmark-White.svg";
import "./DiscordBot.css";

class DiscordBot extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            prefix: "!!",
            commands: [
                {command: "help", action: "Displays all the commands available"},
                {command: "join", action: "Joins your current voice channel"},
                {command: "leave", action: "Leaves the current VC it is conected to"},
                {command: "p", action: "Plays either the provided URL or searches for the song"},
                {command: "ps", action: "Plays a spotify playlist"},
                {command: "pause", action: "Pauses the music"},
                {command: "resume", action: "Resumes the player"},
                {command: "skip", action: "Skips the current song"},
                {command: "clear", action: "Clears the current queue"},
                {command: "stop", action: "Stops the music player and clears the queue"},
                {command: "q", action: "Displays the current queue of songs and the song that is currently playing"},
                {command: "np", action: "Displays the current song that is being played"},
                {command: "shuffle", action: "Shuffles the current queue"},
                {command: "changelog", action: "Displays all the changes that have been made to the bot"},
            ]
        };
    }

    renderCommandTable() {
        return this.state.commands.map((key, value) => {
            const {command, action} = key;
            return (
                <tr key={command}>
                    <td>{this.state.prefix}{command}</td>
                    <td>{action}</td>
                </tr>
            )
        });
    }

    render() {
        return (
            <div className="parent">
                <Header/>
                <div className="body">
                    <img className="discordlogo" src={DiscordLogo} alt="React Logo" /><br/>
                    <p className="addbottext">Click <a className="addbotlink" href="https://discord.com/oauth2/authorize?client_id=573251480279056427&permissions=8&scope=bot" rel="noreferrer" target="_blank">here</a> to add the bot to your server!</p>
                    <p>
                        Hello visitor, this is my discord bot that I have/am made/making using JDA (Java Discord API) using Java.<br/>
                        To view all the commands available within your server you can use the command: "!!help".
                    </p>
                    <br/>
                    <h2>Command list:</h2>
                    <table className="center">
                        <thead>
                            <tr>
                                <th>Command</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderCommandTable()}
                        </tbody>
                    </table>
                    <DiscordWidget/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default DiscordBot;