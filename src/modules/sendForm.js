const sendForm = () => {
    const errorMessage = 'Что то пошло не так!',
        loadMessage = 'Загружается...',
        successMessage = 'Спасибо, мы скоро с Вами свяжемся!';

    const //mainForm = document.querySelector('main-form'),
        //captureForm = document.querySelectorAll('capture-form'),
        forms = document.querySelectorAll('form');

    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem;';

    forms.forEach(form => {
        form.addEventListener('submit', e => {
            e.preventDefault();
            form.appendChild(statusMessage);
            const formData = new FormData(form);

            const body = {};

            formData.forEach((val, key) => {
                body[key] = val;
            });

            statusMessage.textContent = loadMessage;

            postData(body)
                .then(result => {
                    statusMessage.textContent = result;
                    form.reset();
                })
                .catch(error => statusMessage.textContent = error);
        });
    });

    const postData = body => {
        return new Promise((resolve, reject) => {
            const request = new XMLHttpRequest();
            request.addEventListener('readystatechange', () => {
                if (request.readyState !== 4) {
                    return;
                }
                if (request.status === 200) {
                    resolve(successMessage);
                } else {
                    reject(errorMessage);
                }
            });

            request.open('POST', './server.php');
            request.setRequestHeader('Content-Type', 'application/json');
            request.send(JSON.stringify(body));
            });
        };
    };

export default sendForm;