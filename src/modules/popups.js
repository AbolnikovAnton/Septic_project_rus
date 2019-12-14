const popups = () => {
    const callBtns = document.querySelectorAll('.call-btn');
    const discountBtns = document.querySelectorAll('.discount-btn');
    const checkBtns = document.querySelectorAll('.check-btn');

    const popups = document.querySelectorAll('.popup');
    const popupCall = document.querySelector('.popup-call');

    popups.forEach((elem) => {
        elem.addEventListener('click', () => {
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

    });

    const callPopupFunc = (elem) => {
        elem.addEventListener('click', () => {
            event.preventDefault();
            popupCall.style.display = 'block';
        });
    };

    callBtns.forEach(callPopupFunc);
    discountBtns.forEach(callPopupFunc);
    checkBtns.forEach(callPopupFunc);
};
            
export default popups;