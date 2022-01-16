function listShow() {
  document.getElementById("main-list").classList.toggle("show");
  document.getElementById("main").classList.toggle("toggle");
  const dropIcon = document.getElementById("dropIcon");
  if (dropIcon.classList.contains("bi-arrow-down")) {
    dropIcon.classList.remove("bi-arrow-down");
    dropIcon.classList.add("bi-arrow-up");
  } else if (dropIcon.classList.contains("bi-arrow-up")) {
    dropIcon.classList.remove("bi-arrow-up");
    dropIcon.classList.add("bi-arrow-down");
  }
}

function articleListShow() {
  document.getElementById("article-list").classList.toggle("show");
  const dropIcon = document.getElementById("dropIcon-article");
  if (dropIcon.classList.contains("bi-arrow-down")) {
    dropIcon.classList.remove("bi-arrow-down");
    dropIcon.classList.add("bi-arrow-up");
  } else if (dropIcon.classList.contains("bi-arrow-up")) {
    dropIcon.classList.remove("bi-arrow-up");
    dropIcon.classList.add("bi-arrow-down");
  }
}
