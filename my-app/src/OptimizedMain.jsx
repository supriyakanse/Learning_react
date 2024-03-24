import { useState } from "react";
import { useForm } from "react-hook-form";
function OptimizedMain(props) {
    const form = useForm();

    const { register , handleSubmit} = form
   const onsubmit=(data)=>{
    console.log(data)
   }
    return (
        <>
            <h2></h2>
            <h2> Optimized Login</h2>
            <form onSubmit={handleSubmit(onsubmit)}>
                <div>
                    <input type="text" placeholder='username' {...register('username')} /><br />
                </div>
                <div>
                    <input type="password" placeholder='password' {...register('password')}/><br />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>

            </form>
        </>
    )
}
export default OptimizedMain;