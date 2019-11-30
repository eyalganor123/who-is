var gLocalStorageState = false;

function saveTreeToLocalStorage(tree) {
    var gQTree = JSON.stringify(tree);
    localStorage.setItem("gQTree", gQTree)
}

function getTreeFromLocalStorage() {
    var localTree = localStorage.getItem("gQTree");
    if (localTree === null) {
        createQuestsTree();

        return
    } else {
        gQuestsTree = JSON.parse(localTree);
        gCurrQuest = gPrevQuest = gQuestsTree;
        gLocalStorageState = true;
        return
    }
}