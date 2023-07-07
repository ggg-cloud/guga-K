'use strict';

let secret_number = Math.trunc(Math.random() * 20) + 1
let score = 20
let highscore = 0

console.log(secret_number)

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value)

    // when there is not input
    if (!guess) {
        document.querySelector(".message").textContent = '⛔ No number!'
    } else if (guess === secret_number) {
        // when player wins
        document.querySelector('.message').textContent = '🎉 Correct number!'

        document.querySelector('.number').textContent = secret_number

        if (score > highscore) {
            highscore = score
            document.querySelector('.highscore').textContent = highscore
        }

        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem'

        document.querySelector('h1').style.color = 'white'
        document.querySelector('p').style.color = 'white'
        document.querySelector('.btn.check').style.color = '#60b347'
        document.querySelector('.btn.check').style.backgroundColor = 'white'
        document.querySelector('.btn').style.color = '#60b347'
        document.querySelector('.btn').style.backgroundColor = 'white'
        document.querySelector('.number').style.color = '#60b347'
        document.querySelector('.number').style.backgroundColor = 'white'
        document.querySelector('.message').style.color = 'white'
        document.querySelector('.label-score').style.color = 'white'
        document.querySelector('.label-highscore').style.color = 'white'
        document.querySelector('.guess').style.color = 'white'
        document.querySelector('header').style.borderBottom = '7px solid white'
        document.querySelector('.guess').style.border = '4px solid white'


        // when guess is too high
    } else if (guess > secret_number) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📈 Too high!'
            score--
            document.querySelector('.score').textContent = score
        } else {
            document.querySelector('.message').textContent = '💥 You lost the game'
            document.querySelector('.score').textContent = 0
        }
        // when guess is too low
    } else if (guess < secret_number) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📉 Too low!'
            score--
            document.querySelector('.score').textContent = score
        } else {
            document.querySelector('.message').textContent = '💥 You lost the game'
            document.querySelector('.score').textContent = 0
        }
    }
})


document.querySelector('.again').addEventListener('click', function () {
    score = 20
    secret_number = Math.trunc(Math.random() * 20) + 1

    document.querySelector('.number').textContent = '?'
    document.querySelector('.message').textContent = 'Start guessing...'
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('.guess').value = ''
    document.querySelector('.score').textContent = `${score}`

    document.querySelector('h1').style.color = '#CD8309'
    document.querySelector('p').style.color = '#CD8309'
    document.querySelector('.btn.check').style.color = '#222'
    document.querySelector('.btn.check').style.backgroundColor = '#CD8309'
    document.querySelector('.btn').style.color = '#222'
    document.querySelector('.btn').style.backgroundColor = '#CD8309'
    document.querySelector('.number').style.color = '#222'
    document.querySelector('.number').style.backgroundColor = '#CD8309'
    document.querySelector('.message').style.color = '#CD8309'
    document.querySelector('.label-score').style.color = '#CD8309'
    document.querySelector('.label-highscore').style.color = '#CD8309'
    document.querySelector('.guess').style.color = '#CD8309'
    document.querySelector('header').style.borderBottom = '7px solid #CD8309'
    document.querySelector('.guess').style.border = '4px solid #CD8309'
})