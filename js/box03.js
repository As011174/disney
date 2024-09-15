async function box03() {

    let box03HTML=""

    let data= await fetch("http://localhost:3000/box03")

    let res= await data.json()

    res.forEach(elem => {
        
        box03HTML+=`
        
        
        
            <h2> ${elem.description} </h2>
        
        
        
        `
    });

    document.querySelector("div.wrapper>div.box03").innerHTML=box03HTML
    
}

export default box03