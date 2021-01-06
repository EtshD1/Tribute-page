(() => {

  const modal = document.querySelector("#model");

  modal.addEventListener("click", () => {
    setTimeout(() => {
      modal.remove();
    }, 600);
    modal.classList.add("inactive");
    document.querySelector("#img-div").classList.remove("active");
    document.querySelector("#tribute-info").classList.remove("active");
    document.body.style.overflowY = "scroll";
  });
})();