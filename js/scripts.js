

function changeMenuView(e){
    value = e.target.parentNode.getAttribute("data-value");
    if(value != null){
        for (let menucontentitem of e.target.parentNode.parentNode.parentNode.getElementsByClassName('menucontent')[0].getElementsByClassName('menucontentitem')){
            if(menucontentitem.getAttribute("data-value") == value){
                menucontentitem.classList.add('menucontentitemselected');
            } else {
                menucontentitem.classList.remove('menucontentitemselected');
            }
        }
    }
}





window.onload = function(){ 
    const menubar  = document.querySelector('.menubar');
    menubar.addEventListener('click', changeMenuView);


}

