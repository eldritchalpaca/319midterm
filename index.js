
    fetchJson();
    let entries = [];
    let _data;
    
    function fetchJson() {
        fetch('data.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                appendData(data);
            })
            .catch(function (err) {
                console.log('error:' + err);
            });
    }
    
    function appendData(data) {
        _data = data;
        
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
                let divName = document.createElement("div");
                let divDesc = document.createElement("div");
                let img = document.createElement("img");
                let link = document.createElement("a");
                link.href = `${element["imgSource"]}`
                link.text = "image source"
                img.src = `${element["image"]}`;
                img.alt = `${element["name"]}`;
                img.height = 300;
                divName.innerText = element["name"];
                divName.classList.add("title");
                divDesc.innerHTML = `${element["description"]} <br> ${element["location"]}`;
                col.appendChild(divName);
                col.appendChild(img);
                col.appendChild(divDesc);
                col.appendChild(link);
                entries.push(col);
                x++;
            }
        } // end of for
    } // end of function appendData
    

    function appendDataButton(arr) {
        
        let mainContainer = document.getElementById("main_container");
        let count = 0;
        for (let element of entries) {
            if (arr.length == 0 || arr.includes(count)) {
                mainContainer.appendChild(element);
                console.log("here!");
            }
            else {
                console.log("false");
            }
            count++;
        }
    } // end of function appendData

    function filterByLocation() {
        document.getElementById("main_container").innerHTML = "";
        document.getElementById("main_container").classList.add("grid");

        let validRegions = [];
        let display = [];

        if (document.getElementById("asia").checked) {validRegions.push("asia");}
        if (document.getElementById("europe").checked) {validRegions.push("europe");}
        if (document.getElementById("NA").checked) {validRegions.push("north america");}
        if (document.getElementById("global").checked) {validRegions.push("global");}
        if (validRegions.length == 0) {
            appendDataButton(display);
            return;
        }
        
        let found = Object.values(_data.Mushroom).forEach((obj,index) => {
            for (region of validRegions) {
                if(obj.location[0] == "global" || obj.location.includes(region)){
                    display.push(index);
                }
            }

        })


        appendDataButton(display);
        

    }

