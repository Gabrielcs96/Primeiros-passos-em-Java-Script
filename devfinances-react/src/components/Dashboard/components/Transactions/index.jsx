import React from 'react'
import './style.css'
import Modal from 'react-modal'

Modal.setAppElement('#root')

export function Transactions() {
	constructor(props){
		super(props)
	}

	return (
		<div className="transactions">

			<button type="button" onclick="alert('Funcionando! Vamos abrir o Modal aqui ')"> + Nova Transação </button>
 			<Modal
          isOpen={false}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
    	> 
			Alguma coisa 
			</Modal>

			<table id="data-table">

				<thead>
					<tr>
						<td> Descrição </td>
						<td> Valor </td>
						<td> Data </td>
						<td>     </td>

					</tr>

				</thead>

				<tbody>
					<tr>
						<td> Alimentação </td>
						<td> R$ 80,00 </td>
						<td> 23/04/2021 </td>
						<td>     </td>

					</tr>

				</tbody>


			</table>
		</div>

	)
}