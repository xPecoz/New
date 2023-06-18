let btnScrol = document.querySelector(".up");

btnScrol.onclick = function () {
  window.scrollTo({
    top: 0,
  });
};
window.addEventListener("scroll", () => {
  this.scrollY >= 600
    ? btnScrol.classList.add("show")
    : btnScrol.classList.remove("show");
});
// Show And Hidden Header
let buttonShow = document.querySelector("i.show-head");
let header = document.querySelector(".header");

buttonShow.addEventListener("click", () => {
  header.classList.toggle("show");

  if (header.classList.contains("show")) {
    buttonShow.classList = "fa-solid fa-x show-head";
  } else {
    buttonShow.classList = "uil uil-apps show-head";
  }
});

// Active Page
let mainLinks = document.querySelectorAll(".main-links a");
let sections = document.querySelectorAll(".main-title, section.home");

window.addEventListener("scroll", function () {
  sections.forEach(function (s) {
    if (window.scrollY >= s.offsetTop - 200) {
      mainLinks.forEach((e) => {
        e.classList.remove("active");
        `#${s.id}` == e.getAttribute("href") ? e.classList.add("active") : "";
      });
    }
  });
});

// Send Email
// let form = document.querySelector("form");
// let submit = document.querySelector(`button.send`);

// form.onsubmit = (e) => {
//   e.preventDefault();
//   function SendMail() {
//     let params = {
//       from_name: document.getElementById("fullName").value,
//       email: document.getElementById("email_id").value,
//       phone: document.getElementById("phone_id").value,
//       message: document.getElementById("message").value,
//     };

//     emailjs
//       .send("service_q2r7uiy", "template_jc4gcii", params)
//       .then((mas) => alert("Your Msg Has Been Sent😊"));
//   }
//   submit.onclick = SendMail();
// };

// Show Video
let btnOpen = document.querySelectorAll(".showVideo");
let video = document.getElementById("video");
let videoContainer = document.querySelector(".openVideo");
let closeVideo = document.getElementById("closeVideo");
let main = document.querySelector("main");

btnOpen.forEach((ele) => {
  ele.addEventListener("click", function () {
    video.setAttribute("src", ele.dataset.src);

    videoContainer.classList.add("translate-middle");
    main.classList.add("blur");
  });
});

closeVideo.addEventListener("click", function () {
  videoContainer.classList.remove("translate-middle");
  main.classList.remove("blur");
});
