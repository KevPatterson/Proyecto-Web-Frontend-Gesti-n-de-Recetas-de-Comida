
    const registerForm = document.querySelector('#registerForm')
    registerForm.addEventListener('submit', (e)=>{
        e.preventDefault()
        const name = document.querySelector('#name').value
        const email = document.querySelector('#email').value
        const password = document.querySelector('#password').value

        const Users = JSON.parse(localStorage.getItem('users')) || []
        const isUserRegistered = Users.find(user = user.email === email || user.name === name)
        if(IsUserRegistered){
            return alert('El usuario ya está registrado!')
        }
        Users.push({name: name, email: email, password: password})
        localStorage.setItem('users', JSON.stringify(Users))
        alert('Registro Exitoso!')
        window.location.href = 'login.html'
    })