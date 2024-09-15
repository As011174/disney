async function box12() {

    let box12HTML=""

    let data = await fetch("http://localhost:3000/box12")

    let res = await data.json()

    res.forEach(elem => {
        
        
        box12HTML+=`
        
            <h3> ${elem.title} </h3>
        
        `
    });


    document.querySelector("div.wrapper>div.box12").innerHTML=box12HTML
    
}

export default box12