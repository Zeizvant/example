import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState, Component} from 'react';

export function Counter(){
  const [time, setTime] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prev) => prev + 1) 
    }, 1000)
    return () => {clearInterval(intervalId)}
  }, [])

  const handleChange = ({target}) => {
    setName(target.value)
  }

  return (
    <>
      <h1>Time: {time}</h1>
      <input type='text' value={name} onChange={handleChange} />
    </>
  )

}