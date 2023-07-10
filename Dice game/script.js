'use strict'

const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const score0El = document.querySelector('#score--0')
const score1El = document.querySelector('#score--1')
const current0El = document.querySelector('#current--0')
const current1El = document.querySelector('#current--1')
const diceEl = document.querySelector('.dice')
const btn_new = document.querySelector('.btn--new')
const btn_roll = document.querySelector('.btn--roll')
const btn_hold = document.querySelector('.btn--hold')
const main = document.querySelector('.window')
const overlay = document.querySelector('.overlay')
const btn_close_window = document.querySelector('.close-window')
const btn_open_window = document.querySelector('.btn--help')




// starting settings


let scores, current_score, active_player, playing

const restart = function () {
    scores = [0, 0]
    current_score = 0
    active_player = 0
    playing = true

    score0El.textContent = 0
    score1El.textContent = 0
    diceEl.classList.add('hidden')

    player0El.classList.remove('player--winner')
    player1El.classList.remove('player--winner')
    player0El.classList.add('player--active')
    player1El.classList.remove('player--active')

    btn_open_window.classList.remove('hidden')

}

restart()

const swich_player = function () {
    if (playing) {

        document.getElementById(`current--${active_player}`).textContent = 0
        current_score = 0
        active_player = active_player === 0 ? 1 : 0
        player0El.classList.toggle('player--active')
        player1El.classList.toggle('player--active')
        btn_open_window.classList.add('hidden')
    }
}

const close_window = function () {
    main.classList.add('hidden')
    overlay.classList.add('hidden')
}

const open_window = function () {
    main.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

btn_close_window.addEventListener('click', close_window)
overlay.addEventListener('click', close_window)
// rolling dice
btn_roll.addEventListener('click', function () {
    if (playing) {

        const dice = Math.trunc(Math.random() * 6) + 1

        diceEl.classList.remove('hidden')
        diceEl.src = `./images/dice-${dice}.png`

        if (dice !== 1) {
            current_score += dice
            document.getElementById(`current--${active_player}`).textContent = current_score
        } else {
            swich_player()
        }
        btn_open_window.classList.add('hidden')
    }
})



btn_hold.addEventListener('click', function () {
    if (playing) {

        scores[active_player] += current_score
        document.getElementById(`score--${active_player}`).textContent =
            scores[active_player]

        if (scores[active_player] >= 50) {
            playing = false
            diceEl.classList.add('hidden')

            document.querySelector(`.player--${active_player}`).classList.add('player--winner')
            document.querySelector(`.player--${active_player}`).classList.remove('player--active')
        } else {
            swich_player()
        }
        btn_open_window.classList.add('hidden')

    }
})

btn_new.addEventListener('click', restart)

btn_open_window.addEventListener('click', open_window)




