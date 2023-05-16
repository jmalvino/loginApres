
function mensagem_Sucesso() {
    Swal.fire({
        title: 'ATENÇÃO!',
        text: 'Preencha os dados com e-mail válido',
        icon: 'error',
        confirmButtonColor: '#212529', // cor do botão
    theme: 'sweetalert2-theme-dark', // tema escuro
    });
}

function verificarCheckboxes() {
    var checkboxes = document.querySelectorAll('.telalogin input[type="checkbox"]');
    var button = document.getElementById('teste');

    var anyChecked = false;
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            anyChecked = true;
            break;
        }
    }

    button.disabled = !anyChecked;
}

function selecionarTodosCheckboxes() {
    var checkboxes = document.querySelectorAll('.telalogin input[type="checkbox"]');
    var button = document.getElementById('teste');

    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = true;
    }

    button.disabled = true;
}

// Attach event listener to checkboxes
var checkboxes = document.querySelectorAll('.telalogin input[type="checkbox"]');
for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('click', verificarCheckboxes);
}