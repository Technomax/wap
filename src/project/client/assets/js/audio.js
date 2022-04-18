const playIconContainer = document.getElementById('play-icon');
let playState = 'play';
playIconContainer.addEventListener('click', () => {
    if(playState === 'play') {
        playIconContainer.setAttribute('class','audio-btn fa fa-pause fa-2x');
        playState = 'pause';
    } else {
        playIconContainer.setAttribute('class','audio-btn fa fa-play fa-2x');
        playState = 'play';
    }
});

const shuffleIconContainer = document.getElementById('shuffle-icon');
let shuffleState = 'random';
shuffleIconContainer.addEventListener('click', () => {
    if(shuffleState === 'random') {
        shuffleIconContainer.setAttribute('class','audio-btn fa fa-retweet fa-2x');
        shuffleState = 'retweet';
    }
    else if(shuffleState === 'retweet') {
        shuffleIconContainer.setAttribute('class','audio-btn fa fa-repeat fa-2x');
        shuffleState = 'repeat';
    } else {
        shuffleIconContainer.setAttribute('class','audio-btn fa fa-random fa-2x');
        shuffleState = 'random';
    }
});