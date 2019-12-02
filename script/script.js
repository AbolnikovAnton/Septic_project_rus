//_____________Created_By_Anton_Bakunin_____________//

window.addEventListener('DOMContentLoaded', function () {
'use strict';

// popups
const popups = () => {
    const callBtn = document.querySelectorAll('.call-btn'),
        popupDiscount = document.querySelector('.popup-discount'),
        discountBtn = document.querySelectorAll('.discount-btn'),
        popup = document.querySelector('.popup'),
        popupCall = document.querySelector('.popup-call');


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
        };
            
    popups();            
});