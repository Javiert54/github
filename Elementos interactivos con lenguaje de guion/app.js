const card = document.querySelector('.card');
const colors = document.querySelectorAll('.colors div');

let hexCodes = ['#CDEAE8', '#0D3F7C', '#00214A', '#04BBEC', '#EA25B5', '#FF82F4'];

colors.forEach((item, i) => {
    item.addEventListener('click', () => {
        const root = document.querySelector(':root');

        root.style.setProperty('--product-img', `url(img/${item.className}.jpg)`);
        root.style.setProperty('--bg-color', hexCodes[i]);
    })
})

card.addEventListener('click', () => {
    card.classList.add('active');
})

window.addEventListener('click', (e) => {
    if(e.target.className == ''){
        card.classList.remove('active');
    }
})