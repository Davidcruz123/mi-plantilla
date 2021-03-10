import React,{useEffect} from 'react';
import { Link } from "react-router-dom";

import { Datoscontext } from '../store/context'

// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export const Navbar = () => {

    const { store, actions } = React.useContext(Datoscontext);
    let online
   


    let lista = "fasfd"
    if (store.favoritos.length > 0) { lista = "" }
    else { lista = "textoaleatorio" }

    const closeSession=()=>{
localStorage.removeItem('user_information')
        window.location.reload();

    }



 if(localStorage.user_information!=undefined){
  
    return (
        <nav className="navbar navbar-light bg-light">
            
            <Link to={"/"}>
                <img className="logostarwars logohover" src="https://logos-marcas.com/wp-content/uploads/2020/11/Star-Wars-Logo.png" alt="" />
                {/* <img className="logostarwars logosombra" src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" alt="" /> */}
                <i class="fas fa-arrow-left"></i>
            </Link>

           <div className="row">
               <div className="contenedorgif">
                    <i class="fas fa-door-open " style={{ fontSize: "2.2em", marginRight: "0.2em" }} onClick={() => { closeSession() }} ></i>
               </div>
                
                
                <div class="dropdown show">
                
                <a class="btn btn-primary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Favorites-{store.favoritos.length}
                </a>
                
                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    {lista && <a class="dropdown-item" href="#">No favorites added yet!!!</a>}
                    {/* {lista} */}
                    {store.favoritos.map(
                        (elemento, index) => {
                            return (
                                <div className="divfavorites" key={index} style={{ display: "flex" }}>
                                    <Link to={"/" + elemento.data_type + "/" + elemento.id}>
                                        <a class="dropdown-item" href="#">{elemento.name}</a>
                                    </Link>
                                    <p onClick={() => { actions.eliminarfavorito(elemento.name, elemento.fav_id) }} >   &#128465;</p>

                                </div>)
                        }
                    )}

                </div>
            </div>
                        </div>

        </nav>
    )

                    }else{
     return (
         <nav className="navbar navbar-light bg-light">
             <Link to={"/"}>
                 <div className="row" style={{display:"flex",flexDirection:"row" }}>
                 <img className="logostarwars logohover" src="https://logos-marcas.com/wp-content/uploads/2020/11/Star-Wars-Logo.png" alt=""   style={{display:"inline"}} />
                 {/* <img className="logostarwars logosombra" src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" alt="" /> */}
                     <i class="fas fa-arrow-left" style={{ display: "inline" }}  ></i>
                 </div>
             </Link>
            <Link to={'/log_in'}>
             <i class="fas fa-user display-4"></i>
             </ Link>


         </nav>
     )  }




}