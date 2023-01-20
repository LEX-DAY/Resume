  let counter = 1;
  setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 5){
  counter = 1;
  }
  }, 1500);


  let pageTitle = document.title;

  window.addEventListener("blur", () => {
      document.title = "Come back here...";
  });

  window.addEventListener("focus", () => {
      document.title = pageTitle;
  });
