async function signupFormHandler(event) {
    event.preventDefault()
    console.log('click')
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && password) {
        const response = await fetch('/api/users/', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        };
    };
};

document.querySelector('.login-signup-btn').addEventListener('click', signupFormHandler);