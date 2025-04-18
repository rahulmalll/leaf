  let leaves = 99;

function pluckLeaf() {
  const leafCount = document.getElementById("leafCount");
  const message = document.getElementById("message");
  const leafContainer = document.getElementById("leafContainer");

  if (leaves > 0) {
    leaves--;
    leafCount.innerText = `Leaves left: ${leaves}`;
    message.innerText = "You plucked a leaf!";

    // Create a falling leaf
    const leaf = document.createElement("img");
    leaf.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Dollar_note.svg/1024px-Dollar_note.svg.png";
    leaf.style.left = Math.random() * 250 + "px"; // Random horizontal position
    leafContainer.appendChild(leaf);

    // Remove leaf after animation ends
    setTimeout(() => {
      leaf.remove();
    }, 2000);
  } else {
    message.innerText = "No more leaves to pluck!";
  }
}
