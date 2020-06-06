import React from 'react';
import './App.css';
import Hello from './Hello';

function App({name, age}) {
   

  return <div>
            Hello from <strong>{name}</strong>, This is my age Age = {age - 5} <br/>
            <Hello firstName={name}> </Hello>
            <div>
              <h1>Added headings</h1>
              <hr/>           
              <h3>Ordered List</h3>
              <li>NO 1</li>
              <li>NO 2</li>
              <li>NO 3</li>

              <br/>
              <h3>Unordered List</h3>
      
              <li>NO 1</li>
              <li>NO 2</li> 
              <li>NO 3</li>
              
              <br/>
              Adding 2 and 5 and 7 = {2+5+7}
              <br/>
              Multiply 2 and 6 = {2*6}

            </div>
            
         </div>
   
  }

export default App;