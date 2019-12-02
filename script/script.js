//_____________Created_By_Anton_Bakunin_____________//

window.addEventListener('DOMContentLoaded', function () {
'use strict';

// popup phone
const popupPhone = () => {
    const callBtn = document.querySelectorAll('.call-btn'),
        popup = document.querySelector('.popup'),
        popupCall = document.querySelector('.popup-call');


        callBtn.forEach((elem) => {
			elem.addEventListener('click', () => {
                popupCall.style.display = 'block';
                if (windowWidth > 768) {
					popup.style.opacity = '0';
				    }
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
        };
            
    popupPhone();            
});