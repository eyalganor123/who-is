var gLocalStorageState = false;

function saveTreeToLocalStorage(tree) {
    console.log(tree);
    var gQTree = JSON.stringify(tree);
    localStorage.setItem("gQTree", gQTree)
}

function getTreeFromLocalStorage() {
    var localTree = localStorage.getItem("gQTree");
    if (localTree === null) {
        console.log('no tree');
        createQuestsTree();

        return
    } else {
        console.log('i have a tree');
        console.log(localTree);
        gQuestsTree = JSON.parse(localTree);
        console.log(gQuestsTree);
        gCurrQuest = gPrevQuest = gQuestsTree;
        gLocalStorageState = true;
        return
    }
}