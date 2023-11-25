//SIDEBAR

const menuItems = document.querySelectorAll('.menu-item');

//MESSAGES
const messagesNotification = document.querySelector('#message-notification');
const messages = document.querySelector('.messages');

//remove active class from all menu items
const changeActiveItems = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notification-popup')
            StylePropertyMap
        }
    })
})