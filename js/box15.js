async function box15() {

    let box15HTML=""

    let data = await fetch("http://localhost:3000/box15")

    let res = await data.json()

    res.forEach(elem => {
        
        
        box15HTML+=`
        
            <div class="img">

                <img src="${elem.img}" alt="">

                <h2> ${elem.title} </h2>

                <a href="${elem.des}">JOIN THE FAMILY</a>
                
            </div>
        
        `
    });


    document.querySelector("div.wrapper>div.box15").innerHTML=box15HTML
    
}

export default box15