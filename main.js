

const userName = document.querySelector('#user-name');
const cardNumber = document.querySelector('#card-number')
const month = document.querySelector('#month')
const year = document.querySelector('#year')
const cvc = document.querySelector('#cvc')
const submit = document.querySelector('#confirm')
const form = document.getElementById('form')
const warningMsg = document.getElementsByClassName('warning')

/*
form.addEventListener('submit', function(e){
  e.preventDefault();

  if(userName.value === '' ) {
    warningMsg[0].innerHTML = "Name field can't be blank"

  } 
  
  if(cardNumber.value.length < 16 || cardNumber.value.length > 16) {
      warningMsg[1].innerHTML = 'Invalid Input'
    }

  else if(isNaN(cardNumber.value) ) {
    warningMsg[1].innerHTML = 'Wrong format, numbers only'
  }
  
  
  if(month.value === '' || year.value === '') {
    warningMsg[2].innerHTML = "Can't be blank"
  } else if(month.value < 1 || month.value > 12 || year.value < 21 ) {
    warningMsg[2].innerHTML = 'Invalid Input'
  }
  
  if(cvc.value === '') {
    warningMsg[3].innerHTML = "Can't be blank"
  } else if(cvc.value.length < 3 || cvc.value.length > 3) {
    warningMsg[3].innerHTML = 'Invalid Input'
  } else {

    const bearerName = document.querySelector('.bearer-name')
    const expiryDate = document.querySelector('.expiry-date')
    const cvcCode = document.querySelector('.card-back-code')
    const cardCode = document.querySelector('.card-number')

    bearerName.innerHTML = userName.value.toUpperCase()
    cardCode.innerHTML = cardNumber.value.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/,'$1 $2 $3 $4')
    expiryDate.innerHTML = '0' + month.value + '/' + year.value
    cvcCode.innerHTML = cvc.value

    // Display Success Page
    const form = document.querySelector('#form')
    const success = document.querySelector('.main-container')
    form.style.display = 'none'
    success.style.display = 'block'
  }
})

*/

form.addEventListener('submit', function(e){
  e.preventDefault();

  if(userName.value === '' ) {
    warningMsg[0].innerHTML = "Name field can't be blank"

  } 
  
  if(cardNumber.value.length < 16 || cardNumber.value.length > 16) {
      warningMsg[1].innerHTML = 'Invalid Input'
    }

  else if(isNaN(cardNumber.value) ) {
    warningMsg[1].innerHTML = 'Wrong format, numbers only'
  }
  
  
  if(month.value === '' || year.value === '') {
    warningMsg[2].innerHTML = "Can't be blank"
  } else if(month.value < 1 || month.value > 12 || year.value < 21 ) {
    warningMsg[2].innerHTML = 'Invalid Input'
  }
  
  if(cvc.value === '') {
    warningMsg[3].innerHTML = "Can't be blank"
  } else if(cvc.value.length < 3 || cvc.value.length > 3) {
    warningMsg[3].innerHTML = 'Invalid Input'
  } else {

    const bearerName = document.querySelector('.bearer-name')
    const expiryDate = document.querySelector('.expiry-date')
    const cvcCode = document.querySelector('.card-back-code')
    const cardCode = document.querySelector('.card-number')

    bearerName.innerHTML = userName.value.toUpperCase()
    cardCode.innerHTML = cardNumber.value.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/,'$1 $2 $3 $4')
    expiryDate.innerHTML = '0' + month.value + '/' + year.value
    cvcCode.innerHTML = cvc.value

    // Display Success Page
    const form = document.querySelector('#form')
    const success = document.querySelector('.main-container')
    form.style.display = 'none'
    success.style.display = 'block'
  }
})
// bearerName.innerHTML = userName.value.toUpperCase()

