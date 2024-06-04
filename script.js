document.addEventListener('click' , (e)=>{
    const isDropdownButton = e.target.matches('[data-dropdown-button]')
    if(!isDropdownButton && e.target.closest('[data-dropdown]') != null) return

    let currDropdown
    if(isDropdownButton){
        currDropdown = e.target.closest('[data-dropdown]')
        currDropdown.classList.toggle('active')
    }
    document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
        if(dropdown === currDropdown)return
        dropdown.classList.remove('active')
    })
})