let isToggled = false;
function toggle() {
  const hr1 = document.getElementById("hr-1");
  const hr2 = document.getElementById("hr-2");
  const hr3 = document.getElementById("hr-3");
  const leftMenu = document.getElementById("left-menu");
  if (!isToggled) {
    hr2.style.opacity = 0;
    hr3.style = `transform-origin: center left;
    transform: rotate(-33deg);`;
    hr1.style = `transform-origin: center left;
    transform: rotate(33deg);`;
    leftMenu.style.transform = `translateX(0)`;
    isToggled = true;
  } else {
    hr2.style.opacity = 1;
    hr3.style.transform = " rotate(0deg)";
    hr1.style.transform = " rotate(0deg)";
    // hr3.style.transformOrigin = "";
    // hr1.style.transformOrigin = "";
    isToggled = false;
    leftMenu.style.transform = `translateX(-110%)`;
  }
}
