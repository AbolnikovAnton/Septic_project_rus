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
});