let wordString = '';
let chars = {};
let result = {
    one : 0,
    two : 0,
    three : 0,
    four : 0,
    five : 0,
    six : 0,
    seven : 0,
    eight : 0,
    nine : 0,
    ten : 0
};


const countNumber = () => {
    document.getElementById('result').innerHTML = '';
    result = {
        one : 0,
        two : 0,
        three : 0,
        four : 0,
        five : 0,
        six : 0,
        seven : 0,
        eight : 0,
        nine : 0,
        ten : 0
    }
    chars = {}
    wordString = document.getElementById("str").value;
    for (let char of wordString.split('') ) {
        if (!chars[char]) {
            chars[char] = 1;
        } else {
            chars[char]++;
        }
    };
    if (Object.keys(chars).includes('o','n','e')){
        while (chars.o > 0 && chars.n > 0 && chars.e > 0 ) {
            chars.o = chars.o - 1;
            chars.n = chars.n - 1;
            chars.e = chars.e - 1;
            result.one++;
        }
    }
    if (Object.keys(chars).includes('t','w','o')) {
        while (chars.t > 0 && chars.w > 0 && chars.o > 0) {
            chars.t--;
            chars.w--;
            chars.o--;
            result.two++;
        }
    }
    if (Object.keys(chars).join('').includes('t','h','r','e','e')) {
        while (chars.t > 0 && chars.h > 0 && chars.r > 0 && chars.e > 1) {
            chars.t--;
            chars.h--;
            chars.r--;
            chars.e = chars.e - 2;
            result.three++;
        }
    }
    if (Object.keys(chars).join('').includes('f','o','u','r')) {
        while (chars.f > 0 && chars.o > 0 && chars.u > 0 && chars.r > 0) {
            chars.f--;
            chars.o--;
            chars.u--;
            chars.r--;
            result.four++;
        }
    }
    if (Object.keys(chars).join('').includes('f','i','v','e')) {
        while (chars.f > 0 && chars.i > 0 && chars.v > 0 && chars.e > 0) {
            chars.f--;
            chars.i--;
            chars.v--;
            chars.e--;
            result.five++;
        }
    }
    if (Object.keys(chars).join('').includes('s','i','x')) {
        while (chars.s > 0 && chars.i > 0 && chars.x) {
            chars.s--;
            chars.i--;
            chars.x--;
            result.six++;
        }
    }
    if (Object.keys(chars).join('').includes('s','e','v','e','n')) {
        while (chars.s > 0 && chars.e > 1 && chars.v > 0 && chars.n > 0) {
            chars.s--;
            chars.e = chars.e - 2;
            chars.v--;
            chars.n--;
            result.seven++;
        }
    }
    if (Object.keys(chars).join('').includes('e','i','g','h','t')) {
        while (chars.e > 0 && chars.i > 0 && chars.g && chars.h > 0 && chars.t > 0) {
            chars.e--;
            chars.i--;
            chars.g--;
            chars.h--;
            chars.t--;
            result.eight++;
        }
    }
    if (Object.keys(chars).join('').includes('n','i','n','e')) {
        while (chars.n > 1 && chars.i > 0 && chars.e > 0) {
            chars.n = chars.n - 2;
            chars.i--;
            chars.n--;
            result.nine++;
        }
    }
    if (Object.keys(chars).join('').includes('t','e','n')) {
        while (chars.t > 0 && chars.e > 0 && chars.n > 0) {
            chars.t--;
            chars.e--;
            chars.n--;
            result.ten++;
        }
    }
    outputResultToTheDom();
}

const outputResultToTheDom = () => {
    document.getElementById("result").innerHTML = 
    "<div>" +
        "<h2>" + 'one : '  + result.one + "</h2>" +
        "<h2>" + 'two : '  + result.two + "</h2>" +
        "<h2>" + 'three : '  + result.three + "</h2>" +
        "<h2>" + 'four : '  + result.four + "</h2>" +
        "<h2>" + 'five : '  + result.five + "</h2>" +
        "<h2>" + 'six : '  + result.six + "</h2>" +
        "<h2>" + 'seven : '  + result.seven + "</h2>" +
        "<h2>" + 'eight : '  + result.eight + "</h2>" +
        "<h2>" + 'nine : '  + result.nine + "</h2>" +
        "<h2>" + 'ten : '  + result.ten + "</h2>" +
    + "</div>";
}