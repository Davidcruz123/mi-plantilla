import React, { useState,useEffect } from 'react';

import {getEstado} from './flux'


export const Datoscontext = React.createContext();

const insertarContext=Componente=>{

    const EnvoltorioStore = (props) => {
        const [estado, setEstado] = useState(                     //estado llama a getEstado y si recordamos, get estado devuelve el flux
            getEstado({      
                getStore: () => estado.store,                    //le metemos los parametros iniciales a get estado
                getActions: () => estado.actions,
                setStore: StoreActualizado =>                    //se le mete el nuevo store
                    setEstado({
                        store: Object.assign(estado.store, StoreActualizado),          //object.assig explicado abajo.. basicamente agarra store y le copia las caracteristicas de store actualizado         
                        actions: { ...estado.actions }
                    })
            })
        );

            useEffect(() => {                                       //esto se va a ejecutar una vez al principio, para obtener la info
               estado.actions.getpeople() 
               estado.actions.getplanets()
            //    console.log("ESTADO",estado,"ESTADO")
                if (localStorage.user_information != undefined){
                    estado.actions.get_favorites(JSON.parse(localStorage.getItem("user_information")).id      )
                    console.log(estado.store,"imprimo store al render")
                }
            }, [])

                            //toda la aplicación va dentro de context.. a value le agregamos estado, el cual cada vez que se llama devuelve el estore actualizado
        return (
            <Datoscontext.Provider value={estado}>           
               <Componente {...props} />
            </Datoscontext.Provider>
        )
      
    }

    return EnvoltorioStore

}

export default insertarContext



//podemos decir que envoltorio me devuelve el context con toda la info de flux
//y dentro estará el componente, que es el que se va a meter




// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };

// const returnedTarget = Object.assign(target, source);

// console.log(target);
// // expected output: Object { a: 1, b: 4, c: 5 }

// console.log(returnedTarget);
// // expected output: Object { a: 1, b: 4, c: 5 }

 