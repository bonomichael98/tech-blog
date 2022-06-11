async function createPostHandler(event) {
    event.preventDefault();

    const title = document.querySelector("input[name=post-title]").value.trim();
    const post_body = document.querySelector("textarea[name=post-content").value.trim();
    const ingredients = document.querySelector("textarea[name=ingredients]").value.trim();

        const response = await fetch("/api/post/", {
            method: 'POST',
            body: JSON.stringify({
                title,
                post_body,
                ingredients
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
    console.log('click')
};

document.querySelector('.login-signup-btn').addEventListener('click', createPostHandler);