async function box17() {

    let box17HTML=""

    let data = await fetch("http://localhost:3000/box17")

    let res = await data.json()

    res.forEach(elem => {
        
        
        box17HTML+=`
        
            <div class="logo">

                <img src="${elem.img}" alt="">
            </div>

            <div class="footer">

                <nav>
                    <ul>
                        <li><a href="${elem.link1}">Help</a></li>
                        <li><a href="${elem.link2}">Sign Up</a></li>
                        <li><a href="${elem.link3}">Sitemap</a></li>
                        <li><a href="${elem.link4}">Terms of Use</a></li>
                        <li><a href="${elem.link5}">UK & EU Privacy Rights</a></li>
                        <li><a href="${elem.link6}">Privacy Policy</a></li>
                        <li><a href="${elem.link7}">Coolie Policy</a></li>
                        <li><a href="${elem.link8}">Manage Your Cookie Settings</a></li>
                        <li><a href="${elem.link9}">Interest-based Ads</a></li>
                        <li><a href="${elem.link10}">Tax Strategy Statement</a></li>
                        <li><a href="${elem.link11}">S172 Statements</a></li>
                        <li><a href="${elem.link12}">About Us</a></li>
                        <li><a href="${elem.link13}">The Walt Disney Company</a></li>
                    </ul>
                </nav>


            </div>

            <div class="footer2">

                <p> ${elem.des} </p>
                
            </div>
        
        `
    });


    document.querySelector("div.wrapper>div.box17").innerHTML=box17HTML
    
}

export default box17