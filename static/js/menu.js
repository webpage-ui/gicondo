function menuToggle(){
    const toggleMenu = document.querySelector(".toggle"); 
    const glass_menu = document.querySelector(".glass-menu"); 

    toggleMenu.classList.toggle("active"); 
    glass_menu.classList.toggle("active");

    if(toggleMenu.classList.contains("active")){
        const icon = document.createElement("img"); 
        icon.src = "static/images/icons/close.svg"; 
        icon.alt = "Close menu"; 
        icon.classList.add("icon"); 

        document.querySelector(".icon").remove(); 
        toggleMenu.append(icon); 
    }
    else if(!toggleMenu.classList.contains("active")){
        const icon = document.createElement("img"); 
        icon.src = "static/images/icons/list.svg"; 
        icon.alt = "Open menu"; 
        icon.classList.add("icon");

        document.querySelector(".icon").remove(); 
        toggleMenu.append(icon); 
    }
}