import logo from './logo.svg';
import './App.css';
import context from './Compontes/Context';
import Navbar from './Compontes/Navbar';
import Parent1 from './Compontes/Parent1';
import Parent2 from './Compontes/Parent2';
//import Child from './Child';
import { useState } from 'react';


function App() {
  const [theme ,setTheme] =useState(false);
  return (
    <context.Provider value={theme}>
       <button onClick={()=>setTheme(!theme)}>Change theme</button>


       <Navbar/>
       <Parent1/>
       <Parent2/>


  




    </context.Provider>
    
  );
}

export default App;
