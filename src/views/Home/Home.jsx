import React, { PureComponent } from "react";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import "./Home.css";


class Home extends PureComponent {
    render() {
        return (
            <div id="parent" className="parent">
                <Header page="home"/>
                <div className="body"> 
                    <h1 className="home-center">Welcome</h1>
                    <div className="home-info">
                        <p>
                            Hello my name is Sam, and I am a software developer by trade who also enjoys writing code for small personal projects out of work<br/>
                            This website is one of those projects! On this site I am also showing off some of my other projects for you to use.<br/>
                            These projects include:<br/>
                            A twitch bot<br/>
                            And a discord bot<br/>
                            To view any of these project just click on it in the navigation bar at the top left of this page.<br/>
                            Currently the twitch bot is still being made, however the discord bot is fully functional.<br/>
                            To use the twitch bot you need to login, if you don't have an account you will need to sign up. All of this can be done from the top right of the navigation bar.<br/>
                            If you have any issues or questions with regards to any of my projects feel free to contact me via my email which can be seen at the bottom of this page.
                        </p>
                    </div>
                    <br/>
                    <h3 className="home-center">Now a little more about me</h3>
                    <div className="home-info">
                        <p>
                            I have been interested in programming and computers since i was 13. I started out making platform games in scratch in my IT lessons 
                            and then quickly moved onto starting an actual computer science class and proceeded to learn the basics of python.<br/>
                            I then completed my computer science GCSE (UK qualifications you get when you are in secondary school (10-15)) and went to sixth form (16-18) where i did computer science
                            among other subjects. I carried on learning python in a somewhat more advanced way here. After sixth form I got a degree level apprenticeship working as a software developer.
                            This is where I learnt java (spring boot) and javascript (react) among MANY other skills, this is how I made this website. I do prefer the backend API development over the frontend,
                            however i do enjoy the javascript aspects of the front end, it is really just the CSS I dont like.
                        </p>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Home;