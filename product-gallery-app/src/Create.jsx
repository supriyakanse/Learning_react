import { useState } from "react";
import ReactDOM from "react-dom";

function Create() {
    let [loading,setloading]=useState(true);
    //let [password,setpassword]=useState("password");
    let [price,setPrice]=useState(0); 
    let[name,setName]=useState('');
    let[description,setDescription]=useState('');
    let[imgsrc,setimgsrc]=useState('');
    let[category,setcategory]=useState('');

    function handleClick() {
        console.log("i got handleClick");
       setloading(!loading)
    }
    function submitForm(event){
        event.preventDefault();
        console.log("i got submitForm");
        fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(
                {
                    title: name,
                    price: price,
                    description: description,
                    image: imgsrc,
                    category: category
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
    }
    // function handlePassword(){
    //     password=='password'?setpassword("text"):setpassword("password")
    // }
    return (
        <>
            <div className="CreateClass">
                <h1>
                    Create
                </h1>
            <button className="createBtn" onClick={handleClick}> +</button>
            </div>

            { loading?<></>:
            <form onSubmit={submitForm}>
            <div className="productForm">

       
                {/* <label>Password </label>
                <input type={password}/>
                <button onClick={handlePassword}>show/hide password</button> */}
                <label>Product Name :</label>
                <input type="text" value={name} onChange={(event)=>setName(event.target.value)}/>
                <label>Product Price :</label>
                <input type="number" value={price} onChange={(event)=>setPrice(event.target.value)} />
                <label>Product Description :</label>
                <input type="text" value={description} onChange={(event)=>setDescription(event.target.value)}/>
                <label>Product Image :</label>
                <input type="text" value={imgsrc} onChange={(event)=>setimgsrc(event.target.value)}/>

                <label>Product Category :</label>
                <select onChange={(event)=>setcategory(event.target.value)} >
                    <option value="Clothing">Clothing</option>
                    <option value="Jewelery">Jewelery </option>
                    <option value="Electronics">Electronics</option>
                </select>
                <button className="submitBtn">submit</button>
           
           
            </div>
            </form>
            }
                
        </>
    )
}

export default Create;