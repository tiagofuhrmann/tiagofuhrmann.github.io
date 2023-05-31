// ANIMAÇÃO HEADER
document.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  let scrollPos = window.pageYOffset;
  if (scrollPos > 50) {
    header.classList.add("show");
  } else {
    header.classList.remove("show");
  }
});

// ANIMAÇÃO TEXTO HOME
document.addEventListener("DOMContentLoaded", () => {
  const textField = document.getElementById("text-typing");
  const cursor = document.getElementById("cursor");

  const texts = ["Front-End", "Back-End", "Fullstack"];
  const beforeDeleteInterval = 950;
  const beforeTypeAgainInterval = 740;
  const typeInterval = 100;
  const deleteInterval = 80;

  let currentTextIndex = 0;
  let i = 0;

  function type() {
    cursor.classList.add("typing");
    let text = texts[currentTextIndex];
    setTimeout(() => {
      textField.innerText += text.charAt(i);
      i++;
      if (i <= text.length) {
        type();
      } else {
        i = 0;
        if (currentTextIndex < texts.length - 1) {
          currentTextIndex++;
        } else {
          currentTextIndex = 0;
        }
        cursor.classList.remove("typing");
        setTimeout(deleteText, beforeDeleteInterval);
      }
    }, typeInterval);
  }

  function deleteText() {
    cursor.classList.add("typing");
    const deleteTextInterval = setInterval(function clear() {
      textField.textContent = textField.textContent.slice(0, -1);
      if (textField.innerText == "") {
        clearInterval(deleteTextInterval);
        cursor.classList.remove("typing");
        setTimeout(type, beforeTypeAgainInterval);
      }
    }, deleteInterval);
  }

  type();
});

//ANIMAÇÃO DESAPARECER ITENS AO SCROLLAR
document.addEventListener("scroll", () => {
  const textContainer = document.getElementById("textContainer");
  const projects = document.getElementById("projects");
  const projectsTitle = document.getElementById("projectsTitle");
  const profileImg = document.getElementById("profileImg");

  let scrollPos = window.pageYOffset;
  if (scrollPos > 50) {
    textContainer.classList.add("hide");
    textContainer.classList.remove("show");
    //projectsTitle.classList.add("hide");
    //projectsTitle.classList.remove("show");
  } else {
    textContainer.classList.remove("hide");
    textContainer.classList.add("show");
    //projectsTitle.classList.remove("hide");
    // projectsTitle.classList.add("show");
  }

  /*if (scrollPos > 200) {
    projects.classList.add("hide");
    projects.classList.remove("show");
  } else {
    projects.classList.add("show");
    projects.classList.remove("hide");
  }
  

  if (scrollPos > 600) {
    profileImg.classList.add("show");
    profileImg.classList.remove("hide");
  } else {
    profileImg.classList.add("hide");
    profileImg.classList.remove("show");
  }
  */
});
