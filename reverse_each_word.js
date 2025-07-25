let sentence = "hello world javascript";
let result = "";
let word = "";

for (let i = 0; i <= sentence.length; i++) {
    let char = sentence[i]

    if (char !== " ") {
        word += char;
    } else {
        for (let j = word.length - 1; j >= 0; j--) {
            result += word[j];
        }
        result += " ";
        word = "";
    }
}

console.log("Output:", result.trim());