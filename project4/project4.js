const todoBtn = document.getElementById('todoBtn');
const timerBtn = document.getElementById('timerBtn');
const gameBtn = document.getElementById('gameBtn');
const todoSection = document.getElementById('todoSection');
const timerSection = document.getElementById('timerSection');
const gameSection = document.getElementById('gameSection');
const todoInput = document.getElementById('todoInput');
const addTodoBtn = document.getElementById('addTodoBtn');
const todoList = document.getElementById('todoList');
const startTimerBtn = document.getElementById('startTimerBtn');
const stopTimerBtn = document.getElementById('stopTimerBtn');
const timerDisplay = document.getElementById('timer');
const startGameBtn = document.getElementById('startGameBtn');
const gameArea = document.getElementById('gameArea');

function showSection(section) {
    todoSection.classList.add('hidden');
    timerSection.classList.add('hidden');
    gameSection.classList.add('hidden');
    section.classList.remove('hidden');
}

addTodoBtn.addEventListener('click', () => {
    const todoText = todoInput.value.trim();
    if (todoText) {
        const li = document.createElement('li');
        li.textContent = todoText;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'წაშლა';
        deleteBtn.addEventListener('click', () => li.remove());
        li.appendChild(deleteBtn);

        li.addEventListener('click', () => li.classList.toggle('completed'));
        todoList.appendChild(li);
    }
    todoInput.value = '';
});

let timerInterval;
let timerSeconds = 0;

startTimerBtn.addEventListener('click', () => {
    timerInterval = setInterval(() => {
        timerSeconds++;
        let minutes = Math.floor(timerSeconds / 60);
        let seconds = timerSeconds % 60;
        timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }, 1000);
    startTimerBtn.classList.add('hidden');
    stopTimerBtn.classList.remove('hidden');
});

stopTimerBtn.addEventListener('click', () => {
    clearInterval(timerInterval);
    startTimerBtn.classList.remove('hidden');
    stopTimerBtn.classList.add('hidden');
});

startGameBtn.addEventListener('click', () => {
    startGameBtn.classList.add('hidden');
    gameArea.classList.remove('hidden');

    for (let i = 0; i < 10; i++) {
        const cell = document.createElement('div');
        cell.classList.add('game-cell');
        cell.textContent = i + 1;

        cell.addEventListener('click', () => {
            cell.classList.add('clicked');
            cell.textContent = '✔';
        });

        gameArea.appendChild(cell);
    }
});

todoBtn.addEventListener('click', () => showSection(todoSection));
timerBtn.addEventListener('click', () => showSection(timerSection));
gameBtn.addEventListener('click', () => showSection(gameSection));