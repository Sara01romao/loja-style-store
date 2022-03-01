
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'


import styles from './styles.module.css';

function Header() {

  return (
    <nav className={styles.menu}>
      <Link to="/">
        <img src={logo} alt="Logo Hoti e Fruti" />
      </Link>
     
      <ul>
        <li>
          <NavLink to="/" end className={styles.link}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/" className={styles.link}>Frutas</NavLink>
        </li>
        <li>
          <NavLink to="/" className={styles.link}>Legumes e Verduras</NavLink>
        </li>
        <li>
          <NavLink to="/" className={styles.link}>
            <svg width="24" height="20" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M23.0529 12.9473L25.1164 4.0098C25.2653 3.3645 24.7671 2.75 24.0948 2.75H6.94956L6.54945 0.82457C6.44976 0.344652 6.02076 0 5.52309 0H1.04762C0.469028 0 0 0.461699 0 1.03125V1.71875C0 2.2883 0.469028 2.75 1.04762 2.75H4.09807L7.16445 17.507C6.43085 17.9223 5.93651 18.7009 5.93651 19.5938C5.93651 20.9227 7.03092 22 8.38095 22C9.73099 22 10.8254 20.9227 10.8254 19.5938C10.8254 18.9203 10.544 18.3118 10.091 17.875H19.2423C18.7894 18.3118 18.5079 18.9203 18.5079 19.5938C18.5079 20.9227 19.6024 22 20.9524 22C22.3024 22 23.3968 20.9227 23.3968 19.5938C23.3968 18.641 22.8343 17.8178 22.0184 17.4279L22.2592 16.3848C22.4082 15.7395 21.9099 15.125 21.2376 15.125H9.52098L9.23529 13.75H22.0313C22.5205 13.75 22.9445 13.4168 23.0529 12.9473Z" fill="#0D9202" />
           </svg>
          </NavLink>
        </li>
      </ul>

      
         <button className={styles.close}>x</button>
        
     
    </nav>
  );
}

export default Header;