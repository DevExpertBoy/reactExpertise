import React from 'react';

export const Component = ({ count, handleIncrementClick, handleDecrementClick }) => (
  <div style={{marginLeft:'500px',border:'1px solid black',width:'440px',height:'220px',textAlign:'center'}}>
    <h1>Helloworld React & Redux! {count}</h1>
    <button onClick={handleDecrementClick} style={{marginLeft:'20px'}}>Decrement</button>
    <button onClick={handleIncrementClick} style={{marginLeft:'50px'}}>Increment</button>
  </div>
);


