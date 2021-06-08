"use strict";
const month1 = document.querySelector("#month1");
const month2 = document.querySelector("#month2");
const month3 = document.querySelector("#month3");
const month4 = document.querySelector("#month4");
const month5 = document.querySelector("#month5");
const month6 = document.querySelector("#month6");
const month1__content = document.querySelector("#month1-content");
const month2__content = document.querySelector("#month2-content");
const month3__content = document.querySelector("#month3-content");
const month4__content = document.querySelector("#month4-content");
const month5__content = document.querySelector("#month5-content");
const month6__content = document.querySelector("#month6-content");

document.querySelectorAll(".btn-project-details").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("change");
    btn.nextElementSibling.classList.toggle("change");
  });
});

month1.addEventListener("click", function () {
  const wbMonth1 = new WinBox({
    title: "January-2021",
    top: 50,
    left: 50,
    right: 50,
    bottom: "40%",
    mount: month1__content,
    onfocus: function () {
      this.setBackground("#34d058");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});
month2.addEventListener("click", function () {
  const wbMonth2 = new WinBox({
    title: "January-2021",
    top: 50,
    left: 50,
    right: 50,
    bottom: "40%",
    mount: month2__content,
    onfocus: function () {
      this.setBackground("#34d058");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});
month3.addEventListener("click", function () {
  const wbMonth3 = new WinBox({
    title: "January-2021",
    top: 50,
    left: 50,
    right: 50,
    bottom: "40%",
    mount: month3__content,
    onfocus: function () {
      this.setBackground("#34d058");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});
month4.addEventListener("click", function () {
  const wbMonth4 = new WinBox({
    title: "January-2021",
    top: 50,
    left: 50,
    right: 50,
    bottom: "40%",
    mount: month4__content,
    onfocus: function () {
      this.setBackground("#34d058");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});
month5.addEventListener("click", function () {
  const wbMonth5 = new WinBox({
    title: "January-2021",
    top: 50,
    left: 50,
    right: 50,
    bottom: "40%",
    mount: month5__content,
    onfocus: function () {
      this.setBackground("#34d058");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});
month6.addEventListener("click", function () {
  const wbMonth6 = new WinBox({
    title: "January-2021",
    top: 50,
    left: 50,
    right: 50,
    bottom: "40%",
    mount: month6__content,
    onfocus: function () {
      this.setBackground("#34d058");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});
