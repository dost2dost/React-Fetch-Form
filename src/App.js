import React,{useState,useRef} from 'react';
import {useForm} from 'react-hook-form';
import './App.css';

function App() {
  const {state,setState}=useState();
  const {register, handleSubmit,errors}=useForm();
  const name=useRef();
  const age=useRef();
  
  
  function onSubmit(data){
    const Url='https://jsonplaceholder.typicode.com/users';
  const reqOptions={
    method: 'Post',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({title: data.name})
  } 
  fetch(Url,reqOptions)
    .then(response=>response.json())
    .then(data2=>{console.log(data2.title)})
    //console.log('your name is '+name.current.value+'age : '+age.current.value)
  
    //console.log(data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Enter name here " name="name" ref={register} />
        <input type="password" placeholder="Enter Password"  name="password"  ref={register({required: "PASS WORD REQUIRED LENTH 8", minLength: 8})} />
        {errors.password && <p>{errors.password.message} </p>}
        <input type="submit" />
       
      </form>
    </div>
  );
}

export default App;
