function cubeNumber(number) {
        if (typeof number !== 'number' || number <= 0) {
                return "Invalid input. Please put a positive number!!";
        }
        var result = Math.pow(number, 3);
        return result;
}


function matchFinder(string1, string2) {
        if (typeof string1 !== 'string' || typeof string2 !== 'string') {
                return "Invalid Input. Please provide both string only!!";
        }
        if (string1.includes(string2)) {
                return true;
        }
        else {
                return false;
        }
}


function sortMaker(arr) {
        if (!Array.isArray(arr) || arr.length !== 2 || typeof arr[0] !== 'number' || typeof arr[1] !== 'number' || arr[0] < 0 || arr[1] < 0) {
                return "Invalid Input";
        }
        if (arr[0] === arr[1]) {
                return "equal";
        }
        else {
                return [Math.max(arr[0], arr[1]), Math.min(arr[0], arr[1])];
        }
}


function findAddress(obj) {
        var output = "";
        if (obj.hasOwnProperty('street')) {
                output += obj.street;
        }
        else {
                output += "__";
        }
        output += ",";
        if (obj.hasOwnProperty('house')) {
                output += obj.house;
        }
        else {
                output += "__";
        }
        output += ",";
        if (obj.hasOwnProperty('society')) {
                output += obj.society;
        }
        else {
                output += "__";
        }
        return output;
}


function canPay(changeArray, totalDue) {
        if (Array.isArray(changeArray) && changeArray.length === 0 || !Array.isArray(changeArray)) {
                return "Something Error or No Money Here!!";
        }
        total = 0;
        for (let i = 0; i < changeArray.length; i++) {
                total += changeArray[i];
        }
        if (total >= totalDue) {
                return true;
        }
        else {
                return false;
        }
}