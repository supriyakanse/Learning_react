import { useState } from "react";

function Main(props) {
    let [username,setUsername]=useState('');
    let [password,setpassword]=useState('');

   const submitHandle=(event)=>{
    event.preventDefault();
    console.log("submitted")
    }
    return (
        <>
            <h2>hey {props.propName}</h2>
            <h2>Login</h2>
            <form onSubmit={submitHandle}> 
                <div>
                    <input type="text" placeholder='username' value={username} onChange={(event)=>{setUsername(event.target.value)}}/><br />
                </div>
                <div>
                    <input type="password" placeholder='password' value={password} onChange={(event)=>{setpassword(event.target.value)}}/><br />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>

            </form>
        </>
    )
}
export default Main;