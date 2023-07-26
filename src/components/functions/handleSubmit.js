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
    return false; 
}