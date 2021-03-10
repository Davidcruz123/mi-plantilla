export const getEstado = ( {getStore,getActions,setStore} ) => {

    return {

        store:{
            peopleloading: true,
            planetaloading: true,
            people2:[],
            planetas2:[],
            favoritos:[],
            user:{}
            
        },
        actions:{
            fillFavorites:(data,userinfo)=>{
                setStore({ favoritos: data,user:userinfo })
            },
            agregarfavorito:(nombre,id,tipo,fav_id)=>{
                
                let data

                if (tipo=="planets"){
                     data = {"type":tipo,
                     "planet_id":id
                    }
                }else{
                    data = {
                        "type": tipo,
                        "character_id": id
                    }
                }

                console.log(data,'ver que data se envia')
                console.log("token en agregar fav",JSON.parse(localStorage.getItem("user_information")).token )

                console.log(JSON.stringify(data)  )

                let url = "http://127.0.0.1:5000/users/" + getStore().user.id.toString() + "/favorites"
                console.log(url)
                fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + JSON.parse(localStorage.getItem("user_information")).token         //corregir
                    },
                    body: JSON.stringify(data)                //convierte data a string
                })

                    .then(response => response.json())
                    .then(data => {
                        console.log("FETCHHHHHHHHHHHHH2222222222", data)
                        
                        let nuevalista = [...getStore().favoritos]
                        nuevalista.push({ name: nombre, id: id, data_type: tipo, fav_id: data.fav_id })
                        // console.log(nuevalista,nuevo)
                        console.log("Se agrega favorito", nuevalista)
                        setStore({ favoritos: nuevalista })
                        
                    })
                    .catch(error => {
                        console.log('Error2', error)
                    })






            },
            eliminarfavorito:(nombre,id)=>{
                let listafavoritos = [...getStore().favoritos]
                let nuevalista = listafavoritos.filter((elemento) =>  elemento.name !== nombre )
                console.log(nuevalista)
                setStore({ favoritos: nuevalista })

                console.log(id,"id que se usará en delete")

                let url = "http://127.0.0.1:5000/favorite/"+id.toString() 
                console.log(url)
                fetch(url, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + JSON.parse(localStorage.getItem("user_information")).token
                    },
                    // body: JSON.stringify(data)                //convierte data a string
                })

                    .then(response => response.json())
                    .then(data => {
                        console.log("FETCHHHHHHHHHHHHH33333333333", data)



                    })
                    .catch(error => {
                        console.log('Error2', error)
                    })





            },
            fetch: (url) => {

                fetch(url)
                    .then(res => res.json()
                    )
                    .then(data => {
                        console.log(data, data.results)
                        return data.results

                    })
                    .catch(err => console.error(err))


            },

            getpeople: () => {
                let peoplefinal = [];
                fetch("http://127.0.0.1:5000/people")
                    .then(res => res.json()
                    )
            
                    .then(data => {
           
                        peoplefinal = data.slice()
                        // console.log('linea 50', peoplefinal)
                       
                        setStore({ people2: [...peoplefinal], peopleloading: false })

                    })
                    .catch(err => console.error(err))


            },
           

            getplanets: () => {

                let planetafinal = [];
                fetch("http://127.0.0.1:5000/planets")
                    .then(res => res.json()

                    )

                    .then(data => {

                      
                        planetafinal = data.slice()                      //slice me devuelve una copia
                        
                        setStore({ planetas2: [...planetafinal], planetaloading: false }); 
                                    


                        // console.log(planetafinal, "planetas")
                    })
                    .catch(err => console.error(err))

            },

            get_favorites: (id) => {
                let url = "http://127.0.0.1:5000/users/" + id.toString() + "/favorites"
                fetch(url, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + JSON.parse(localStorage.getItem("user_information")).token
                    },

                })

                    .then(response => response.json())
                    .then(data => {
                        console.log("FETCHHHHHHHHHHHHH", data)
                        setStore({user:{id:id},favoritos:data})

                        
                    })
                    .catch(error => {
                        console.log('Error', error)
                    })
            }





        }

        
    }
}

