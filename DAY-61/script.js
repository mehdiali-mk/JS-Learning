const followersEl = document.querySelectorAll(".followers");

followersEl.forEach((followerCounter) => {
  followerCounter.innerHTML = "0";

  const updateFolllowersCounter = () => {
    const target = +followerCounter.getAttribute("data-target");
    const c = +followerCounter.innerText;
    const increment = target / 500;

    if (c < target) {
      followerCounter.innerHTML = `${Math.ceil(c + increment)}`;
      setTimeout(updateFolllowersCounter, 0.5);
    } else {
      followerCounter.innerText = target;
    }
  };

  updateFolllowersCounter();
});
