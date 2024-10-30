
const allBtn = document.getElementsByClassName('btn-items')
// console.log(allBtn)
let count = 0;
for(const btn of allBtn){
    btn.addEventListener('click',function(event){
        count += 1;
        // get current count and increase
        setInnerText('current-number',count)
        // 
        const placeName = event.target.parentNode.parentNode.childNodes[1].innerText
        const price = event.target.parentNode.parentNode.childNodes[3].childNodes[1].innerText

        const selectedContainer = document.getElementById('selected-place-container')
        // createElement
        const li = document.createElement('li');

        const p = document.createElement('p');
        p.innerText = placeName;
        const p2 = document.createElement('p');
        p2.innerText = price
        // added class
        li.classList.add('flex' ,'gap-3','justify-center')
        li.appendChild(p)
        li.appendChild(p2)
        selectedContainer.appendChild(li)

        // total budget increase or decrese
        const totalBudget = document.getElementById('total-budget').innerText;
        const convertTotalBudget = parseInt(totalBudget);
        const excectValue = convertTotalBudget - parseInt(price)
        if(excectValue < 0){
            alert('low budget please earn more');
            return
        }
        // show excectValue
        document.getElementById('total-budget').innerText = excectValue;


        // total cost
        totalCost('total-cost',(price))
        // grand total
        grandTotalCost('grand-total',price)


    })
}
// total cost
function totalCost(id,value){
    const elementText = document.getElementById(id).innerText;
    const convertElementValue = parseInt(elementText)
    // console.log(convertElementValue)
    const sum = convertElementValue + parseInt(value);
    setInnerText('total-cost',sum)
    // console.log(sum)
}
// grand total cost
function grandTotalCost(category){
    
    const totalCost = document.getElementById('total-cost').innerText;
    const convertValue = parseInt(totalCost);
    // going way
    if(category === 'bus'){
        const busBudget = convertValue + 100;
    setInnerText('grand-total',busBudget)
    }
    else if(category === "train"){
        const trainBudget = convertValue - 200;
        setInnerText('grand-total',trainBudget);
    }
    else if(category === "flight"){
        const flightBudget = convertValue + 500;
        setInnerText('grand-total',flightBudget);
    }
    else{
        setInnerText('grand-total',convertValue)
    }
}

// set innerText
function setInnerText(id,value){
    const element = document.getElementById(id);
    element.innerText = value;
}