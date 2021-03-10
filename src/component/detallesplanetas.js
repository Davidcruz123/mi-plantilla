import React from 'react';

export const DetallesPlanetas = (props) => {

    return (
        <div className="card detalle">

            <div className="row detalleLineaSuperior">
                <div className="col-6" style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
                    <img style={{ maxWidth: "350px",marginTop:"10%" }} src="https://cnnespanol.cnn.com/wp-content/uploads/2016/07/tatooine-starwars.jpg?quality=100&strip=info" className="card-img-top" alt="..." />
                </div>
                <div className="col-6">
                    <div className="colderecha">
                        <h2 style={{ textAlign: "center" }}>{props.name2}</h2>
                        <p style={{ textAlign: "center" }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, animi sapiente laborum dolores voluptatem commodi inventore beatae error voluptates ea debitis repellendus fugit, minus, nesciunt corrupti optio et culpa officia! Enim distinctio sapiente recusandae officia, quas earum ullam commodi. Nesciunt.
                               </p>
                    </div>
                </div>
            </div>



            <div className="row" style={{ borderTop: "solid red", borderTopWidth: "thin", paddingTop: "2%" }}>
                <div className="col-2">Name</div>
                <div className="col-2">Climate</div>
                <div className="col-2">Population</div>
                <div className="col-2">Orbital Period</div>
                <div className="col-2">Rotation Period</div>
                <div className="col-2">Diameter</div>

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