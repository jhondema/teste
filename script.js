document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const forgotPasswordForm = document.getElementById('forgot-password-form');
    const loginLink = document.getElementById('login-link');
    const forgotPasswordLink = document.getElementById('forgot-password-link');
    const backLink = document.getElementById('back-link');

    // Adicionar um ouvinte de evento ao link de login para alternar entre login e registro
    loginLink.addEventListener('click', function(event) {
        event.preventDefault();
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
        forgotPasswordForm.style.display = 'none';
        loginLink.style.display = 'none';
        forgotPasswordLink.style.display = 'block';
        backLink.style.display = 'none';
    });

    // Adicionar um ouvinte de evento ao link de registro para alternar entre registro e login
    forgotPasswordLink.addEventListener('click', function(event) {
        event.preventDefault();
        loginForm.style.display = 'none';
        registerForm.style.display = 'none';
        forgotPasswordForm.style.display = 'block';
        loginLink.style.display = 'block';
        forgotPasswordLink.style.display = 'none';
        backLink.style.display = 'block';
    });

     backLink.addEventListener('click', function(event) {
        event.preventDefault();
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
        forgotPasswordForm.style.display = 'none';
        loginLink.style.display = 'none';
        forgotPasswordLink.style.display = 'block';
        backLink.style.display = 'none';
    });
});



