async function box07() {

    let box07HTML=""

    let data = await fetch("http://localhost:3000/box07")

    let res = await data.json()

    res.forEach(elem => {
        
        
        box07HTML+=`
        
            <div class="head">

                <h2> ${elem.title} </h2>
            </div>

            <div class="mid">

                <div class="img">

                    <img src="${elem.imgsrc1}" alt="">

                    <img src="${elem.imgsrc2}" alt="">

                    <p> ${elem.description} </p>

                    <a href="${elem.link}">SHOP NOW</a>
                </div>
            </div>
        
        `
    });


    document.querySelector("div.wrapper>div.box07").innerHTML=box07HTML
    
}

export default box07