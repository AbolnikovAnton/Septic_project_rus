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

    export default validationInput;