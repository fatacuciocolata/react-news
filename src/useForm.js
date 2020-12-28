import React from "react";
import { useForm } from "react-hook-form";
import "./styles.css";

export default function App() {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data); // { username: 'test', email: 'test', password: 'test' }
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="username" ref={register} placeholder="Username" />
        <input name="email" ref={register} placeholder="Email" />
        <input name="password" ref={register} placeholder="Password" />

        <input
          name="Developer"
          type="radio"
          value="Yes"
          ref={register({ required: true })}
        />
        <input
          name="Developer"
          type="radio"
          value="No"
          ref={register({ required: true })}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
