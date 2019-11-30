'use strict';

$(document).ready(init);

function init() {
    getTreeFromLocalStorage();
}

function onStartGuessing() {
    $('.game-start').hide();
    renderQuest();
    $(".quest").show();

    // TODO: show the quest section
}

function renderQuest() {
    $(".quest-title").text((gCurrQuest.txt));
    $(".h1").text('Who is?');


    // var elH2 = document.querySelector('.quest-title');
    // elH2.innerText = gCurrQuest.txt
}

function onUserResponse(res) {
    // If this node has no children
    if (isChildless(gCurrQuest)) {
        if (res === 'yes') {
            $(".h1").text('Yes, I knew it!');
            $(".game-start").show();
            $(".quest").hide();
            resetNewGlobals();
        } else {
            $(".h1").text('I dont know...teach me!');
            $('#newGuess').val('');
            $('#newQuest').val('');
            $(".new-quest").show();
            $(".quest").hide();

        }
    } else {
        setLastRes(res)
        moveToNextQuest();
        renderQuest();
    }
}

function onAddGuess() {
    var txt = $('#newGuess').val();
    var yes = $('#newQuest').val();
    addGuess(txt, yes);

    $('.new-quest').hide();
    $('.game-start').show();
    gCurrQuest = gQuestsTree;
    saveTreeToLocalStorage(gQuestsTree)

}


function onRestartGame() {
    $('.new-quest').hide();
    $('.game-start').show();
    resetGlobals();

    //TODO: reset the lastRes to null

}