window.addEventListener('DOMContentLoaded', app);

const toggleHeader = (burgerElement, backgroundColor, backgroundPosition = '0', valorPosition = '0') => {
    const burger = document.getElementById(burgerElement);
    const navigation = document.querySelector('.navigation');
    const background = document.getElementById('background');

    burger.addEventListener('click', toggle);

    function toggle() {
        navigation.style.right = valorPosition;
        navigation.style.transition = 'all .2s linear'

        background.style.left = backgroundPosition;
        background.style.backgroundColor = backgroundColor;
        background.style.transition = 'all .2s linear'
    }

}
const plantillaFeatures = `

    <ul class="container__li-created features">
            
        <li>
            <img src="./images/icon-todo.svg" alt="">
            Todo List
        </li>

        <li>
            <img src="./images/icon-calendar.svg" alt="">
            Calendar
        </li>

        <li>
            <img src="./images/icon-reminders.svg" alt="">
            Reminders
        </li>
        <li>
            <img src="./images/icon-planning.svg" alt="">
            Plannig
        </li>

    </ul>
`;

const plantillaCompany = `
    <ul class="container__li-created company">
                
        <li>
            History
        </li>

        <li>
            Our Team
        </li>

        <li>
            Blog
        </li>

    </ul>
`;

const createFeatures = (display, plantilla, containerAppID, elementLI, arrowUp, arrowDown) => {
    const li = document.getElementById(elementLI);
    const appFeatures = document.getElementById(containerAppID);
    const imgUp = document.getElementById(arrowUp)
    const imgDown = document.getElementById(arrowDown)

    li.addEventListener('click', () => {
        
        if(appFeatures.childNodes.length > '1') {
            imgDown.style.display = 'block';
            imgUp.style.display = 'none'
            appFeatures.style.display = 'none';
            appFeatures.innerHTML = ''

        } else {
            imgDown.style.display = 'none';
            imgUp.style.display = 'block'
            appFeatures.style.display = display;
    
            appFeatures.innerHTML = plantilla;
        }
    })
}


function app() {
    
    toggleHeader('open-burger', 'hsla(0, 0%, 8%, .8)');
    toggleHeader('close-burger', 'hsla(0, 0%, 8%, 0)', '-35%', '-65%');

    createFeatures('flex', plantillaFeatures, 'appFeatures', 'features', 'arrow-up-f', 'arrow-down-f')
    createFeatures('flex', plantillaCompany, 'appCompany', 'company', 'arrow-up-c', 'arrow-down-c')
}

