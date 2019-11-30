var gQuestsTree;
var gCurrQuest;
var gPrevQuest = null;
var gLastRes = null;


function createQuestsTree() {

    gQuestsTree = createQuest('Male');
    gQuestsTree.yes = createQuest('Gandhi');
    gQuestsTree.no = createQuest('Rita');
    gCurrQuest = gPrevQuest = gQuestsTree;
    saveTreeToLocalStorage(gQuestsTree);
}

function createQuest(txt) {
    return {
        txt: txt + '?',
        yes: null,
        no: null
    }
}

function isChildless(node) {
    return (node.yes === null && node.no === null)
}

function moveToNextQuest() {
    if (gLastRes === 'no') {
        gCurrQuest = gCurrQuest.no;
    } else {
        gCurrQuest = gCurrQuest.yes;
    }
    // gPrevQuest = gCurrQuest;
}

function setLastRes(res) {
    gLastRes = res;
}

function addGuess(newQuestTxt, newGuessTxt) {
    console.log('gPrev', gPrevQuest);
    console.log('gLastRes', gLastRes);
    var newGuess = createQuest(newGuessTxt);
    var newQuest = createQuest(newQuestTxt);
    newGuess.yes = newQuest;
    newGuess.no = gCurrQuest;
    if (gLastRes == "yes") {
        gPrevQuest.yes = newGuess;
    } else {
        gPrevQuest.no = newGuess;

    }

    console.log(gQuestsTree);
}

function resetGlobals() {
    gLastRes = null;
    gCurrQuest = gQuestsTree;
    console.log(gQuestsTree);
}

function resetNewGlobals() {
    // gLastRes = null;
    // gPrevQuest=gCurrQuest;
    gCurrQuest = gQuestsTree;
    console.log(gQuestsTree);
}