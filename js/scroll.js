const anim_items = document.querySelectorAll('._anim_item');

if (anim_items.length > 0) {
    window.addEventListener('scroll', anim_on_scroll);
    function anim_on_scroll(params) {
        for (let i = 0; i < anim_items.length; i++) {
            const anim_item = anim_items[i];
            const anim_item_h = anim_item.offsetHeight;
            const anim_item_offset = offset(anim_item).top;
            const anim_start = 4;

            let anim_item_point = window.innerHeight - anim_item_h / anim_start;

            if (anim_item_h > window.innerHeight) {
                anim_item_point = window.innerHeight - window.innerHeight / anim_start;
            }

            if ((pageYOffset > anim_item_offset - anim_item_point) && pageYOffset < (anim_item_offset + anim_item_h)) {
                anim_item.classList.add('_active');
            } else {
                anim_item.classList.remove('_active')
            }
        }
    }
    setTimeout(() => {
        anim_on_scroll();
    }, 300 );
}

function offset(el) {
    const rect = el.getBoundingClientRect(),
        scroll_left = window.pageXOffset || document.documentElement.scrollLeft,
        scroll_top = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scroll_top, left: rect.left + scroll_left }
}