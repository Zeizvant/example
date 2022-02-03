import logo from './logo.svg';
import './App.css';
import React from 'react';

function Car(props){
  return <li>I am a { props.brand }</li>;
}

export function Garage() {
  const cars = [{id: 1, brand:'Ford'}, {id: 2, brand: "BWM"}, {id:3, brand:"Audi"}, {id:4, brand: "Mercedes"}];
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => <Car key={car.id} brand={car.brand}/>)}
      </ul>
    </>
    
  )
}
