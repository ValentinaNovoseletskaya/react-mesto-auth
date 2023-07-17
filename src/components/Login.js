// import React, {useState} from 'react';
// import {Link} from 'react-router-dom';
// import * as duckAuth from '../auth.js';
import '../index.css';

function Login() {
  // const [formValue, setFormValue] = useState({
  //   username: '',
  //   password: ''
  // })

  // const handleChange = (e) => {
  //   const {name, value} = e.target;

  //   setFormValue({
  //     ...formValue,
  //     [name]: value
  //   });
  // }
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // здесь нужно будет добавить логин
  //   if (!formValue.username || !formValue.password){
  //     return;
  //   }
  //   auth.authorize(formValue.username, formValue.password)
  //     .then((data) => {
  //       // нужно проверить, есть ли у данных JWT
  //       // сбросьте стейт, затем в колбэке установите
  //       // стейт loggedIn родительского App как true,
  //       // затем перенаправьте его в /diary
  //     })
  //     .catch(err => console.log(err));
  // }

  return (
    <div className="login">
      <p className="login__welcome">
        Вход
      </p>
      <form className="login__form">
        <label htmlFor="email">
          Email:
        </label>
        <input required id="email" name="email" type="text" />
        <label htmlFor="password">
          Пароль:
        </label>
        <input required id="password" name="password" type="password" />
      </form>
    </div>
  );
}

export default Login; 