var lastScrollTop = 0;
const navbar = document.getElementById('nav');
window.addEventListener("scroll" , () => {
  var scrollTop = window.scrollY || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-80px";
    navbar.classList.toggle("ativo");
  }else{
    navbar.style.top = "0px";
  }
  lastScrollTop = scrollTop;
})