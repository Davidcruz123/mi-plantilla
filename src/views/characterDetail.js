import React, { useEffect } from 'react';
import {DetallesPersonaje} from '../component/detallespesonajes'
import { Datoscontext } from '../store/context'
import {  useParams } from "react-router-dom";
import { Redirect } from 'react-router-dom';
import { LogIn } from './login'



export const CharacterDetail=()=>{
    const { store, actions } = React.useContext(Datoscontext);
    const { id } = useParams();

    
let id2                //Se necesita pasar de id de la bs, a obtener la posición en el storage
    for (var i = 0; i<store.people2.length-1; i++) {
        if (store.people2[i].data_type == "character" && store.people2[i].id == id.toString()){
            id2=i
            console.log('fasdfasfdafsd')
        } else { console.log(store.people2[i].data_type , store.people2[i].id,id)}
    }

    if (store.people2[id2]!=undefined){
console.log(id2)
 
    if (store.peopleloading == false) {
     
        return (
            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <DetallesPersonaje
                    name={store.people2[id2].name}
                    year={store.people2[id2].birth_year}
                    gender={store.people2[id2].gender}
                    height={store.people2[id2].height}
                    skin={store.people2[id2].skin_color}
                    eye={store.people2[id2].eye_color}



                />
            </ div>
        )
    }

    else {
   
        return <h1>Loading</h1>
    }


    }else{ return( 
        <>
            <Redirect to="log_in" />
           
            <LogIn />
        </ >
    )}



}