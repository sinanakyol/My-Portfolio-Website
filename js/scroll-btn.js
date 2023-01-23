// Butonu gizle
document.getElementById("scroll-btn").style.opacity = "0";

// Sayfanın en altına göster
window.onscroll = function () {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    document.getElementById("scroll-btn").style.opacity = "1";
    document.getElementById("scroll-btn").style.transition = "opacity 1s";
  } else {
    document.getElementById("scroll-btn").style.opacity = "0";
  }
};
