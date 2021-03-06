import React from "react";
import { Route, Link, Switch } from 'react-router-dom';
import logo from "../images/logo-white.svg";

function Header({ email, onExit }) {
  const refreshPage = () => {
    window.location.reload(true)
  }
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo-link">

          <img onClick={refreshPage} className="header__logo" src={logo} alt="Логотип Место Россия" />
        </div>
        <Switch>
          <div className="header__contant">
            <Route exact path="/">
              <p className='header__email'>{email}</p>
              <Link to="/sign-in" className="header__exit" onClick={onExit}>Выйти</Link>
            </Route>

            <Route exact path="/sign-in">
              <Link to="/sign-up" className="header__link">Регистрация</Link>
            </Route>
            <Route exact path="/sign-up">
              <Link to="/sign-in" className="header__link">Войти</Link>
            </Route>
          </div>
        </Switch>
      </div>
    </header>
  );
}

export default Header;