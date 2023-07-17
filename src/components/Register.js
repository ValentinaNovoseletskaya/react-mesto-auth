// import React, {useState} from 'react';
// import {Link, useNavigate} from 'react-router-dom';
//import './styles/Register.css';

function Register() {
//   const [formValue, setFormValue] = useState({
//     email: '',
//     password: ''
//   })
//   const navigate = useNavigate();

  // const handleChange = (e) => {
  //   const {name, value} = e.target;

  //   setFormValue({
  //     ...formValue,
  //     [name]: value
  //   });
  // }
  // const handleSubmit = (e) => {
  //   e.preventDefault();
    // здесь обработчик регистрации
  //}

  return (
    <div className="register">
      <p className="register__welcome">
        Регистрация
      </p>
       <form className="register__form">        
         <label htmlFor="email">
           Email:
         </label>
         <input id="email" name="email" type="email" />
         <label htmlFor="password">
           Пароль:
         </label>
         <input id="password" name="password" type="password" />
       </form>
      <div className="register__signin">
        <p>Уже зарегистрированы?</p>
        {/* <Link to="sing-in" className="register__login-link">Войти</Link> */}
      </div>
    </div>
  );
}

export default Register;