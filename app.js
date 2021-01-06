(() => {

  const modal = document.querySelector("#model");

  const helpTimer = setTimeout(() => { document.querySelector("#help").style.bottom = 0; }, 4000);

  modal.addEventListener("click", () => {
    clearTimeout(helpTimer);
    setTimeout(() => {
      modal.remove();
    }, 600);
    modal.classList.add("inactive");
    document.querySelector("#img-div").classList.remove("active");
    document.querySelector("#tribute-info").classList.remove("active");
    document.body.style.overflowY = "scroll";
  });
})();