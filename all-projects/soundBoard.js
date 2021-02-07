const sounds = ["applouse", "carrace", "caralarm", "dog", "door"];
const stopButton = document.querySelector(".stop-button");

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  btn.innerText = sound;

  document.getElementById("buttons").appendChild(btn);
  btn.addEventListener("click", function () {
    stopSound();
    document.getElementById(sound).play();
  });
});

function stopSound() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
}

stopButton.addEventListener("click", () => {
  stopSound();
});

// first sum practice
const nums = [4, 15, 7, 8, 9];
const target = 22;

for (let i = 0; i <= nums.length - 1; i++) {
  for (let j = i + 1; j <= nums.length - 1; j++) {
    // console.log(nums[i], nums[j]);
    if (nums[i] + nums[j] == target) {
      console.log([i], [j]);
    }
  }
}
