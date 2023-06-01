import React from "react";
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value === "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

const Contact = () => {
    return (
        <div>
            <div className="kontenj">
                <span className="big-krug"></span>
                <img src="slike/shape.png" className="square" alt="" />
                <div className="forma">
                    <div className="kontakt-info">
                        <h3 className="title">Kontaktirajte nas:</h3>
                        <p className="text">
                            Ukoliko želite da nas kontaktirate pošaljite nam poruku ili određeni feedback!
                        </p>
                
                        <div className="info">
                            <div className="informacije">
                                <img src="slike/location.png" className="icon" alt="" />
                                <p>Zenica, Fakultetska br. 1</p>
                            </div>
                            <div className="informacije">
                                <img src="slike/email.png" className="icon" alt="" />
                                <p>Joelene.ciel@epiphany.ba</p>
                            </div>
                            <div className="informacije">
                                    <img src="slike/phone.png" className="icon" alt="" />
                                <p>+387 62 914 976</p>
                            </div>
                        </div>
                
                        <div className="social-media">
                        <p>Socijalne medije :</p>
                            <div className="social-ikone">
                                <a href="https://www.facebook.com/beckydabishhhh/">
                                <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="https://twitter.com/lessyclue?t=ZYWNdYiXJkV0rB-4YFpyKw&s=09">
                                <i className="fab fa-twitter"></i>
                                </a>
                                <a href="https://instagram.com/bexayyy?igshid=MzNlNGNkZWQ4Mg==">
                                <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
            
                    <div className="kontakt-forma">
                        <span className="krug jedan"></span>
                        <span className="krug dva"></span>
                
                        <form action="https://formsubmit.co/belma.belmib@gmail.com" autocomplete="off" method="POST">
                            <input type="hidden" name="_subject" value="New Email woooo!"/>
                            <div className="input-kontenj">
                                <input type="text" name="name" className="input" required/>
                                <label for="">Username</label>
                                <span>Username</span>
                            </div>
                            <div className="input-kontenj">
                                <input type="email" name="email" className="input" required/>
                                <label for="">Email</label>
                                <span>Email</span>
                            </div>
                            <div className="input-kontenj">
                                <input type="tel" name="phone" className="input" required/>
                                <label for="">Phone</label>
                                <span>Phone</span>
                            </div>
                            <div className="input-kontenj textarea">
                                <textarea name="message" className="input"></textarea>
                                <label for="">Message</label>
                                <span>Message</span>
                            </div>
                            <input type="submit" value="Send" className="tipka" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;