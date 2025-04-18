document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('service-request');

    if (form) {
        form.removeAttribute('action');

        form.addEve
        ntListener('submit', function (event) {
            event.preventDefault();
            event.stopPropagation();

            console.log('Form submission intercepted');
            const successMessage = document.createElement('div');
            successMessage.className = 'alert alert-success mt-3';
            successMessage.role = 'alert';
            successMessage.innerHTML = '<strong>Sucesso!</strong> Sua solicitação foi recebida. Entraremos em contato em breve.';
            const existingMessage = form.parentNode.querySelector('.alert');
            if (existingMessage) {
                existingMessage.remove();
            }
            form.parentNode.insertBefore(successMessage, form.nextSibling);
            successMessage.scrollIntoView({ behavior: 'smooth' });
            form.reset();
            setTimeout(function () {
                successMessage.style.transition = 'opacity 1s';
                successMessage.style.opacity = '0';
                setTimeout(function () {
                    successMessage.remove();
                }, 1000);
            }, 5000);
            return false;
        });
        form.onsubmit = function () { return false; };
    } else {
        console.error('Form with ID "service-request" not found');
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('partnership-form');

    if (form) {
        form.removeAttribute('action');

        form.addEventListener('submit', function (event) {
            event.preventDefault();
            event.stopPropagation();

            console.log('Form submission intercepted');
            const successMessage = document.createElement('div');
            successMessage.className = 'alert alert-success mt-3';
            successMessage.role = 'alert';
            successMessage.innerHTML = '<strong>Sucesso!</strong> Sua proposta de parceria foi recebida. Entraremos em contato em breve.';

            const existingMessage = form.parentNode.querySelector('.alert');
            if (existingMessage) {
                existingMessage.remove();
            }

            form.parentNode.insertBefore(successMessage, form.nextSibling);
            successMessage.scrollIntoView({ behavior: 'smooth' });
            form.reset();

            setTimeout(function () {
                successMessage.style.transition = 'opacity 1s';
                successMessage.style.opacity = '0';
                setTimeout(function () {
                    successMessage.remove();
                }, 1000);
            }, 5000);

            return false;
        });

        form.onsubmit = function () { return false; };
    } else {
        console.error('Form with ID "partnership-form" not found');
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact');

    if (form) {
        form.removeAttribute('action');

        form.addEventListener('submit', function (event) {
            event.preventDefault();
            event.stopPropagation();

            console.log('Form submission intercepted');
            const successMessage = document.createElement('div');
            successMessage.className = 'alert alert-success mt-3';
            successMessage.role = 'alert';
            successMessage.innerHTML = '<strong>Sucesso!</strong> Sua solicitação foi recebida. Entraremos em contato em breve.';
            const existingMessage = form.parentNode.querySelector('.alert');
            if (existingMessage) {
                existingMessage.remove();
            }
            form.parentNode.insertBefore(successMessage, form.nextSibling);
            successMessage.scrollIntoView({ behavior: 'smooth' });
            form.reset();
            setTimeout(function () {
                successMessage.style.transition = 'opacity 1s';
                successMessage.style.opacity = '0';
                setTimeout(function () {
                    successMessage.remove();
                }, 1000);
            }, 5000);
            return false;
        });
        form.onsubmit = function () { return false; };
    } else {
        console.error('Form with ID "service-request" not found');
    }
});
