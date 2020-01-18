const taxRate = 0.08;
const phonePrice = 25;
const accessoryPrice = 5;
const spendingThreshold = 50;

function totalPhonePrice(numPhones){
    let purchasePrice = 0;
    for (let i = 0; i < numPhones; i++){
        purchasePrice += phonePrice;
        if (purchasePrice < spendingThreshold){
            purchasePrice += accessoryPrice;
        }
    }
    return calculateTax(purchasePrice);
}

function calculateTax(price){
    return price + (price * taxRate);
}

function formatPrice(price){
    return `$${price.toFixed(2)}`;    
}

function buyPhones(numPhones, bankBalance){
    let price = totalPhonePrice(numPhones);
    if(price > bankBalance){
        return "You can't afford these phones!";
    } else {
        return `Your remaining balance is ${formatPrice(bankBalance - price)}`;
    }
}