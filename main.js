// memu section

document.getElementById('open-nav-menu').addEventListener('click', () => {
    document.querySelector('header nav .wrapper').classList.add('nav-open');

});
document.getElementById('close-nav-menu').addEventListener('click', () => {
    document.querySelector('header nav .wrapper').classList.remove('nav-open');
});


// greenting Section

const greentingText = "Good morning";
const weatherCondicion = "Summy"
const userlocation = "New york"
let temperature = 22.4556
let westherText = `The weather is ${weatherCondicion} in ${userlocation} and it s´ ${temperature.toFixed(1)}`;

document.querySelector('#greeting').innerHTML = greentingText;
document.querySelector('p#weather').innerHTML = westherText;