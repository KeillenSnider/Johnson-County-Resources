const toggleMenu = document.querySelector('.three-bars');

const topBar = document.querySelector('.top-bar');

const mobileToggleArrow = document.querySelector('.toggle-arrow')

const mobileList = document.querySelector('.mobile-main-list')


//________________________________________________________________________________________

//When a user clicks the menu button and open the top bar class
toggleMenu.addEventListener('click', function(){

    topBar.classList.toggle('open');

    const isOpen = topBar.classList.contains('open');

    toggleMenu.setAttribute('aria-expanded', isOpen);

})


//When someone does not click on the correct area it closes it
//Listen for a click anywhere
document.addEventListener('click', function(e){

    //Did the user click in the menu or the button
    const clickedInsideMenu = topBar?.contains(e.target);
    const clickedToggle = toggleMenu?.contains(e.target);
    const clickedInsideSub = mobileList?.contains(e.target);
    const clickedArrow = mobileToggleArrow?.contains(e.target);

    //If not then close the menu
    if(!clickedInsideMenu && !clickedToggle){

        topBar.classList.remove('open');
        toggleMenu.setAttribute('aria-expanded', 'false');

    }

    if(!clickedInsideSub && !clickedArrow){

        mobileList?.classList.remove('open');

        mobileToggleArrow?.setAttribute('aria-expanded', 'false');

        if(mobileToggleArrow){

            mobileToggleArrow.textContent = '▸ JUMP TO SUBPAGE';

        }

    }

})

//________________________________________________________________________________________


mobileToggleArrow?.addEventListener('click', function(){

    mobileList.classList.toggle('open');

    const isOpen = mobileList.classList.contains('open');

    mobileToggleArrow.setAttribute('aria-expanded', isOpen);

    //change the text
    if(isOpen){

        mobileToggleArrow.textContent = '▾ JUMP TO SUBPAGE';

    } else{

        mobileToggleArrow.textContent = '▸ JUMP TO SUBPAGE';

    }

})


document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){

        const wasTopBarOpen = topBar.classList.contains('open');
        const wasMobileListOpen = mobileList?.classList.contains('open');

        topBar.classList.remove('open');
        toggleMenu.setAttribute('aria-expanded', 'false');
        mobileList?.classList.remove('open');
        mobileToggleArrow?.setAttribute('aria-expanded', 'false');
        if(mobileToggleArrow){
            mobileToggleArrow.textContent = '▸ JUMP TO SUBPAGE';
        }

        //Return focus to whichever control the user was actually in
        if(wasMobileListOpen && mobileToggleArrow){

            mobileToggleArrow.focus();

        } else if(wasTopBarOpen){

            toggleMenu.focus();

        }

    }
});