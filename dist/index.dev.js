"use strict";

//-------------電腦版loading動畫
document.addEventListener("DOMContentLoaded", function () {
  var loadingAnimation = document.getElementById("loadingAnimation");
  var mainContent = document.getElementById("mainContent");
  loadingAnimation.classList.add("show"); // 加上顯示動畫的 CSS class
  // 延遲兩秒後隱藏動畫

  setTimeout(function () {
    loadingAnimation.classList.remove("show"); // 移除顯示動畫的 CSS class

    mainContent.style.display = "block"; // 顯示主要內容
  }, 2000);
});