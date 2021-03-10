import React from 'react';
import { Link } from "react-router-dom";
import { Datoscontext } from '../store/context'


export const Tarjeta = (props) => {
    
    const { store, actions } = React.useContext(Datoscontext);


    return (
        <div className="card tarjeta1" style={{width: "18rem",minWidth:"250px"}}>
            <img src="https://i.blogs.es/c88df9/star-wars/450_1000.jpeg" className="card-img-top " alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.name}  </h5>
                    <p className="card-text">
                    Gender: {props.gender} <br />
                    Hair Color: {props.hairColor} <br />  
                    Eye-Color: {props.eyeColor}
                    </p>
                
                <Link to={"/character/"+props.id}>
                <a href="#" className="btn btn-outline-primary  border-5">Learn more!</a>
                </Link>
                <button type="button" className="btn btn-outline-warning float-right" onClick={() => { actions.agregarfavorito(props.name, props.id,"character",props.fav_id)}} style={{fontSize:"2em", maxHeight:"1.2em",display:"flex",alignItems:"center"}}>   &#9825;     </button>
                </div>
        </div>
    )
}