
import './App.css'
import {submitHandler} from './components/functions/handleSubmit.js'

function App() {

  return (
    
    <>
    <form onSubmit={submitHandler}>
    <select className="form-select" aria-label="Default select example" name="requestType">
    <option selected>Select the type of request</option>
        <option value="GET">GET</option>
        <option value="POST">POST</option>
        <option value="PUT">PUT</option>
        <option value="DELETE">DELETE</option>
    </select>
      <div className="mb-3">
        <label className="form-label">Nombre</label>
        <input className="form-control" id="cardName" name="monsterName" placeholder="card name"></input>
      </div>
      <select className="form-select" aria-label="Default select example" name="monsterType">
        <option selected>Select the type of your monster</option>
        <option value="Aqua">Aqua</option>
        <option value="Beast">Beast</option>
        <option value="Beast-War">Beast-War</option>
        <option value="Cyberse">Cyberse</option>
        <option value="Dinosaur">Dinosaur</option>
        <option value="Divine-Be">Divine-Be</option>
        <option value="Dragon">Dragon</option>
        <option value="Fairy">Fairy</option>
        <option value="Fiend">Fiend</option>
        <option value="Fish">Fish</option>
        <option value="Insect">Insect</option>
        <option value="Machine">Machine</option>
        <option value="Plant">Plant</option>
        <option value="Psychic">Psychic</option>
        <option value="Pyro">Pyro</option>
        <option value="Reptile">Reptile</option>
        <option value="Rock">Rock</option>
        <option value="Sea Serp">Sea Serp</option>
        <option value="Spell">Spell</option>
        <option value="Thunder">Thunder</option>
        <option value="Warrior">Warrior</option>
        <option value="Thunder">Thunder</option>
        <option value="Winged Be">Winged Be</option>
        <option value="Wyrm">Wyrm</option>
        <option value="Zombie">Zombie</option>
      </select>
      <div className="mb-3">
        <label className="form-label">Ataque</label>
        <input className="form-control" id="attack" placeholder="attack" name="monsterAttack"></input>
      </div>
      <div className="mb-3">
        <label className="form-label">Defensa</label>
        <input className="form-control" id="defense" placeholder="defense" name="monsterDefense"></input>
      </div>
      <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default App
