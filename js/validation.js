(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Busca todos os formulários que queremos estilizar.
        var forms = document.getElementsByClassName('needs-validation');
        // Roda um loop sobre eles para previnir a submissão.
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();