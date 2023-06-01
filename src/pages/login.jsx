import React from "react";

class Login extends React.Component {
    render() {
        return(
            <div class="ukras">
                <span class="zid"></span>
                <form>
                    <h2>Sign in</h2>
                    <div class="inputUkras">
                        <input type="text" required/>
                        <span>Username</span>
                        <i></i>
                    </div>
                    <div class="inputUkras">
                        <input type="password" required/>
                        <span>Password </span>
                        <i></i>
                    </div>
                    <div class="linkovi">
                        <a href="/">Forgot Password?</a>
                        <a href="/">Signup</a>
                    </div>
                    <input type="submit" value="Login"/>
                </form>
            </div>
        )
    }
}

export default Login;