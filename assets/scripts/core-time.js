/**
 * Game cycle == 15m (900,000ms)
 * Game hour == 37.5s (37500ms)
 * Game minute = 625ms
 * Every 3 minutes, wallpaper changes
 * 
 * 
 * 
 */

const gameMinutesUI = document.querySelector('#game-minutes-ui');
let savedMinutes = parseInt(localStorage.getItem('elapsed_game_minutes'));

const gameHoursUI = document.querySelector('#game-hours-ui');
let savedHours = parseInt(localStorage.getItem('elapsed_game_hours'));

const gameDaysUI = document.querySelector('#game-days-ui');
let savedDays = parseInt(localStorage.getItem('elapsed_game_days'));

const gameYearsUI = document.querySelector('#game-years-ui');
let savedYears = parseInt(localStorage.getItem('elapsed_game_years'));

const pausePlayBtn = document.querySelector('#pause-play-btn');

let gameSpeed = 625;
let gameStatus = 'paused';

treesGrowthRatePerDay = 2;

function initDays() {
  // Reset Year Cycle
  if (savedDays > 365) {
    savedDays = 0;
    // Increment Year + 1
    localStorage.setItem('elapsed_game_years', ++savedYears);
  }
}

function initHours() {
  // Reset Day Cycle
  if (savedHours > 23) {
    savedHours = 0;
    // Increment Day + 1
    localStorage.setItem('elapsed_game_days', ++savedDays);
    localStorage.setItem('generated_trees', savedTrees += treesGrowthRatePerDay);
  }
}

function initMinutes() {
  localStorage.setItem('elapsed_game_minutes', ++savedMinutes);
  if (savedMinutes > 59) {
    savedMinutes = 0;
    localStorage.setItem('elapsed_game_hours', ++savedHours);
  }
}

function pauseGame() {
  clearInterval(timerInterval);
  gameStatus = 'paused'
}

addEventListener('keypress', function (e) { if (event.code === 'Space') { togglePausePlay(); } });

function togglePausePlay() {
  if (gameStatus == 'running') {
    pauseGame();
    pausePlayBtn.innerText = 'Resume';
  } else if (gameStatus == 'paused') {
    initGame();
    pausePlayBtn.innerText = 'Pause';
  }
}

function manipulateTime(t) {
  pauseGame();
  gameSpeed = 625 / t;
  initGame();
}

// Game Background
function initGameBackground() {
  if (savedHours == 0 || savedHours == 1 || savedHours == 2 || savedHours == 24) {
    document.body.style.backgroundImage = `url('assets/backgrounds/7.png')`;
  } else if (savedHours == 3 || savedHours == 4 || savedHours == 5) {
    document.body.style.backgroundImage = `url('assets/backgrounds/8.png')`;
  } else if (savedHours == 6 || savedHours == 7 || savedHours == 8) {
    document.body.style.backgroundImage = `url('assets/backgrounds/1.png')`;
  } else if (savedHours == 9 || savedHours == 10 || savedHours == 11) {
    document.body.style.backgroundImage = `url('assets/backgrounds/2.png')`;
  } else if (savedHours == 12 || savedHours == 13 || savedHours == 14) {
    document.body.style.backgroundImage = `url('assets/backgrounds/3.png')`;
  } else if (savedHours == 15 || savedHours == 16 || savedHours == 17) {
    document.body.style.backgroundImage = `url('assets/backgrounds/4.png')`;
  } else if (savedHours == 18 || savedHours == 19 || savedHours == 20) {
    document.body.style.backgroundImage = `url('assets/backgrounds/5.png')`;
  } else if (savedHours == 21 || savedHours == 22 || savedHours == 23) {
    document.body.style.backgroundImage = `url('assets/backgrounds/6.png')`;
  }
}