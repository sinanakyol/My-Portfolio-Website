// Butonu gizle
document.getElementById("scroll-btn").style.display = "none";

// Sayfanın en altına göster
window.onscroll = function () {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    document.getElementById("scroll-btn").style.display = "block";
  } else {
    document.getElementById("scroll-btn").style.display = "none";
  }
};
