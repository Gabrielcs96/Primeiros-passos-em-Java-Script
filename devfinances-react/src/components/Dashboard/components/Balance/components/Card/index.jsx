import React from 'react'
import './style.css'
import Income from '../../../../../../assets/income.svg'

export function Card(){
    return(
        <div className="card">
            <h3>
                <span> Entrada </span>
                <img src={Income}alt="Entrada de Valores" />
            </h3>
            <p> R$ 100,00</p>
        </div>
    )


}