
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Datoscontext } from '../store/context'
import { Link } from "react-router-dom";

export const LogIn = () => {
    const { store, actions } = React.useContext(Datoscontext);

    const [redirect, setRedirect] = useState(false)




    const handleSubmit = (e) => {
        e.preventDefault()                //no quiero recargar la pagina

        
        let userName = document.getElementById("inputUserName").value
        let email = document.getElementById("inputEmail").value
        let pass = document.getElementById("inputPassword").value

        const data = {
            
            user_name: userName,
            email: email,
            password: pass
        }


        fetch("http://127.0.0.1:5000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)                //convierte data a string
        })

            .then(response => response.json())
            .then(data => {
                console.log("LOGIN",data)
                if (data.status == "success") {
                   
                    console.log('Usuario logueado correctamente')
                    let session_info={
                        token:data.token,
                        id:data.user.id
                    }

                    localStorage.setItem("user_information",JSON.stringify(session_info)  )  //esta es una variable que se guarda a nivel de browser
                 
                    console.log(localStorage)
                    fetch2(data.user.id,data.user)

                    console.log('STORE',store)


                     setRedirect(true)            // para que redirect funcione se debe renderizar la pagina de nuevo, para eso usamos este hook
                    console.log("en teoria ya se hizo el redirect")
                    } else {
                    console.log(data.msj)
                }

            })
            .catch(error => {
                console.log('Error', error)
            })



    }

    const fetch2=(id,user)=>{
        let url = "http://127.0.0.1:5000/users/"+id.toString()+"/favorites"
        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + JSON.parse(localStorage.getItem("user_information")).token
            },
           
        })

            .then(response => response.json())
            .then(data => {
                console.log("FETCHHHHHHHHHHHHH",data)
                actions.fillFavorites(data,user)
                
        console.log(store.favoritos)
            })
            .catch(error => {
                console.log('Error', error)
            })
    }


    




    return (
        <>
            {redirect ? <Redirect to="/" /> : ""}

            <form className="bg-light col-md-5 mx-auto rounded" style={{ margin: "5%" }} onSubmit={e => handleSubmit(e)} >
                <h2 className="text-center" >Log In</h2>
                
                <div className="form-row">
                    <div className="form-group col-md-12 font-weight-bold">
                        <label for="inputUserName">Username</label>
                        <input type="text" className="form-control" id="inputUserName" placeholder="Enter Username" required />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12 font-weight-bold">
                        <label for="inputEmail4">Email</label>
                        <input type="email" className="form-control" id="inputEmail" placeholder="Enter Email" required />
                    </div>

                </div>
                <div className="form-row">
                    <div className="form-group col-md-12 font-weight-bold">
                        <label for="inputPassword4">Password</label>
                        <input type="password" className="form-control" id="inputPassword" placeholder="Enter Password" required />
                    </div>
                </div>


                <button type="submit" className="btn btn-primary col-md-12">Sign in</button>

                <div className="row mx-auto " style={{ display: "flex", justifyContent: "flex-end", margin: "2%" }}>
                    <p >Don't have an account?</p>
                    <Link to={'register'}>
                        <p className=" text-primary">  Sign up</p>
                    </ Link>
                   
                    
                </div>

            </form>
        </>
    )



}