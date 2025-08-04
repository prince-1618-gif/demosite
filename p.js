document.addEventListener('DOMContentLoaded', (event) => {
    const subMenuWrap = document.querySelector('.submenu-wrap');
    const userImg = document.querySelector('.userimg');

    userImg.addEventListener('click', () => {
        subMenuWrap.classList.toggle('show');
    });
});