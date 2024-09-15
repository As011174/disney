async function box10() {

    let box10HTML=""

    let data = await fetch("http://localhost:3000/box10")

    let res = await data.json()

    res.forEach(elem => {
        
        
        box10HTML+=`
        
            <h2> ${elem.title} </h2>
        
        `
    });


    document.querySelector("div.wrapper>div.box10").innerHTML=box10HTML
    
}

export default box10