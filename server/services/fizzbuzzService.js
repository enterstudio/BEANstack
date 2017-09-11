"use strict";

const fizz = (word, max, resTransfer) => {
        for (let i = 1; i <= max; i++) {
            if (i % 3 == 0) resTransfer.numbers.push(i);
        }
    }, buzz = (word, max, resTransfer) => {
        for (let i = 1; i <= max; i++) {
            if (i % 5 == 0) resTransfer.numbers.push(i);
        }
    }, fizzbuzz = (word, max, resTransfer) => {
        for (let i = 1; i <= max; i++) {
            if (i % 3 == 0 && i % 5 == 0) resTransfer.numbers.push(i);
        }
    }, messages = ["Fizzbuzz says Om Nom Nom",
        "Fizzbuzz is pleased",
        "Meow!",
        "Thanks for feeding the fizzbuzz!"],
    message = () => {
        return messages[Math.floor(Math.random() * messages.length)];
    }, throwException = (resTransfer) => {
        resTransfer.message = "Error Encountered: fizzbuzz says :( - use a number doofus!";
        resTransfer.status = 200;
        resTransfer.numbers = [];
        return resTransfer;
    };

module.exports = {
    fizzbuzz(req, res) {
        let max = req.query.max_value,
            word = req.query.word,
            resTransfer = {
                status: 200,
                numbers: [],
                message: "Please play nice with the fizzbuzz - you must supply a 1+ char word and 1+ value!"
            };
        if (max != null && word != null && !isNaN(max) && word != '' && word.length > 0 && max > 0) {
            if (word == "fizz" || word == "buzz" || word == "fizzbuzz") {
                try {
                    switch (word) {
                        case "fizz":
                            fizz(word, max, resTransfer);
                            break;
                        case "buzz":
                            buzz(word, max, resTransfer);
                            break;
                        case "fizzbuzz":
                            fizzbuzz(word, max, resTransfer);
                            break;
                        default:
                            break;
                    }
                    resTransfer.message = message();
                    resTransfer.status = 200;
                } catch (err) {
                    return res.status(resTransfer.status).json(throwException(resTransfer));
                }
            }
        } else {
            return res.status(resTransfer.status).json(throwException(resTransfer));
        }
        return res.status(resTransfer.status).json(resTransfer);
    }
};