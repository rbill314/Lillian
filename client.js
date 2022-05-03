var animateButton = (e) => {
  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');

  e.target.classList.add('animate');
  setTimeout(function () {
    e.target.classList.remove('animate');
  }, 700);
};
  var classnames = document.getElementsByClassName("confetti-button");
  for (var i = 0; i < classnames.length; i++) {
    classnames[i].addEventListener('click', animateButton, false);  
  }