import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import insertarContext from './store/context'
import {Home} from './views/home'
import {Home2} from './views/home2'
import { Navbar } from './views/navbar'
import {Detalles} from './component/detallespesonajes'
import { CharacterDetail } from "./views/characterDetail";
import { PlanetDetail } from "./views/planetDetail";
import {LogIn} from './views/login'
import {Register} from './views/register'

const Layout = () => {

    return (
            <div>
                <BrowserRouter>
                <Navbar />
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                            <Home2 />
                        </Route>

                    <Route  path="/character/:id" children={<CharacterDetail />}>
                       
                        </Route>
                    <Route path="/planets/:id" children={<PlanetDetail />}>
                       
                    </Route>

                    <Route exact path='/character/log_in'>
                        <LogIn />
                    </Route>


                    <Route path='/log_in'>
                        <LogIn />
                    </Route>

                    <Route path='/register'>
                        <Register />
                    </Route>

                    <Route path='*'>
                        <h1>Error, path incorrecto</h1>
                    </Route>

                    

                    </Switch>
                </BrowserRouter>
            </div>



            )
}

export default insertarContext(Layout)

//de acá estamos exportando el context, con el layout metido
//el context era el provider con todas las caracteristicas de flux para que se usen en layout

    // < Datoscontext.Provider value = { estado } >
    //     <Componente {...props} />
    //         </Datoscontext.Provider >