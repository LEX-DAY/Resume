const pageTitle = document.title;

window.addEventListener("blur", () => {
      document.title = "Come back here...";
});

window.addEventListener("focus", () => {
      document.title = pageTitle;
});









