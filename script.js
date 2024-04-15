
function checkPassword() {
    var parentPassword = document.getElementById('parentPassword').value;
    var childPassword = document.getElementById('childPassword').value;
    var result = document.getElementById('result');

    if (parentPassword === childPassword) {
        result.innerHTML = '<h1>やったね！</h1><img src="cute-image.webp" alt="かわいい絵" width="300px">';
    } else {
        result.innerHTML = '<p>パスワードがいっちしませんでした。もういちどためしてね。</p><img src="failed-image.webp" alt="失敗したときの絵" width="200px">';
    }
}

function togglePasswordVisibility(passwordFieldId) {
    var passwordInput = document.getElementById(passwordFieldId);
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}
