function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function deepestChild() {
  let grandNode = document.querySelectorAll("#grand-node div");

  return grandNode[grandNode.length - 1];
}

function increaseRankBy(n) {
  let rankedList = document.querySelectorAll(".ranked-list");

  for (let i = 0; i < rankedList.length; i++) {
    rankedList[i].innerHTML = parseInt(i) + n;
  }
}
