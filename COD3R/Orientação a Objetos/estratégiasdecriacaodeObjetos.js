//Função Gactory
function criarFuncionario(nome, salario, faltas){
    return{
        nome,
        salario,
        faltas,
        getSalario(){
            return(salario/30 *(30 - faltas))
        }
    }
}


const f1 = criarFuncionario('João', 5000, 4);
const f2 = criarFuncionario('Maria Sharapova', 12342, 1)

console.log(f1.getSalario(), f2.getSalario())