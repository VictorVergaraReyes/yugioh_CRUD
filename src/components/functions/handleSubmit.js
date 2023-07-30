import axios from "axios";

export function submitHandler(Event){
    Event.preventDefault();
    let datosCarta={
      "name":Event.target.monsterName.value,
      "type":Event.target.monsterType.value,
      "attack":Event.target.attack.value,
      "defense":Event.target.defense.value,
    }
    console.log(datosCarta)

    if(Event.target.attack.value>5000){
        alert("El ataque máximo es de 5000")
    }
    if(Event.target.defense.value>5000){
        alert("La defensa máxima es de 5000")
    }
    if(Event.target.requestType.value=="GET"){
        try {
            return axios({
                method: "get",
                url: `https://express-rest-api-h22m.onrender.com/api/card`,
              })
        } catch (error) {
         console.log("Algo falló")   
        }finally{
            console.log("Peticion enviada")
        }
    }
    
    if(Event.target.requestType.value=="POST"){
        try {
            return axios({
                method: "post",
                url: `https://express-rest-api-h22m.onrender.com/api/card`,
                params:datosCarta,
              })
        } catch (error) {
         console.log("Algo falló")   
        }finally{
            console.log("Peticion enviada")
        }
    }
}