//_____________Created_By_Anton_Bakunin_____________//

window.addEventListener('DOMContentLoaded', function () {
'use strict';

// popups
const popups = () => {
    const callBtn = document.querySelectorAll('.call-btn'),
        popupDiscount = document.querySelector('.popup-discount'),
        discountBtn = document.querySelectorAll('.discount-btn'),
        popup = document.querySelector('.popup'),
        checkBtn = document.querySelectorAll('.check-btn'),
        popupCheck = document.querySelector('.popup-check'),
        popupCall = document.querySelector('.popup-call');

//call button
    callBtn.forEach((elem) => {
        elem.addEventListener('click', () => {
            event.preventDefault();

            popupCall.style.display = 'block';
            });
        });
        
    popup.addEventListener('click', (event) => {
        let target = event.target;

        if (target.classList.contains('popup-close')) {
            popupCall.style.display = 'none';
        } else {
            target = target.closest('.popup-content');
            if (!target) {
                popupCall.style.display = 'none';
                }
            }
        });

//discount button
    discountBtn.forEach((elem) => {
        elem.addEventListener('click', () => {
            event.preventDefault();

            popupDiscount.style.display = 'block';
            });
        });

    popupDiscount.addEventListener('click', (event) => {
        let target = event.target;
    
        if (target.classList.contains('popup-close')) {
            popupDiscount.style.display = 'none';
        } else {
            target = target.closest('.popup-content');
            if (!target) {
                popupDiscount.style.display = 'none';
                }
            }
        });

//check button
    checkBtn.forEach((elem) => {
        elem.addEventListener('click', () => {
            event.preventDefault();

            popupCheck.style.display = 'block';
            });
        });

        popupCheck.addEventListener('click', (event) => {
        let target = event.target;
    
        if (target.classList.contains('popup-close')) {
            popupCheck.style.display = 'none';
        } else {
            target = target.closest('.popup-content');
            if (!target) {
                popupCheck.style.display = 'none';
                }
            }
        });
    
    };
            
    popups();       
    

//send-ajax-form
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

    sendForm();

    
//Validation Inputs
const validationInput = () => {
    let inputs = document.querySelectorAll('form');
    
    inputs = document.querySelectorAll('input[class = "phone-user"]');
		inputs.forEach((elem) => {
			elem.addEventListener('input', () => {
				elem.value = elem.value.replace(/[^0-9]/, '');
			});
		});

	inputs = document.querySelectorAll('input[name = "user_name"]');
		inputs.forEach((elem) => {
			elem.addEventListener('input', () => {
				elem.value = elem.value.replace(/[^а-яА-Я]+$/i, '');
			});
		});
    };

    validationInput();
});