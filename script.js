 let leaves = 99;

function pluckLeaf() {
  const leafCount = document.getElementById("leafCount");
  const message = document.getElementById("message");
  const leafContainer = document.getElementById("leafContainer");
  const swooshSound = document.getElementById("swooshSound");

  if (leaves > 0) {
    leaves--;
    leafCount.innerText = `Leaves left: ${leaves.toLocaleString()}`;
    message.innerText = "You plucked a leaf!";

    // Create falling leaf
    const leaf = document.createElement("img");
    leaf.src = " data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEVl/wB6QsljAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII=";
    leaf.classList.add("falling-leaf");

    // Random horizontal position
    const randomLeft = Math.floor(Math.random() * 250) + 20;
    leaf.style.left = `${randomLeft}px`;

    // Add leaf and remove after animation
    leafContainer.appendChild(leaf);
    swooshSound.currentTime = 0;
    swooshSound.play();

    setTimeout(() => {
      leaf.remove();
    }, 100);

  } else {
    message.innerText = "All leaves are plucked. The tree is bare.";
  }
}
