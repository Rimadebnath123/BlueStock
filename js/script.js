document.querySelectorAll('.validate-input .input100').forEach(input => {
    input.addEventListener('blur', function () {
        const wrapInput = this.closest('.wrap-input100');
        if (!this.value) {
            wrapInput.classList.add('alert-validate');
        } else {
            wrapInput.classList.remove('alert-validate');
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    "use strict";

    /*==================================================================
    [ Focus Contact2 ]*/
    document.querySelectorAll('.input100').forEach(function (input) {
        input.addEventListener('blur', function () {
            if (this.value.trim() !== "") {
                this.classList.add('has-val');
            } else {
                this.classList.remove('has-val');
            }
        });
    });

    /*==================================================================
    [ Validate ]*/
    var inputs = document.querySelectorAll('.validate-input .input100');

    document.querySelector('.validate-form').addEventListener('submit', function (event) {
        var check = true;

        inputs.forEach(function (input) {
            if (!validate(input)) {
                showValidate(input);
                check = false;
            }
        });

        if (!check) {
            event.preventDefault();
        }

        return check;
    });

    inputs.forEach(function (input) {
        input.addEventListener('focus', function () {
            hideValidate(this);
        });
    });

    function validate(input) {
        if (input.type === 'email' || input.name === 'email') {
            var emailPattern = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/;
            if (input.value.trim().match(emailPattern) == null) {
                return false;
            }
        } else {
            if (input.value.trim() === '') {
                return false;
            }
        }
        return true;
    }

    function showValidate(input) {
        var thisAlert = input.parentElement;
        thisAlert.classList.add('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = input.parentElement;
        thisAlert.classList.remove('alert-validate');
    }
});
