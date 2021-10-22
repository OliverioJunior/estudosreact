import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


   function sum(a,b){
     return a+b
   }



  function primeiroJSX(){
    return(
      <>
      <div>
        Olivério Júnior - Introdução ao ReactJS
        <h1>Soma: {sum(10,10)}</h1>
      </div>
      </>
    )
  }


  const App = () =>{

    return(
      <div className='App'>
        Hello World
        {primeiroJSX()}
      </div>
    )
  } 

  const rootElement = document.getElementById('root')
  ReactDOM.render(<App/>, rootElement)
