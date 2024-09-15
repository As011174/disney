async function box08() {

    let box08HTML=""

    let data = await fetch("http://localhost:3000/box08")

    let res = await data.json()

    res.forEach(elem => {
        
        
        box08HTML+=`
        
            <h2> ${elem.title} </h2>
        
        `
    });


    document.querySelector("div.wrapper>div.box08").innerHTML=box08HTML
    
}

export default box08