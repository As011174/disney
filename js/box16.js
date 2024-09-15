async function box16() {

    let box16HTML=""

    let data = await fetch("http://localhost:3000/box16")

    let res = await data.json()

    res.forEach(elem => {
        
        
        box16HTML+=`
        
            <p> ${elem.des} </p>

            <a href="${elem.link1}">
            
            <i class="fab fa-facebook"></i>

            </a>

            <a href="${elem.link2}">
            
            <i class="fab fa-instagram"></i>
            
            </a>

            <a href="${elem.link3}">
            
            <i class="fab fa-twitter"></i>
            
            </a>

            <a href="${elem.link4}">
            
            <i class="fab fa-youtube"></i>
            
            </a>
        
        `
    });


    document.querySelector("div.wrapper>div.box16").innerHTML=box16HTML
    
}

export default box16