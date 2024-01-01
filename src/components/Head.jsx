import React from 'react'
import './head.css'
import Home from './Home'
import About from './About'
import { Link } from 'react-router-dom'

export default function Head() {
  return (
    <div className='main'>
        <div className='head'>
          <div className='headL'>
              <nav className='nav'>
                  <Link to="Home">home</Link>
                  <Link to="about">about</Link>
                  <Link to="counter">counter</Link>
                  <Link to="todolist">todolist</Link>
                  <Link to="countries">countries</Link>
              </nav>        
          </div>
          <div className='headR'>
            
          </div>
        </div>
    </div>
  )
}
