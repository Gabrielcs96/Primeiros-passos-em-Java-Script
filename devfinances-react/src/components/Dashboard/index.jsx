import React from 'react'
import './index.css'
import {Balance} from './components/Balance'
import {Transactions} from './components/Transactions'


export function Dashboard(){
    return(
        <React.Fragment>
        <div className="dashboard">
            <Balance/>
           <Transactions/>
        </div>
        </React.Fragment>
    )
}