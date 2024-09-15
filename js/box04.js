async function box04() {

    let box04HTML=""

    let data = await fetch("http://localhost:3000/box04")

    let res = await data.json()

    res.forEach(elem => {
        
        
        box04HTML+=`
        
            <div class="entity">
            
            <div class="img">
            
                <img src="${elem.imgsrc}" alt="">
            
            </div>

            <div class="text">
            
                <p> ${elem.title} </p>
            
            </div>
            
            </div>
        
        `
    });


    document.querySelector("div.wrapper>div.box04").innerHTML=box04HTML
    
}

export default box04