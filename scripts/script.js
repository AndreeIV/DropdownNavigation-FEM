window.addEventListener('DOMContentLoaded', app);

const toggleHeader = (burgerElement, backgroundColor, backgroundP, valorPosition) => {
    const burger = document.getElementById(burgerElement);
    const navigation = document.querySelector('.navigation');
    const background = document.getElementById('background');

    burger.addEventListener('click', toggle);

    function toggle() {
        navigation.style.right = valorPosition;
        background.style.backgroundColor = backgroundColor;
        background.style.left = backgroundP;
        navigation.style.transition = 'all 1s linear'
        background.style.transition = 'all 1s linear'
    }

}

function app() {
    
    toggleHeader('open-burger', 'hsla(0, 0%, 8%, .8)', '0', '0');
    toggleHeader('close-burger', 'hsla(0, 0%, 8%, 0)', '-35%', '-65%');
}

