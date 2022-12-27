import React from "react";

const AboutContent = (props) => {
    return (
        <>
            <img src={props.img_url} style={{width: '100%'}}/>
            <div className="w3-container w3-white">
                <h4><b>{props.name}</b></h4>
                <p>{props.desc}</p>
            </div>
        </>
    )
}

const About = () => {
    return (
        <>
            <div className="w3-card w3-margin w3-margin-top">
                <AboutContent
                    img_url="https://www.w3schools.com/w3images/avatar_g.jpg"
                    name="Testov Test"
                    desc="Just me, myself and I, exploring the universe of uknownment. I have a heart of love and a
                    interest of lorem ipsum and mauris neque quam blog. I want to share my world with you."
                />
            </div>
            <hr/>
        </>
    )
}

export default About;