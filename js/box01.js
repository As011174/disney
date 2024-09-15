async function box01(){


let box01HTML = ""

let data = await fetch("http://localhost:3000/box01")

let res = await data.json()

res.forEach(elem => {
    box01HTML+=`
    
    <li>
        <img src="${elem.imgsrc}" alt="">
        <a href="${elem.link}" target="blank" ></a>
    
    </li>
    
    `
});

document.querySelector("div.wrapper>div.box01>nav>ul").innerHTML=box01HTML
}

box01();

export default box01