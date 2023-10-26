//GLOBAL VARIABLES
let basePrice = 0;
let taxAmount = 0;
let totalDue = 0;
const TAX_RATE = 0.0825;

function submitOrder(
    scoopCount, 
    containerType, 
    hasSprinkles, 
    hasFudge, 
    hasWhip, 
    hasCherry
){
    basePrice = 2.25 //ONE SCOOP
    
    const additionalScoops = scoopCount - 1;
    // basePrice = basePrice + (1.25 * additionalScoops);
    basePrice += 1.25 * additionalScoops; //SAME AS ABOVE COMMENT

    if(containerType === "cup"){
        if(hasSprinkles){
            basePrice += 0.5;
        }
        if(hasFudge){
            basePrice += 1.25;
        }
        if(hasWhip){
            basePrice += 0.25;
        }
        if(hasCherry){
            basePrice += 0.25;
        }
    }
    taxAmount = TAX_RATE * basePrice;
    totalDue = basePrice + taxAmount;
}

//TESTS!!!
submitOrder(4, "cup", true, true, true, true)
console.log(basePrice, taxAmount, totalDue);

submitOrder(1, "cone", false, false, false, false)
console.log(basePrice, taxAmount, totalDue);
