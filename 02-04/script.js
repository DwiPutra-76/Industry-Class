document.getElementById("showPass").addEventListener("click", function() {
    const passInput = document.getElementById('password');
    if (passInput.type == 'password') {
        passInput.type = 'text';
    } else {
        passInput.type= 'password';
    }
});

// line 1 {
// document semua isi dokumen html yang sudah diload
// getElementById untuk mengambil element dengan id tertentu
// addEventListener untuk menambahkan event/trigger pada element, dalam hal ini event click
// function untuk menjalankan kode ketika event terjadi
// }

const loginSuccess = new Event('loginSuccess');
document.addEventListener('loginSuccess', function(e) {
    alert('Login berhasil!');
});

const btnLogin = document.getElementById('btnLogin');
btnLogin.addEventListener('click', function(e) {
    document.dispatchEvent(loginSuccess);
});

const formLogin = document.getElementById('formLogin');
const message = document.getElementById('message');

formLogin.addEventListener('submit', function(e) {
    e.preventDefault();
    let data = new FormData(e.target);
    message.innerHTML = `Login dengan username <code>${data.get('email')}</code>`
});

formLogin.addEventListener('reset', function() {
    message.textContent = 'Form dibersihkan';
});

const email = document.getElementById('email');
const emailOnInput = document.getElementById('email-oninput');

email.addEventListener('input', function() {
    emailOnInput.textContent = email.value;
})