const messages = [
    "Edith",
    "Francisco",
    "Mercedes",
    "Isania",
    "Yorveris",
    "Luis",
    "Zaki",
    "Luis Beltran",
    "Ingrid",
    "Maria"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = {randomMsg};