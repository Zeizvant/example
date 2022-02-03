import logo from './logo.svg';
import './App.css';
import React from 'react';

function Car(props){
  return <li>I am a { props.brand }</li>;
}

export function Garage() {
  const cars = ['Ford', 'BWM', 'Audi', 'Mercedes'];
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => <Car brand={car}/>)}
      </ul>
    </>
    
  )
}
