const loginForm = document.querySelector('#loginForm')
loginForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    const Users = JSON.parse(localStorage.getItem('users')) || []

    // Check if the credentials are for the admin
    if (email === 'admin@gmail.com' && password === 'admin') {
        alert('Bienvenido Admin')
        window.location.href = 'admin.html'
        return
    }

    // Check for other users
    const validUser = Users.find(user => user.email === email && user.password === password)
    
    if (!validUser) {
        return alert('Usuario y/o contraseña incorrectos!')
    }

    alert(`Bienvenido ${validUser.name}`)
    localStorage.setItem('login_sucess', JSON.stringify(validUser))
    window.location.href = 'user.html'
})
