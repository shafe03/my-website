"use strict";
// selecting learning history elements
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

// Selecting challenge section elements
const challenge1 = document.querySelector("#challenge1");
const challenge2 = document.querySelector("#challenge2");
const challenge3 = document.querySelector("#challenge3");
const challenge4 = document.querySelector("#challenge4");
const challenge5 = document.querySelector("#challenge5");
const challenge6 = document.querySelector("#challenge6");
const challenge7 = document.querySelector("#challenge7");
const challenge8 = document.querySelector("#challenge8");
const challenge9 = document.querySelector("#challenge9");
const challenge10 = document.querySelector("#challenge10");
const challenge11 = document.querySelector("#challenge11");
const challenge12 = document.querySelector("#challenge12");
const challenge13 = document.querySelector("#challenge13");
const challenge14 = document.querySelector("#challenge14");
const challenge15 = document.querySelector("#challenge15");
const challenge1_Content = document.querySelector("#challenge1-content");
const challenge2_Content = document.querySelector("#challenge2-content");
const challenge3_Content = document.querySelector("#challenge3-content");
const challenge4_Content = document.querySelector("#challenge4-content");
const challenge5_Content = document.querySelector("#challenge5-content");
const challenge6_Content = document.querySelector("#challenge6-content");
const challenge7_Content = document.querySelector("#challenge7-content");
const challenge8_Content = document.querySelector("#challenge8-content");
const challenge9_Content = document.querySelector("#challenge9-content");
const challenge10_Content = document.querySelector("#challenge10-content");
const challenge11_Content = document.querySelector("#challenge11-content");
const challenge12_Content = document.querySelector("#challenge12-content");
const challenge13_Content = document.querySelector("#challenge13-content");
const challenge14_Content = document.querySelector("#challenge14-content");
const challenge15_Content = document.querySelector("#challenge15-content");

// winbox for timeline section
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

// winbox for challenges section
challenge1.addEventListener("click", function () {
  const wbChallenge1 = new WinBox({
    title: "Challenge1",
    top: 50,
    left: 50,
    right: 50,
    bottom: "40%",
    mount: challenge1_Content,
    onfocus: function () {
      this.setBackground("#34d058");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});
challenge2.addEventListener("click", function () {
  const wbChallenge2 = new WinBox({
    title: "Challenge2",
    top: 50,
    left: 50,
    right: 50,
    bottom: "40%",
    mount: challenge2_Content,
    onfocus: function () {
      this.setBackground("#34d058");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});
challenge3.addEventListener("click", function () {
  const wbChallenge3 = new WinBox({
    title: "Challenge3",
    top: 50,
    left: 50,
    right: 50,
    bottom: "40%",
    mount: challenge3_Content,
    onfocus: function () {
      this.setBackground("#34d058");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});
challenge4.addEventListener("click", function () {
  const wbChallenge4 = new WinBox({
    title: "Challenge4",
    top: 50,
    left: 50,
    right: 50,
    bottom: "40%",
    mount: challenge4_Content,
    onfocus: function () {
      this.setBackground("#34d058");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});
challenge5.addEventListener("click", function () {
  const wbChallenge5 = new WinBox({
    title: "Challenge5",
    top: 50,
    left: 50,
    right: 50,
    bottom: "40%",
    mount: challenge5_Content,
    onfocus: function () {
      this.setBackground("#34d058");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});
challenge6.addEventListener("click", function () {
  const wbChallenge6 = new WinBox({
    title: "Challenge6",
    top: 50,
    left: 50,
    right: 50,
    bottom: "40%",
    mount: challenge6_Content,
    onfocus: function () {
      this.setBackground("#34d058");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});
challenge7.addEventListener("click", function () {
  const wbChallenge7 = new WinBox({
    title: "Challenge7",
    top: 50,
    left: 50,
    right: 50,
    bottom: "40%",
    mount: challenge7_Content,
    onfocus: function () {
      this.setBackground("#34d058");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});
challenge8.addEventListener("click", function () {
  const wbChallenge8 = new WinBox({
    title: "Challenge8",
    top: 50,
    left: 50,
    right: 50,
    bottom: "40%",
    mount: challenge8_Content,
    onfocus: function () {
      this.setBackground("#34d058");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});
challenge9.addEventListener("click", function () {
  const wbChallenge9 = new WinBox({
    title: "Challenge9",
    top: 50,
    left: 50,
    right: 50,
    bottom: "40%",
    mount: challenge9_Content,
    onfocus: function () {
      this.setBackground("#34d058");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});
challenge10.addEventListener("click", function () {
  const wbChallenge10 = new WinBox({
    title: "Challenge10",
    top: 50,
    left: 50,
    right: 50,
    bottom: "40%",
    mount: challenge10_Content,
    onfocus: function () {
      this.setBackground("#34d058");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});
challenge11.addEventListener("click", function () {
  const wbChallenge11 = new WinBox({
    title: "Challenge11",
    top: 50,
    left: 50,
    right: 50,
    bottom: "40%",
    mount: challenge11_Content,
    onfocus: function () {
      this.setBackground("#34d058");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});
challenge12.addEventListener("click", function () {
  const wbChallenge12 = new WinBox({
    title: "Challenge12",
    top: 50,
    left: 50,
    right: 50,
    bottom: "40%",
    mount: challenge12_Content,
    onfocus: function () {
      this.setBackground("#34d058");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});
challenge13.addEventListener("click", function () {
  const wbChallenge13 = new WinBox({
    title: "Challenge13",
    top: 50,
    left: 50,
    right: 50,
    bottom: "40%",
    mount: challenge13_Content,
    onfocus: function () {
      this.setBackground("#34d058");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});
challenge14.addEventListener("click", function () {
  const wbChallenge14 = new WinBox({
    title: "Challenge14",
    top: 50,
    left: 50,
    right: 50,
    bottom: "40%",
    mount: challenge14_Content,
    onfocus: function () {
      this.setBackground("#34d058");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});
challenge15.addEventListener("click", function () {
  const wbChallenge15 = new WinBox({
    title: "Challenge15",
    top: 50,
    left: 50,
    right: 50,
    bottom: "40%",
    mount: challenge15_Content,
    onfocus: function () {
      this.setBackground("#34d058");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});
