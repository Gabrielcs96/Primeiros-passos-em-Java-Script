import React from 'react'
import ReactDOM from 'react-dom'
//import Primeiro from './componentes/Primeiro'
//import BomDia from './componentes/BomDia'
//import Showtime from './componentes/Showtime'
//import Multi, {BoaNoite} from './componentes/Multiplos' // Operador de desestruturação ({}) e importando a partir de um "nome específico(label), já desestruturado"
//import Saudacao from './componentes/Saudacao'

import Pai from './componentes/Pai'
ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva"/>
    </div>

    , document.getElementById('root'))


//ReactDOM.render(<Showtime/> ,document.getElementById('root'))