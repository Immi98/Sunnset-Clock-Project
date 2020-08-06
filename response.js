function clock(){
    var day = new Date();
    var sec = day.getSeconds();
    document.querySelector('.sec').style.transform = 'rotate('+sec*6+'deg)';
    var min = day.getMinutes();
    document.querySelector('.min').style.transform = 'rotate('+min*6+'deg)';
     var hr = day.getHours();
    document.querySelector('.hr').style.transform = 'rotate('+hr*30+'deg)';
  }
  setInterval(clock, 1000);