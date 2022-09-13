const GROW_CORN_BUTTON_ID_PREFIX = 'grownCorn';
const FORMAT_HELPER_ID_PREFIX = 'formatHelper';

const MIN_GROW_WAIT_TIME_MILLISECONDS = 5000;
const MAX_GROW_WAIT_TIME_MILLISECONDS = 8000;


function growCorn(cornId) {
    console.log('here');
    var cornElement = document.getElementById('corn' + cornId);
    cornElement.appendChild(document.createTextNode(
        "|"
    ));
    cornElement.appendChild(document.createElement('br'));

    hideGrowCornButton(cornId);
    waitToShowGrowCornOption(cornId);
}


function hideGrowCornButton(cornId) {
    let buttonId = GROW_CORN_BUTTON_ID_PREFIX + cornId;
    let formatId = FORMAT_HELPER_ID_PREFIX + cornId;
    document.getElementById(buttonId).style.display = 'none';
    document.getElementById(formatId).style.display = 'block';
}


function showGrownCornButton(cornId) {
    let buttonId = GROW_CORN_BUTTON_ID_PREFIX + cornId;
    let formatId = FORMAT_HELPER_ID_PREFIX + cornId;
    document.getElementById(buttonId).style.display = 'block';
    document.getElementById(formatId).style.display = 'none';
}


function waitToShowGrowCornOption(cornId) {
    let waitTime = getRandomInt(MIN_GROW_WAIT_TIME_MILLISECONDS, MAX_GROW_WAIT_TIME_MILLISECONDS);
    setTimeout(function() {
        showGrownCornButton(cornId);
    }, waitTime);    
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}