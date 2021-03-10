
import React, { useState } from 'react';
import {Redirect} from 'react-router-dom';
import { Link } from "react-router-dom";

export const Register = () => {
    const [redirect,setRedirect]=useState(false)
    
    
    

    const handleSubmit=(e)=>{
        e.preventDefault()                //no quiero recargar la pagina
        
        let name = document.getElementById("inputName").value
        let lastName = document.getElementById("inputLastName").value
        let userName = document.getElementById("inputUserName").value
        let email = document.getElementById("inputEmail").value
        let pass = document.getElementById("inputPassword").value

        const data = {
            name: name,                //js interpreta que el primer elemento es un string
            last_name: lastName,
            user_name: userName,
            email: email,
            password: pass}


        fetch("http://127.0.0.1:5000/register",{
            method : "POST",
            headers : {
                "Content-Type": "application/json"
			},
            body : JSON.stringify(data)                //convierte data a string
        })
            
        .then(response => response.json())
        .then(data=>{
            console.log(data)
            if (data.status=="success"){
            setRedirect(true)            // para que redirect funcione se debe renderizar la pagina de nuevo, para eso usamos este hook
                console.log('Usuario agregado correctamente')

                
            }else{
                console.log(data.msj)
            }

        })
        .catch(error=>{
            console.log('Error',error)
        })
       

        
    }

    return (
        <>
        {redirect? <Redirect to="log_in"/>:""}

            <form  className="bg-light col-md-5 mx-auto rounded" style={{ margin: "5%" }} onSubmit={e => handleSubmit(e)} > 
                <h2 className="text-center" >Sign In</h2>
            <div className="form-row">
                    <div className="form-group col-md-12 font-weight-bold">
                        <label for="inputName" >First_Name</label>
                        <input type="text" className="form-control" id="inputName" placeholder="Enter name" required/>
                    </div>
            </div>
            <div className="form-row">
                    <div className="form-group col-md-12 font-weight-bold">
                    <label for="inputLastName">Last Name</label>
                        <input type="text" className="form-control" id="inputLastName" placeholder="Enter Last Name" required/>
                </div>
            </div>
            <div className="form-row">
                    <div className="form-group col-md-12 font-weight-bold">
                    <label for="inputUserName">Username</label>
                        <input type="text" className="form-control" id="inputUserName" placeholder="Enter Username" required />
                </div>
            </div>
            <div className="form-row">
                    <div className="form-group col-md-12 font-weight-bold">
                    <label for="inputEmail4">Email</label>
                        <input type="email" className="form-control" id="inputEmail" placeholder="Enter Email" required/>
                </div>
                    
            </div>
            <div className="form-row">
                    <div className="form-group col-md-12 font-weight-bold">
                    <label for="inputPassword4">Password</label>
                        <input type="password" className="form-control" id="inputPassword" placeholder="Enter Password" required/>
                </div>
            </div>
                    
                        
            <button type="submit" className="btn btn-primary col-md-12">Sign in</button>

                <div className="row mx-auto " style={{display:"flex",justifyContent:"flex-end",margin:"2%"}}>
                    <p >Already have an account?</p> 
                    <Link to={'log_in'}>
                        <p className=" text-primary">  Log in</p>
                    </ Link>
                    
            </div>
            
            </form>
            </>
    )



}