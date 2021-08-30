import { React, useState} from "react";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onChage = (event) => {
        const { target: {name, value}} = event;
        //console.log(typeof(value))
        if (name === "email"){
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        } else {
            //Nothing
        }
    }

    const onSubmit = (event) => { 
        event.preventDefault();
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input name="email" type="email" placeholder="E-mail address" required onChange={onChage} value={email}></input>
                <input name="password" type="password" placeholder="Password" required onChange={onChage} value={password}></input>
                <button>Login</button>
            </form>
            <div>
                <button>Continue with Google</button>
                <button>Continue with Github</button>
            </div>
        </div>
        );
}

export default Auth
