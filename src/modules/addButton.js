const addButton = () =>{
    let hiddenBlocks = document.querySelectorAll('.hidden'),
        hiddenBtn = document.querySelector('.add-sentence-btn');

        hiddenBtn.addEventListener('click', () => {
            hiddenBlocks.forEach((elem)=>elem.classList.remove('hidden'));
            hiddenBtn.classList.add('hidden');
        });
    };

    export default addButton;