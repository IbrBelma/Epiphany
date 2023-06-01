import React from "react";

class Services extends React.Component {
    render() {
        return(
            <div className="services">
                <h2 className="heading">Nase <span>Usluge</span></h2>

                <div className="services-kontenjer">
                    <div className="servicesbox">
                        <i className="bx bxl-unity"></i>
                        <h3>Game Development</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quam debitis possimus, provident eos odit vel perspiciatis quas praesentium aliquam officia quos reiciendis pariatur aperiam. Iure doloremque architecto reprehenderit dolorum.
                        </p>
                        <a href="/" className="btn">Read More</a>
                    </div>
                    <div className="servicesbox">
                        <i className="bx bx-edit"></i>
                        <h3>Problem solving</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quam debitis possimus, provident eos odit vel perspiciatis quas praesentium aliquam officia quos reiciendis pariatur aperiam. Iure doloremque architecto reprehenderit dolorum.
                        </p>
                        <a href="/" className="btn">Read More</a>
                    </div>
                    <div className="servicesbox">
                        <i className="bx bx-group"></i>
                        <h3>Project managing</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quam debitis possimus, provident eos odit vel perspiciatis quas praesentium aliquam officia quos reiciendis pariatur aperiam. Iure doloremque architecto reprehenderit dolorum.
                        </p>
                        <a href="/" className="btn">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Services;