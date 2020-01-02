import React from "react"
import NavBar from "./NavBar"
import Resume from "../../resume.json"

function Hero() {
    return (
        <section className="hero is-dark is-fullheight has-bg-image">
            <div className="hero-head">
                <NavBar />
            </div>
            <div className="hero-body">
                <div className="container">
                    <p className="subtitle is-5 has-text-weight-light">I'm a</p>
                    <h1 className="title">{Resume.basics.label}</h1>
                    <h2 className="subtitle">{Resume.basics.location.region}, {Resume.basics.location.country}</h2>
                </div>
            </div>
            <div className="hero-foot" style={{paddingBottom:'20px'}}>
                <div className="columns is-mobile">
                    <div className=""></div>
                   
                    <div className="column is-4"></div>
                </div>
            </div>
        </section>
    )
}

export default Hero