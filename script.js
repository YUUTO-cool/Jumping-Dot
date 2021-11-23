document.addEventListener("DOMContentLoaded", () => {
  if(touchScreen()) {
    alert("Touch screen not allowed");
    return;
  }

  const dot = document.getElementById("dot");
  const wrapper = document.getElementById("wrapper");

  wrapper.addEventListener("mouseenter", () => {
    document.getElementById("arrow").style.opacity = "0";
    setTimeout(() => {
      document.getElementById("arrow").style.display = "none";
    }, 500);

    let color1 = Math.floor(Math.random() * 206) + 50;
    let color2 = Math.floor(Math.random() * 206) + 50;
    let color3 = Math.floor(Math.random() * 206) + 50;
    let top = Math.floor(Math.random() * 101);
    let left = Math.floor(Math.random() * 101);

    // Prevents dot from going too close to the edge or getting hidden
    if(top < 5) top += 5;
    else if(top > 95) top -= 5;
    if(left < 5) left += 5;
    else if(left > 95) left -= 5;

    dot.style.cssText = `
    top: ${top}%;
    left: ${left}%;
    background-color: rgb(${color1}, ${color2}, ${color3});
    box-shadow: 0px 0px 7px 5px rgba(${color1}, ${color2}, ${color3}, 0.75);
    `;
    wrapper.style.cssText = `
    top: calc(${top}% + 5px);
    left: calc(${left}% + 5px);
    `;
  });
  dot.addEventListener("click", e => {
    if(e.isTrusted) {
      alert("You got me!");
    } else {
      alert("Hey, that's cheating!");
    }
  });
});

document.addEventListener("contextmenu", e => {
  e.preventDefault();
});

function touchScreen() {
  return ( 'ontouchstart' in window ) || ( navigator.maxTouchPoints > 0 ) || ( navigator.msMaxTouchPoints > 0 );
}
