fetch('data.json')
.then(function (response) {
return response.json();
})
.then(function (data) {
appendData(data);
})
.catch(function (err) {
console.log('error:' + err);
})

function appendData(data) {
    let mainContainer = document.getElementById("main_container");
    let row = document.createElement("div");
    row.classList.add("row");
    mainContainer.appendChild(row);
    let x = 0;
    for (let name in data) {
        for (let element of data[name]) {
            if (x % 3 == 0) {
                row = document.createElement("div");
                row.classList.add("row");
                mainContainer.appendChild(row);
            }
            let col = document.createElement("div");
            col.classList.add("col");
            row.appendChild(col);

            console.log(element);
            let div2 = document.createElement("div");
            let img = document.createElement("img");
            img.src = `${element["image"]}`;
            img.alt = `${element["name"]}`;
            img.width = 300;
            col.appendChild(img);
            div2.innerHTML = `${element["name"]} : ${element["description"]} <br>`;
            col.appendChild(div2);
            x++;
        }
    } // end of for
} // end of function appendData
