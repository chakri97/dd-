let toggled = false;
const container = document.getElementById('container');
const button = document.getElementById('button');

button.addEventListener('click', () => {
    if (toggled) {
        container.innerText = 'Initial Text';
        container.style.backgroundColor = 'lightblue';
        button.innerText = 'Change';
    } else {
        container.innerText = 'Changed Text';
        container.style.backgroundColor = 'lightgreen';
        button.innerText = 'Reset';
    }
    toggled = !toggled;
});
