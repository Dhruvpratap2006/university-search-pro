let colleges_URL = "http://universities.hipolabs.com/search?country=";

let btn = document.querySelector('button');
btn.addEventListener("click", async () => {
    let country = document.querySelector("input").value;
    console.log(country);
    let collArr = await getColleges(country);
    show(collArr);
})

function show(collArr) {
    let list = document.querySelector("#list");
    list.innerHTML = ""; // Clear old evidence

    for (let i = 0; i < collArr.length; i++) {
        let li = document.createElement("li");

        let name = collArr[i].name; // college name
        let state = collArr[i]["state-province"];

        // Simple but aesthetic structure
        if(state != null) {
            // FIXED: Removed the extra 'e' from innerText
            li.innerText = "College #" + (i+1) + ": " + name + " (" + state + ")";
        } else {
            li.innerText = "College #" + (i + 1) + ": " + name;
        }
        
        list.appendChild(li);
    }
}

async function getColleges(country) {
    try {
        let coll = await axios.get(colleges_URL + country);
        return coll.data;
    } catch(err) {
        console.log("Error:", err);
        return [];
    }
}
