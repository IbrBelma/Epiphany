import React from "react";

class News extends React.Component {
    render() {
        return(
            <div>
                <div className="project">
                    <h2 className="heading">News</h2>

                    <div className="project-kontenjer">
                        <div className="project-box">
                            <img src="Slike/11.jpg" alt=""/>
                            <div className="project-layer">
                                <h4>Game Development</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Maiores,ratione</p>
                                <a href="/"><i className="bx bxs-castle"></i></a>
                            </div>
                        </div>
                        <div className="project-box">
                            <img src="Slike/12.jpg" alt=""/>
                            <div className="project-layer">
                                <h4>Roblox</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Maiores,ratione</p>
                                <a href="/"><i className="bx bxs-checkbox"></i></a>
                            </div>
                        </div>
                        <div className="project-box">
                            <img src="Slike/13.jpg" alt=""/>
                            <div className="project-layer">
                                <h4>Minecraft</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Maiores,ratione</p>
                                <a href="/"><i className="bx bxs-cube"></i></a>
                            </div>
                        </div>
                        <div className="project-box">
                            <img src="Slike/14.jpg" alt=""/>
                            <div className="project-layer">
                                <h4>Game Development</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Maiores,ratione</p>
                                <a href="/"><i className="bx bxs-game"></i></a>
                            </div>
                        </div>
                        <div className="project-box">
                            <img src="Slike/15.jpg" alt=""/>
                            <div className="project-layer">
                                <h4>Partnership</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Maiores,ratione</p>
                                <a href="/"><i className="bx bxs-donate-heart"></i></a>
                            </div>
                        </div>
                        <div className="project-box">
                            <img src="Slike/16.jpg" alt=""/>
                            <div className="project-layer">
                                <h4>Game Development</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Maiores,ratione</p>
                                <a href="/"><i className="bx bxl-meta"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default News;