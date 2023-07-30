import axios from "axios";

export function submitHandler(Event){
    Event.preventDefault();
    let datosCarta={
      name:`${Event.target.monsterName.value}`,
      type:`${Event.target.monsterType.value}`,
      attack:`${Event.target.attack.value}`,
      defense:`${Event.target.defense.value}`,
    }
    console.log(datosCarta)

    if(Event.target.attack.value>5000){
        alert("El ataque máximo es de 5000")
    }
    if(Event.target.defense.value>5000){
        alert("La defensa máxima es de 5000")
    }

    //PETICION GET
    if(Event.target.requestType.value=="GET"){
        try {
            return axios({
                method: "get",
                url: `https://express-rest-api-h22m.onrender.com/api/card`,
              })
        } catch (error) {
         console.log("Algo falló")   
        }finally{
            console.log("Peticion enviada POST")
        }
    }
    
    //PETICION POST
    if(Event.target.requestType.value=="POST"){
        let url=`https://express-rest-api-h22m.onrender.com/api/card`
        // let requestOptions={method: 'POST',body:JSON.stringify(datosCarta)}
        // fetch(url,requestOptions)
        //     .then(response => response.json())
        //     .then(data => {
        //       console.log('Respuesta del servidor:', data);
        //       // Lógica para manejar la respuesta del servidor
        //     })
        try {
            axios.post(url,datosCarta)
        } catch (error) {
         console.log("Algo falló")   
        }finally{
            console.log("Peticion enviada")
        }

    }
       
    
}