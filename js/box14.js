async function box14() {

    let box14HTML=""

    let data = await fetch("http://localhost:3000/box14")

    let res = await data.json()

    res.forEach(elem => {
        
        
        box14HTML+=`
        
            <h2> ${elem.title} </h2>
        
        `
    });


    document.querySelector("div.wrapper>div.box14").innerHTML=box14HTML
    
}

export default box14