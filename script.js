const getCards = () => {
    return candidates.map(candidate => {
        return `<div class="card">
            <img class="card-image" src="images/${candidate.id}.jpg">
            <div class="card-info">
                <div class="candidate-votes">
                    <span class="votes-number-${candidate.id}">${candidate.votes}</span>
                    <span class="votes-text">VOTES</span>
                </div>
                <div class="line"></div>
                <div class="candidate-info">
                    <span class="candidate-name">${candidate.name}</span>
                    <span class="candidate-party">${candidate.party}</span>
                </div>
            </div>
            <button class="card-btn btn-${candidate.id}">VOTE</button>
        </div>`
    })
}

const addVote = (index, candidate, votesEl) => {
    if (!winner) {
        candidates[index].votes++;
        votesEl.textContent = candidates[index].votes;
        isWinner(candidate, candidates[index].votes);
    }
}

const isWinner = (candidate, votes) => {
    if (votes === 100) {
        winner = true;

        setWinnerLoser(candidate);
    }
}

const setWinnerLoser = (candidate) => {
    if (candidate === "modi") {
        document.querySelector('.btn-modi').textContent = "WINNER OF SHADES!";
        document.querySelector('.btn-rahul').textContent = "BETTER LUCK NEXT TIME!";
    } else {
        document.querySelector('.btn-rahul').textContent = "WINNER OF SHADES!";
        document.querySelector('.btn-modi').textContent = "BETTER LUCK NEXT TIME!";
    }
}
const candidates = [
    {
        id: "modi",
        name: "Vijay Joseph",
        party: "Bharatiya Janata Party",
        votes: 90,
    },
    {
        id: "rahul",
        name: "Avinash Vijayakumar",
        party: "Indian National Congress",
        votes: 90,
    }
]
let winner = false;
const cards = document.querySelector('.cards');
cards.innerHTML = getCards();
const cardButtons = document.querySelectorAll('.card-btn');
const modiVotesEl = document.querySelector('.votes-number-modi');
const rahulVotesEl = document.querySelector('.votes-number-rahul');
cardButtons.forEach(cardButton => {
    cardButton.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-modi')) {
            addVote(0, 'modi', modiVotesEl)
        } else {
            addVote(1, 'rahul', rahulVotesEl)
        }
    })
})