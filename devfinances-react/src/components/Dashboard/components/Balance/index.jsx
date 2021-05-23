import React from 'react'
import './style.css'
import {Card} from './components/Card'

export function Balance(){
    return(
        <div className="balance">
            <Card/>
            <Card/>
            <Card/>
        </div>
    )
}