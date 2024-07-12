function menu(){
    // memu section

document.getElementById('open-nav-menu').addEventListener('click', () => {
    document.querySelector('header nav .wrapper').classList.add('nav-open');

});
document.getElementById('close-nav-menu').addEventListener('click', () => {
    document.querySelector('header nav .wrapper').classList.remove('nav-open');
});

}

// greenting Section

function celsius(temperature){
    let farh = (temperature * 9/5) + 32;
    return farh;
}

const greentingText = "Good morning";
const weatherCondicion = "Summy"
const userlocation = "New york"
let temperature = 45;
let westherText = `The weather is ${weatherCondicion} in ${userlocation} and it s´ ${celsius(temperature).toFixed(1)}`;

document.querySelector('#greeting').innerHTML = greentingText;
document.querySelector('p#weather').innerHTML = westherText;

menu()