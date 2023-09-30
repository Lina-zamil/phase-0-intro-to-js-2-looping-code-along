// Code your solutions in this file


const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }

    return gifts;
}

wrapGifts(gifts);

function writeCards(myArray, eventName) {
    let arr = [];
    for (let counter = 0; counter < myArray.length; counter++) {
        arr.push(`Thank you, ${myArray[counter]}, for the wonderful ${eventName} gift!`);
        debugger;
    }
    return (arr);

};

console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));

function countDown(number) {
    if (number > 0) {
        while (number >= 0) {
            console.log(number);
            number--;
        }
    }
}
countDown(10);