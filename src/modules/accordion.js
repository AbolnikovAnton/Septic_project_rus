const accordion = () => {
    let accItems = document.querySelectorAll('.panel-heading');

    let constructorStepButtons = document.querySelectorAll('.construct-btn:not(.call-btn)');

    constructorStepButtons.forEach((elem) => {
        elem.addEventListener('click', (event) => {
            event.preventDefault();
            const target = event.target;
            const panel = target.closest('.panel');
            const nextPanel = panel.nextElementSibling;
            closeSection(panel);
            openSection(nextPanel);
        });
    });

    const closeSection = (section) => {
        section.querySelector('.panel-collapse').classList.add('hide');
        section.querySelector('.panel-collapse').classList.remove('show');
    };
    const openSection = (section) => {
        section.querySelector('.panel-collapse').classList.remove('hide');
        section.querySelector('.panel-collapse').classList.add('show');
    };

    for (let i = 0; i < accItems.length; i++) {
        const element = accItems[i];

        element.onclick = (event) => {
            event.preventDefault();
            const target = event.target;
            const panel = target.closest('.panel');

            accItems.forEach((item) => {
                closeSection(item.closest('.panel'));
            });

            openSection(panel);
        };
    }

};


export default accordion;