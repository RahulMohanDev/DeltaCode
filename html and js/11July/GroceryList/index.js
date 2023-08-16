function calcTotal() {
    const prices = document.querySelectorAll('td[data-ns-test="price"]');
    const priceArray = Array.from(prices);
    const total = priceArray.reduce((acc,current)=>{
        return Number.parseInt(current.innerText) + acc;
    },0)
    const grandTotal = document.querySelector('td[data-ns-test="grandTotal"]');
    if(!grandTotal){
        createTrAndFillValue(total);
    }else{
        grandTotal.innerText=total;
    }
}

function createTrAndFillValue(total) {
    const tr = document.createElement("tr");
    const tdInfo = document.createElement("td");
    tdInfo.innerText = "Grand Total";
    const tdTotal = document.createElement("td");
    tdTotal.innerText = total;
    tdTotal.setAttribute("data-ns-test","grandTotal");
    tr.appendChild(tdInfo);
    tr.appendChild(tdTotal);
    // console.log(tr);
    const tbody = document.querySelector("tbody");
    tbody.appendChild(tr);
}