async function box06() {

    let box06HTML=""

    let data = await fetch("http://localhost:3000/box06")

    let res = await data.json()

    res.forEach(elem => {
        
        
        box06HTML+=`
        
            <div class="bound">
            
                    <p> ${elem.title} </p>

            </div>
        
        `
    });


    document.querySelector("div.wrapper>div.box06").innerHTML=box06HTML
    
}

export default box06