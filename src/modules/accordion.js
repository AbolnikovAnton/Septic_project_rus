
const accordion = () =>{

    let accItems = document.querySelectorAll('.panel-heading');

    for (let i = 0; i < accItems.length; i++) {
        const element = accItems[i];
        
        element.onclick = () =>{    
            event.preventDefault();

        console.log(element);
        
        accItems.forEach((item) =>{
            item.classList.remove('active');
            item.nextElementSibling.classList.add('hide');
            item.nextElementSibling.classList.remove('show');
            });

            element.classList.add('active');
            element.nextElementSibling.classList.remove('hide');
            element.nextElementSibling.classList.add('show');
        };
    } 
};

export default accordion;