window.onscroll = function () {
  if (
    document.body.scrollTop > 50 ||
    document.documentElement.scrollTop > 350
  ) {
    document.querySelector("#mainNav").classList.add("nav-white");
  } else {
    document.querySelector("#mainNav").classList.remove("nav-white");
  }
};
