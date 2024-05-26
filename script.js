let bookmark = document.getElementsByClassName('bookmark')
Array.from(bookmark).forEach(v => v.addEventListener('click', function () {

    let el = this.parentElement.getElementsByClassName('bookmark')[0]

    if (el.classList.contains("fa-heart-o")) {
        el.classList.remove("fa-heart-o")
        el.classList.add("fa-heart")
        el.innerText = "Job saved"

    } else {
        el.classList.remove("fa-heart")
        el.classList.add("fa-heart-o")
        el.innerText = "Save Job"
    }
    
}));


// javascript code for about section
document.addEventListener('DOMContentLoaded', function () {
    const teamMembers = document.querySelectorAll('.team-members .member');

    teamMembers.forEach(member => {
        member.addEventListener('click', () => {
            alert('You clicked on ' + member.querySelector('h4').innerText);
        });
    });
});





//for gov_job section

document.addEventListener('DOMContentLoaded', () => {
    const applyButtons = document.querySelectorAll('.apply-btn');

    applyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const jobTitle = button.parentElement.querySelector('h3').innerText;
            alert(`You are applying for the position: ${jobTitle}`);
        });
    });
});



//for all job section(so.html)

document.addEventListener('DOMContentLoaded', () => {
    const applyButtons = document.querySelectorAll('.btn-apply');

    applyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const jobTitle = button.parentElement.querySelector('h3').innerText;
            alert(`You are applying for the position: ${jobTitle}`);
        });
    });
});
















































//regiatraion

document.addEventListener('DOMContentLoaded', () => {
    const btnLogin = document.getElementById('btn-login');
    const btnRegister = document.getElementById('btn-register');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    btnLogin.addEventListener('click', () => {
        btnLogin.classList.add('active');
        btnRegister.classList.remove('active');
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
    });

    btnRegister.addEventListener('click', () => {
        btnRegister.classList.add('active');
        btnLogin.classList.remove('active');
        registerForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
    });
});









































// document.addEventListener('DOMContentLoaded', () => {
//     const registerTab = document.getElementById('register-tab');
//     const loginTab = document.getElementById('login-tab');
//     const registerForm = document.getElementById('register-form');
//     const loginForm = document.getElementById('login-form');
//     const message = document.getElementById('message');

//     registerTab.addEventListener('click', () => {
//         registerForm.style.display = 'block';
//         loginForm.style.display = 'none';
//     });

//     loginTab.addEventListener('click', () => {
//         registerForm.style.display = 'none';
//         loginForm.style.display = 'block';
//     });

//     const registerFormSubmit = async (e) => {
//         e.preventDefault();

//         const formData = new FormData(registerForm);
//         const userData = Object.fromEntries(formData.entries());

//         try {
//             // Simulate registration process (replace with actual registration logic)
//             const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
//                 method: 'POST',
//                 body: JSON.stringify(userData),
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }
//             });

//             const data = await response.json();
//             if (response.ok) {
//                 message.textContent = 'Registration successful! User ID: ' + data.id;
//             } else {
//                 message.textContent = 'Registration failed! ' + data.message;
//             }
//         } catch (error) {
//             message.textContent = 'Error: ' + error.message;
//         }
//     };

//     const loginFormSubmit = async (e) => {
//         e.preventDefault();

//         const formData = new FormData(loginForm);
//         const userData = Object.fromEntries(formData.entries());

//         try {
//             // Simulate login process (replace with actual login logic)
//             const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
//                 method: 'POST',
//                 body: JSON.stringify(userData),
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }
//             });

//             const data = await response.json();
//             if (response.ok) {
//                 message.textContent = 'Login successful! User ID: ' + data.id;
//             } else {
//                 message.textContent = 'Login failed! ' + data.message;
//             }
//         } catch (error) {
//             message.textContent = 'Error: ' + error.message;
//         }
//     };

//     document.getElementById('registration-form').addEventListener('submit', registerFormSubmit);
//     document.getElementById('login-form').addEventListener('submit', loginFormSubmit);
// });
