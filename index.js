const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const testimonialCards = document.querySelectorAll(".testimonials-card");

const testimonials = [
  {
    profile_url: "./img/testi1.webp",
    name: "Mike Taylor",
    from: "Lahore, Pakistan",
    comment:
      "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
  },
  {
    profile_url: "./img/testi1.webp",
    name: "John Smith",
    from: "Sydney, Australia",
    comment:
      "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
  },
  {
    profile_url: "./img/testi1.webp",
    name: "Chris Thomas",
    from: "CEO of Red Button",
    comment:
      "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
  },
];

let currentItem = 0;
const backCard = testimonialCards[1];
const frontCard = testimonialCards[0];
const prevImg = document.querySelector(".prev-img");
const nextImg = document.querySelector(".next-img");

const animate = () => {
  const testimonialsCard = document.querySelectorAll(".testimonials-card");
  const cardOnTop = testimonialCards[0];
  const cardBehind = testimonialCards[1];
  cardOnTop.style.filter = "blur(2px)";
  cardBehind.style.filter = "blur(2px)";
  cardBehind.style.opacity = "0";

  setTimeout(() => {
    cardOnTop.style.filter = "blur(0)";
    cardBehind.style.filter = "blur(0)";
    cardBehind.style.opacity = "1";
  }, 300);
};

const setBackDefault = () => {
  let lastTestimonial = testimonials[testimonials.length - 1];
  const imageTag = backCard.children[0];
  const commentTag = backCard.children[1];
  const nameTag = backCard.children[2];
  const addressTag = backCard.children[3];

  imageTag.setAttribute("src", lastTestimonial.profile_url);
  commentTag.textContent = lastTestimonial.comment;
  nameTag.textContent = lastTestimonial.name;
  addressTag.textContent = lastTestimonial.from;
};

const setContent = (index = 0) => {
  let frontCard = testimonialCards[0];
  let imageProfile = frontCard.children[0];
  let comment = frontCard.children[1];
  let name = frontCard.children[2];
  let address = frontCard.children[3];

  imageProfile.setAttribute("src", testimonials[index].profile_url);
  comment.textContent = testimonials[index].comment;
  name.textContent = testimonials[index].name;
  address.textContent = testimonials[index].from;
};

const staggerItem = () => {
  backCard.children[0].setAttribute(
    "src",
    testimonials[currentItem + 1].profile_url
  );
  backCard.children[1].textContent = testimonials[currentItem + 1].comment;
  backCard.children[2].textContent = testimonials[currentItem + 1].name;
  backCard.children[3].textContent = testimonials[currentItem + 1].from;
};

const defaultItem = () => {
  backCard.children[0].setAttribute("src", testimonials[0].profile_url);
  backCard.children[1].textContent = testimonials[0].comment;
  backCard.children[2].textContent = testimonials[0].name;
  backCard.children[3].textContent = testimonials[0].from;
};

nextButton.addEventListener("click", () => {
  let nextItem = currentItem + 1;
  setContent(nextItem);
  currentItem = nextItem;

  if (currentItem > 0) {
    prevImg.setAttribute("src", "./img/up-fill.svg");
  } else {
    prevImg.setAttribute("src", "./img/up.svg");
  }

  if (currentItem == 2) {
    nextImg.setAttribute("src", "./img/down.svg");
  } else {
    nextImg.setAttribute("src", "./img/down-fill.svg");
  }

  if (currentItem < testimonials.length - 1) {
    staggerItem();
  } else {
    defaultItem();
  }

  const pager = document.querySelectorAll(".pager");
  pager.forEach(() => {
    if (currentItem) {
      pager[currentItem].classList.add("pager-active");
    }
    pager[currentItem - 1].classList.remove("pager-active");
  });

  animate();
});

prevButton.addEventListener("click", () => {
  let prevItem = currentItem - 1;
  setContent(prevItem);
  currentItem = prevItem;

  if (currentItem >= 0) {
    staggerItem();
  }

  if (currentItem == 0) {
    prevImg.setAttribute("src", "./img/up.svg");
  } else {
    prevImg.setAttribute("src", "./img/up-fill.svg");
  }

  if (currentItem != testimonials.length - 1) {
    nextImg.setAttribute("src", "./img/down-fill.svg");
  }

  const pager = document.querySelectorAll(".pager");
  pager.forEach((el, i) => {
    pager[currentItem].classList.add("pager-active");
    pager[currentItem + 1].classList.remove("pager-active");
  });

  animate();
});

setBackDefault();
