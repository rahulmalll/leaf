let leaves = 9999999;

function pluckLeaf() {
  const leafCount = document.getElementById("leafCount");
  const message = document.getElementById("message");

  if (leaves > 0) {
    leaves--;
    leafCount.innerText = `Leaves left: ${leaves.toLocaleString()}`;
    message.innerText = "You plucked a leaf!";
  } else {
    message.innerText = "All leaves are plucked. The tree is bare.";
  }
}