
function checkPassword() {
    var parentPassword = document.getElementById('parentPassword').value;
    var childPassword = document.getElementById('childPassword').value;
    var result = document.getElementById('result');

    if (parentPassword === childPassword) {
        result.innerHTML = '<p>正解！</p><img src="cute-image.jpg" alt="かわいい絵">';
    } else {
        result.textContent = '不一致です。もう一度試してください。';
    }
}
