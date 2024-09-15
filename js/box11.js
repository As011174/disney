async function box11() {

    let box11HTML=""

    let data = await fetch("http://localhost:3000/box11")

    let res = await data.json()

    res.forEach(elem => {
        
        
        box11HTML+=`
        
            <div>

                <img src="${elem.imgsrc1}" alt="">

                <img src="${elem.imgsrc2}" alt="">

            </div>

            <div>

                <img src="${elem.imgsrc3}" alt="">

            </div>
        
        `
    });


    document.querySelector("div.wrapper>div.box11").innerHTML=box11HTML
    
}

export default box11