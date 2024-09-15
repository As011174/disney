async function box09() {

    let box09HTML=""

    let data = await fetch("http://localhost:3000/box09")

    let res = await data.json()

    res.forEach(elem => {
        
        
        box09HTML+=`
        
            <div class="card">

                <img src="${elem.imgsrc}" alt="">

                <h4> ${elem.title} </h4>

                <p> ${elem.description} </p>

                <div class="footer"> ${elem.footer} </div>
            </div>
        
        `
    });


    document.querySelector("div.wrapper>div.box09").innerHTML=box09HTML
    
}

export default box09