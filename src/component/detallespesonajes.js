import React from 'react';

export const DetallesPersonaje = (props) => {

    return (
        <div className="card detalle">

            <div className="row detalleLineaSuperior">
                <div className="col-md-6">
                    <img style={{ maxWidth: "350px" }} src="https://www.cinemascomics.com/wp-content/uploads/2018/11/star-wars-9-personaje-trilogia-secuelas-2019.jpg" className="card-img-top" alt="..." />
                </div>
            <div className="col-md-6">
                    <div className="colderecha">
                        <h2 style={{ textAlign: "center" }}>{props.name}</h2>
                        <p style={{ textAlign: "center" }}>
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, animi sapiente laborum dolores voluptatem commodi inventore beatae error voluptates ea debitis repellendus fugit, minus, nesciunt corrupti optio et culpa officia! Enim distinctio sapiente recusandae officia, quas earum ullam commodi. Nesciunt.           
                               </p>
                    </div>
                </div>
            </div>
                
                

            <div className="row" style={{ borderTop: "solid red", borderTopWidth: "thin",paddingTop:"2%"}}>
                <div className="col-2">Name</div>
                <div className="col-2">Birth Year</div>
                <div className="col-2">Gender</div>
                <div className="col-2">Height</div>
                <div className="col-2">Skin Color</div>
                <div className="col-2">Eye Color</div>

            </div>

            <div className="row" style={{marginTop:"10px"}}>
                <div className="col-2">{props.name}</div>
                <div className="col-2">{props.year}</div>
                <div className="col-2">{props.gender}</div>
                <div className="col-2">{props.height}</div>
                <div className="col-2">{props.skin}</div>
                <div className="col-2">{props.eye}</div>

            </div>


           



            <div className="row" style={{ marginTop: "10px" }}>
                <div className="col-2">{props.name2}</div>
                <div className="col-2">{props.climate}</div>
                <div className="col-2">{props.population}</div>
                <div className="col-2">{props.orbital}</div>
                <div className="col-2">{props.rotation}</div>
                <div className="col-2">{props.diameter}</div>

            </div>


        </div>
    )

}