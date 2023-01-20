  let counter = 0;

  setInterval(function(){
         
         document.getElementById( 'radio' + counter.toString() ).checked = true;
         counter++;
         if (counter > 4){
         counter = 0;
    }
  }, 2000);


 const pageTitle = document.title;

  window.addEventListener("blur", () => {
      document.title = "Come back here...";
  });

  window.addEventListener("focus", () => {
      document.title = pageTitle;
  });
