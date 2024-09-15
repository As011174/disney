async function box13() {

    let box13HTML=""

    let data = await fetch("http://localhost:3000/box13")

    let res = await data.json()

    res.forEach(elem => {
        
        
        box13HTML+=`
        
            <div>

                <img src="${elem.img}" alt="">

                <p> ${elem.des} </p>

            </div>
        
        `
    });


    document.querySelector("div.wrapper>div.box13").innerHTML=box13HTML
    
}

export default box13