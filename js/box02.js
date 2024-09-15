async function box02() {

    let box02Html =""

    let data = await fetch("http://localhost:3000/box02")

    let res = await data.json()

    res.forEach(elem => {
        
        box02Html+=`
        
        <div class="content">
        
            <img src="${elem.imagesrc}" alt="" >

            <div class="card-content">
            
                <h2> ${elem.title} </h2>

                <p> ${elem.description} </p>
            
            </div>

            <div class="footer"> ${elem.footer} </div>
        
        </div>
        
        `
    });
    
    document.querySelector("div.wrapper>div.box02").innerHTML=box02Html
}


export default box02