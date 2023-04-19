const express = require('express')
const app = express()
const port = 80

const phrases = [
    "Get ready to be inspired…",
    "See rejection as redirection.",
    "There is beauty in simplicity.",
    "You can’t be late until you show up.",
    "Maybe life is testing you. Don’t give up.",
    "Impossible is just an opinion.",
    "Alone or not you gonna walk forward.",
    "You are not a mistake.",
    "God is not finished with you yet.",
    "Mbappe is the best player in the world.",
    "Alvaro Morata is the best striker in the world.",
    "Godzilla is the best movie of all time.",
    "Goku is the best anime character of all time.",
    "The best anime is Dragon Ball Z.",
    "The best anime is Naruto.",
    "The best anime is One Piece.",
    "The best anime is My Hero Academia.",
    "The best anime is Attack on Titan.",
    "The best anime is Death Note.",
    "Gorillaz is the best band of all time.",
    "The best song is Feel Good Inc.",
    "The best song is Clint Eastwood.",
    "The best song is 19-2000.",
]

app.get('/', (req, res) => {
    const number = Math.floor(Math.random() * 23);
    res.send(phrases[number])
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})