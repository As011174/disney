async function menu() {
    let menuHTML = "";

    
        let data = await fetch("http://localhost:3000/menu");
        let res = await data.json();

        res.forEach((elem, index) => {
            if (index === 0) {
                menuHTML += `
                    <li>
                        <img src="${elem.imgsrc}" alt="Logo" id="menu-image">
                        <a href="${elem.link}" target="_blank">${elem.name}</a>
                    </li>
                `;
            } else {
                menuHTML += `
                    <li>
                        <a href="${elem.link}" target="_blank">${elem.name}</a>
                    </li>
                `;
            }
        });

        document.querySelector("div.menu > nav > ul").innerHTML = menuHTML;
        event_menu();
    
    
}

function event_menu() {
    let a = document.querySelectorAll('div.wrapper > div.menu > nav > ul > li > a');
    
    a.forEach(elem => {
        elem.addEventListener("mouseenter", function() {
            this.classList.add("enter");
        });

        elem.addEventListener("mouseleave", function() {
            this.classList.remove("enter");
        });
    });

    // Access the image element
    
}

// Execute the menu function to populate the menu when the script is loaded
menu();

export default { menu, event_menu };