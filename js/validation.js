let form = document.getElementById('form')
let card_number = document.querySelector('.card_number')
let date = document.querySelector('.date')
let cvv = document.querySelector('.cvv')
let error = document.querySelector('.error')

form.addEventListener('submit', (e) => {
    let messages =[];
    if (card_number.value.length !== 16) {
        messages.push("Card number length must be 16.");
    }

    let regexp = new RegExp(/\D/g)
    if (regexp.test(card_number.value)) {
        messages.push("Card number must have only numbers.")
    }

    if (date.value.length !== 5 || date.value[2] !== '/' || isNaN(Number(date.value[0])) || isNaN(Number(date.value[1])) || isNaN(Number(date.value[3])) || isNaN(Number(date.value[4]))) {
        messages.push("Date must be in format XX/XX.")
    }

    if (cvv.value.length !== 3) {
        messages.push("Cvv length must be 3.")
    }

    if (regexp.test(cvv.value)) {
        messages.push("CVV code must have only numbers.")
    }


    if(messages.length>0){
        error.innerText = messages.join('\n');
    }

    if(messages.length === 0) {
        error.innerText = "All done!!!";
    }
    e.preventDefault()
});
