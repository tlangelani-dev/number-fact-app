'use strict';

let fact = document.querySelector('#fact');
let factResult = document.querySelector('#fact-result');
let numberInput = document.querySelector('#number');

numberInput.addEventListener('input', getFactFetch);

// get data using xhr
function getFactXhr(evt) {
    let value = evt.target.value;
    if (value !== '') {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://numbersapi.com/'+value);
        xhr.onload = function() {
            if (this.status === 200) {
                fact.style.display = 'block';
                factResult.innerHTML = this.responseText;
            }
            console.log(this.status);
        };
        xhr.send();
    }
}

// get data using fetch api
function getFactFetch(evt) {
    let value = evt.target.value;
    if (value !== '') {
        fetch('http://numbersapi.com/'+value)
            .then(response => response.text())
            .then(data => {
                fact.style.display = 'block';
                factResult.innerHTML = data;
            })
            .catch(err => console.log(err));
    }
}
