async function box05() {

    let box05HTML=""

    let data = await fetch("http://localhost:3000/box05")

    let res = await data.json()

    res.forEach(elem => {
        
        
        box05HTML+=`
        
            <div class="bound">
            
                    <a href="${elem.link}">SUBSCRIBE NOW*</a>

            </div>
        
        `
    });


    document.querySelector("div.wrapper>div.box05").innerHTML=box05HTML
    
}

export default box05