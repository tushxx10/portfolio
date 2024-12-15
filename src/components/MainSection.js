import React from 'react'
import '../styles/home.css'
import satellite from '../images/satellite.png'
const MainSection = () => {
    return (
        <>
            <div className="content" id="home">
                <div className="container">
                    <div className="base">
                        <div className="intro-cont">
                            <div className="position" style={{ backgroundColor: "rgba(0,0,0,0)" }}>
                                <div className="viewbox">

                                </div>
                                <div className="viewbox-2">

                                </div>
                                <div className="gradient"></div>
                            </div>
                            <div className="satellite">
                                <img src={satellite} className="satellite" alt="" />
                            </div>
                            <p id="name">Tushar Gulati</p>
                            <p id="intro-para">
                                Hii! I am Tushar Gulati,<br />
                                A 4th year student majoring in
                                Electronics and
                                Communication Engineering.</p>
                            {/* <img className="logo-img pballs" data-speed="0.71" src={logo} alt="" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainSection