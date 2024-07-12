function object(){
    let students = {nome: 'jonh', idade: 25, cidade: 'biezinger'}
let aluno1 ={nome: 'carlos', idade: 23, escola: 'biezinger'}
let aluno2 ={nome: 'maria', idade: 15, escola: 'biezinger'}
let aluno3 ={nome: 'natan', idade: 65, escola: 'biezinger'}

const alunos = [aluno1, aluno2];// coloca dois objetos dentro de um array
//cria um objeto usando {rotulo: "valor"}

alunos.push(aluno3);// adiciona
alunos.unshift(students)

students.nome = "lucas iago" // muda o valor
students.id = 34 // cria mais um componente 
console.log(typeof(students));
console.log(students);
console.log(alunos);

}