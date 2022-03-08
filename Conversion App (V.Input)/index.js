
let lengthConvert = document.getElementById("length-convert")
console.log(lengthConvert)

let volumeConvert = document.getElementById("volume-convert")
console.log(volumeConvert)

let massConvert = document.getElementById
("mass-convert")
console.log(massConvert)

let submitConvert = document.getElementById("submit")



    // x.innerHTML = 20
    // let x = x.textContent
    


// convertNo()

// let lengthConvertx = x.innerHTML

// let feetLengthFormula = x.innerHTML + 10.28

//////////////////////////////////////////////////
function convert(){
    var x = document.getElementById("number-to-convert").value;
    console.log(x)
    let feetLengthFormula = x * 3.2808 
let metersLengthFormula = x * 0.3048

function convertLength(){
    lengthConvert.innerHTML =  
    x +" meters = " + feetLengthFormula + " feet | " + x +  " feet = " + 
    metersLengthFormula + " meters" 
}

convertLength()


////////////////////////////////////////////

let gallonVolumeFormula = x * 0.2641
let literVolumeFormula = x * 3.7854

function convertVolume(){
    volumeConvert.textContent =  
    x +" Liters = " + gallonVolumeFormula + " Gallons | " + x +  " Gallons = " + 
    literVolumeFormula + " Liters"
}

convertVolume()

//////////////////////////////////////

let poundMassFormula = x * 2.2046
let kiloMassFormula = x * 0.4535

function convertMass(){
    massConvert.textContent =  
    x +" Kilos = " + poundMassFormula + " Pounds | " + x +  " Pounds = " + 
    kiloMassFormula + " Kilos"
}

convertMass()
}
let feetLengthFormula = x * 3.2808 
let metersLengthFormula = x * 0.3048

function convertLength(){
    lengthConvert.innerHTML =  
    x +" meters = " + feetLengthFormula + " feet | " + x +  " feet = " + 
    metersLengthFormula + " meters" 
}

convertLength()


////////////////////////////////////////////

let gallonVolumeFormula = x * 0.2641
let literVolumeFormula = x * 3.7854

function convertVolume(){
    volumeConvert.textContent =  
    x +" Liters = " + gallonVolumeFormula + " Gallons | " + x +  " Gallons = " + 
    literVolumeFormula + " Liters"
}

convertVolume()

//////////////////////////////////////

let poundMassFormula = x * 2.2046
let kiloMassFormula = x * 0.4535

function convertMass(){
    massConvert.textContent =  
    x +" Kilos = " + poundMassFormula + " Pounds | " + x +  " Pounds = " + 
    kiloMassFormula + " Kilos"
    convertMass()
}

convert()

