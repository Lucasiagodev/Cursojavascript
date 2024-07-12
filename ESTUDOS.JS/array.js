function array() {
    let array1 = [12, 23, 45, 33, 50];

    // METODO LENGTH

    console.log(array1[1]);/*aqui eu escolho o indice especifico de um elemento do array1 usando []*/

    let elementoArray = array1[0];/*eu posso armazenar um elemento dentro 
de uma variavel*/
    console.log(elementoArray);

    console.log(array1.length); /*o length mostra quantidade de elemento no array1 */

    console.log(array1[array1.length - 1]); /*para pega oultimo elemnto do array usa o nome da variavel 
e [variavel.length -1] para pega o ultimo elemnto do array */


    console.log("");
    console.log("");

    // METODO PUSH();

    array1[array1.length] = "lucas"; // tambem adicionar no final do array 

    array1.push(56); /*esse metodo .pus() adiciona um novo elemnto no final do array */
    array1.unshift(10); /*esse metodo unshift() adiciona no inicio do array */
    console.log(array1);

    console.log("");
    console.log("");

    // METODO UNSHIF()

    const nomes = ["lucas iago", "Francisco Ricardo", "João gomes"];
    nomes.unshift("Madson Marinho");// o metodo unshift() colocar o elemento no inicio do array

    console.log(nomes.join(" "))

    // METODO POP()

    const fruitas3 = ["Banana ", "Orange ", "Apple ", "Mango ", "lucas iago"];
    let retirado = fruitas3.pop(); // o pop retira o ultimo elemento do array
    console.log(fruitas3.toString());
    console.log(retirado);

    console.log("");
    console.log("");


    // METODO SHIFT

    const fruitas4 = ["Banana ", "Orange ", "Apple ", "Mango ", "laranja"];
    console.log(fruitas4.shift()); // o metodo shift() remove primeiro elemento
    console.log(fruitas4.toString());

    console.log("");
    console.log("");


    // METODO CONCAT()                   

    let array2 = [10, 20, 30, 40, 50]; // novo array


    let arrayConcat = array1.concat(array2); /*O metodo Concat(Array seguinte ou mais de um) 
unifica uma array a outra ou varias arrays*/
    console.log(arrayConcat);

    console.log("");
    console.log("");

    // METODO SPLICE()

    const times = ['corinthians', 'Bota fogo', 'flamengo'];
    //array.splice(índiceInício, númeroElementosRemover, elemento1, elemento2, ...)

    times.splice(0, 0, 'Vasco', 'gremio')
    console.log(times);
    // adiciona e remove os elemntos


    console.log("");
    console.log("");

    // METODO TOSTRING()

    const fruitas = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruitas.toString()); /*O método toString() em JavaScript é usado para converter um objeto em uma string. Ele é comumente usado em diversos tipos 
de objetos para obter uma representação em forma de texto.*/

    console.log("");
    console.log("");


    // METODO JOIN();

    const fruitas2 = ["Banana ", "Orange ", "Apple ", "Mango ", "lucas iago"];

    console.log(fruitas2.join(" ")); /*O JOIN(separador string) ele retorna uma array com uma separação entre todos os
elementos exemplo: join(" "), colocar um espaço entre elas*/

    console.log("");
    console.log("");

// METODO TOSPLICED()

const months = ["Jan", "Feb", "Mar", "Apr"];
const novo =  months.toSpliced(1,0,'dezeber');

console.log(months);
console.log(novo);
/*A diferença entre o novo método toSpliced() e o antigo
 método splice() é que o novo método cria uma nova matriz, mantendo a matriz original inalterada, 
enquanto o método antigo alterava a matriz original.*/ 

console.log("");
console.log("");


//MWTODO SLICE

// O slice()método pode receber dois argumentos como slice(1, 3).
//O método então seleciona elementos do argumento inicial e até (mas não incluindo) o argumento final
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 5);
console.log(fruits);
console.log(citrus);

}
// array();
function somar(n1){
    return n1;
}
console.groupEnd(somar(34))