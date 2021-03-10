import React from 'react';
import { DetallesPlanetas } from '../component/detallesplanetas'
import { Datoscontext } from '../store/context'
import { Link, useParams } from "react-router-dom";




export const PlanetDetail = () => {
    const { store, actions } = React.useContext(Datoscontext);
    const { id } = useParams();

    let id2                //Se necesita pasar de id de la bs, a obtener la posición en el storage
    for (var i = 0; i < store.planetas2.length - 1; i++) {
        if (store.planetas2[i].data_type == "planets" && store.planetas2[i].id == id.toString()) {
            id2 = i
            console.log('fasdfasfdafsd')
        } else { console.log(store.planetas2[i].data_type, store.planetas2[i].id, id) }
    }


    console.log(id2)



    if (store.planetaloading == false) {

        return (
            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <DetallesPlanetas


                    name2={store.planetas2[id2].name}
                    climate={store.planetas2[id2].climate}
                    population={store.planetas2[id2].population}
                    orbital={store.planetas2[id2].orbital_period}
                    rotation={store.planetas2[id2].rotation_period}
                    diameter={store.planetas2[id2].diameter}

                />
            </ div>
        )
    }





    else {

        return <h1>Loading</h1>
    }


}