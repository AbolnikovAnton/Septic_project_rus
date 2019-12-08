//_____________Created_By_Anton_Bakunin_____________//

window.addEventListener('DOMContentLoaded', function () {
'use strict';

//accordion

const accordion = () =>{
//     let accordionItems = document.getElementById('accordion'),
//         panel = accordionItems.querySelectorAll('.panel-default'),
//         constructBtn = accordionItems.querySelectorAll('.construct-btn');

//         panel[0].classList.add('active');
  
//     const closeSection = () => {
//         for (let i = 0; i < constructBtn.length; i++) {
//                 let element = constructBtn[i];

//                 console.log(element);
                
                                
//             element.onclick = () =>{    
//                 event.preventDefault();

//                 element.classList.remove('active');
//                 // element.nextElementSibling.classList.add('hide');
//             };
//         }
//     };
// };
    
    // const openSection = () => {
    // //     for (let i = 0; i < panel.length; i++) {
    // //         let element = panel[i];
                            
    //         element.onclick = () =>{    
    //             event.preventDefault();

    //         panel.forEach(()=>{
    //             element.classList.add('active');
    //             element.nextElementSibling.classList.remove('hide');
    //         });  

    //     };
    // }
// };

    // closeSection();
    // openSection();

//Working accordion code
    let accItems = document.querySelectorAll('.panel-heading');

    for (let i = 0; i < accItems.length; i++) {
        const element = accItems[i];
        
        element.onclick = () =>{    
            event.preventDefault();

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
    
    accordion();

};
// };

  
//accordion + calculator    
// let calculatorBtn = document.querySelectorAll('.construct-btn');
// let accItems = document.querySelectorAll('.panel-heading');


//     calculatorBtn.forEach((elem) =>{
//         elem.addEventListener('click', ()=>{
//             event.preventDefault();

//             let target = event.target,
//                 panel = target.closest('.panel-default'),
//                 nexPanel = panel.nextElementSibling;

//             closeSection(panel);
//             openSection(nexPanel);

//             // for (let i = 0; i < accItems.length; i++) {
//             //     const element = accItems[i];
       
            //     accItems.forEach((item) =>{
            //         item.previousElementSibling.remove('active');
            //         console.log(item.previousElementSibling);
                    
            //         // item.nextElementSibling.classList.add('hide');
            //         // item.nextElementSibling.classList.remove('show');
                    
                // });
                
                // document.parentElement.classList.remove('hide');
                // document.parentElement.classList.add('show');
            // }
        // });
    // });

});