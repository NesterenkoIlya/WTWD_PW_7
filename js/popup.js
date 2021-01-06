const popup_links = document.querySelectorAll('.popup_link');   //Get all objects that open the popup
const popup = document.getElementById('popup');                //Get popup

//Calling a popup_open() by clicking on the opening object
if (popup_links.length > 0) {
    for (let i = 0; i < popup_links.length; i++) {
        const popup_link = popup_links[i];
        popup_link.addEventListener('click', function (e) {
           popup_open(popup);
           e.preventDefault();
        });
    }
}

//Calling a popup_close() by clicking on the close button
const popup_close_icon = document.querySelector('#close_btn');
popup_close_icon.addEventListener('click', function (e) {
    popup_close(popup_close_icon.closest('.popup'));
    e.preventDefault();
});

//Function that makes the popup visible
function popup_open(current_popup) {
    if (current_popup) {
        current_popup.style.opacity = '1';
        current_popup.style.visibility = 'visible';

        //Function that closes the popup when the user clicks on objects that are not inside popup_content
        current_popup.addEventListener('click', function (e) {
            if (!e.target.closest('.content')) {
                popup_close(e.target.closest('.popup'));
            }
        });
    }
}

//Function that make popup invisible
function popup_close(popup_active) {
    popup_active.style.opacity = '0';
    popup_active.style.visibility = 'hidden';
}
