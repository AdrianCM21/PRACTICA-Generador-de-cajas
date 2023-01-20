
import './App.css';
import {useState} from 'react';
import AddCajas from './components/Add_Cajas';
import Mostrar from './components/Mostrar';

function App() {
  let [Saved,setSaved]=useState([])
  const msg=(element)=>{
    setSaved(old=>[...old,element]);
  }
  return (
    <div className="App">
      <AddCajas guarda={msg}/>
      <Mostrar contenido={Saved}/>
    </div>
  );
}

export default App;
