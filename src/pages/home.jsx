import React from 'react';

class Home extends React.Component {
    render() {
        return(
            <div>
                <div class='company'>
                    <div class="company-img">
                        <img src="Slike/logo.png" alt=""/>
                    </div>
                    <div class="company-content">
                        <h2 class="heading">O <span>Epiphany</span></h2>
                        <h3>Game Development</h3>
                        <p>Epiphany je broj jedan kompanija na terenu za Game Development.<br/>Sastoji se od najboljih timova 
                        koji nastoje da dostignu što više ciljeva. CEO, Joelene Ciel čije <br/>ime znači "preety sky" upravo želi da pokaže kako ciljamo visoko, te dosežemo levele iznad neba...</p>
                        <a href="/services">Read More</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;