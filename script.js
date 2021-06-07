const name = document.getElementById('name')
const name2 = document.getElementById('name2')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')
const form = document.getElementById('form')
const form2 = document.getElementById('form2')
const errorElement = document.getElementById('error')
const errorElement2 = document.getElementById('error2')

form.addEventListener('submit', (e) => {
  let messages = []
  if (name.value === '' || name.value == null) {
    messages.push('Name is required')
  }
  if (password.value===''||password.value==null){
    messages.push('password is required')
  }
 
  else if (password.value.length <= 6) {
    messages.push('Password must be longer than 6 characters')
  }

  if (password.value.length >= 20) {
    messages.push('Password must be less than 20 characters')
  }

  if (password.value === 'password') {
    messages.push('Password cannot be password')
  }
  if (email.value === '' || email.value == null) {
    messages.push('email is required')
  }
//   else if (!isEmail(email.Value)) {
//     messages.push('email is invalid');
// }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})
form2.addEventListener('submit', (e) => {
  let messages = []
  if (name2.value === '' || name2.value == null) {
    messages.push('Name is required')
  }
  if (password2.value===''||password2.value==null){
    messages.push('password is required')
  }

  else if (password2.value.length <= 6) {
    messages.push('Password must be longer than 6 characters')
  }

  if (password2.value.length >= 20) {
    messages.push('Password must be less than 20 characters')
  }

  if (password2.value === 'password') {
    messages.push('incorrect password')
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})

// function isEmail(email) {
// 	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
// }