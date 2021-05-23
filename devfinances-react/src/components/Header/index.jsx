import React from 'react'
import './index.css'
import logo from '../../assets/logo.svg'

export function Header(){
    return(
        <div className="header">
          <img src={logo} alt=" Logo devFinances" />
        
      </div>
    )
}