import React from 'react'
import s from './NavBar.module.css'
import { Link, useLocation } from 'react-router-dom'

export default function NavBar(){
  const { pathname } = useLocation()
  return (
    <header className={s.bar}>
      <div className={s.inner}>
        <div className={s.brand}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#2F5F38" strokeWidth="2"/><path d="M7 13l3 3 7-7" stroke="#2F5F38" strokeWidth="2" fill="none"/></svg>
          <span>AMRUTAM</span>
        </div>
        <nav className={s.links}>
          <Link to="/">Home</Link>
          <Link to="/doctors" style={{textDecoration: pathname.includes('/doctors')?'underline':'none'}}>Find Doctors</Link>
          <a href="#">About Us</a>
        </nav>
        <div className={s.auth}>
          <button className={s.btn}>Login</button>
          <button className={s.btn+' '+s.primary}>Sign-up</button>
        </div>
      </div>
    </header>
  )
}
