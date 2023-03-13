fetch('home.json')
.then(function (response) {
return response.json();
})
.then(function (data) {
loadHome(data);
})
.catch(function (err) {
console.log('error:' + err);
})

function loadHome(data) {
    let x = 0;
    let mainContainer = document.getElementById("main");
    mainContainer.style.maxWidth = "50";
    for (let name in data) {
        for (let element of data[name]) {
            let div = document.createElement("div");
            div.classList.add("carousel-item");
            
            if (x == 0) {
                div.classList.add("active");
                x++;
            }
            
            let img = document.createElement("img");
            img.src = `${element["image"]}`;
            img.alt = `${element["alt"]}`;
            img.style.maxHeight = "600px";
            img.style.height = "auto";
            img.style.width = "auto";
            img.classList.add("center")


            let link = document.createElement("a");
            link.href = `${element["image_source"]}`
            link.text = "image source"
            link.style.textAlign = "center"
            link.classList.add("center"); 

            div.appendChild(img);
            div.appendChild(link); 
            mainContainer.appendChild(div);
        }
    }
}

