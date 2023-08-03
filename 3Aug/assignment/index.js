async function getData() {
    const respose = await fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data");
    const scores = await respose.json();
    scores.sort((a,b)=>{
        return a.NRR - b.NRR;
    })
    console.log(scores);
    const tbody = document.querySelector("tbody");
    for(let score of scores) {
        const tr = document.createElement("tr");
        for(let value of Object.values(score)){
         const td1 = document.createElement("td");
         td1.innerText = value;
         tr.appendChild(td1);
        }
        console.log(tr);
        tbody.appendChild(tr);
    }
}

getData();