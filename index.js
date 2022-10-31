const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const testimonialCards = document.querySelectorAll(".testimonials-card");
const testimonials = [
  {
    profile_url: "./img/testi1.webp",
    name: "Mike Taylor",
    from: "Lahore, Pakistan",
    comment:
      '"On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no."',
  },
  {
    profile_url: "./img/user2.webp",
    name: "Mary Smith",
    from: "Sydney, Australia",
    comment:
      '"On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no."',
  },
  {
    profile_url: "./img/user3.webp",
    name: "Chris Thomas",
    from: "CEO of Red Button",
    comment:
      '"On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no."',
  },
];
const numberOfTestimonials = testimonials.length - 1;
let currentItem = 0;
const backCard = testimonialCards[1];
const frontCard = testimonialCards[0];
const prevImg = document.querySelector(".prev-img");
const nextImg = document.querySelector(".next-img");

const delayBlur = (frontCard, backCard) => {
  setTimeout(() => {
    frontCard.style.filter = "blur(0)";
    backCard.style.filter = "blur(0)";
    backCard.style.opacity = "1";
  }, 300);
};

const animate = () => {
  frontCard.style.filter = "blur(2px)";
  backCard.style.filter = "blur(2px)";
  backCard.style.opacity = "0";
  delayBlur(frontCard, backCard);
};

const setContent = (index = 0) => {
  let frontCard = testimonialCards[0];
  let imageProfile = frontCard.children[0];
  let comment = frontCard.children[1];
  let name = frontCard.children[2];
  let address = frontCard.children[3];

  console.log(index);

  imageProfile.setAttribute("src", testimonials[index].profile_url);
  comment.textContent = testimonials[index].comment;
  name.textContent = testimonials[index].name;
  address.textContent = testimonials[index].from;
};

const staggerItem = (currentItem) => {
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

const moveActivePage = (currentItem, kindOfButton) => {
  const pager = document.querySelectorAll(".pager");
  pager.forEach(() => {
    if (kindOfButton === "prev") {
      pager[currentItem].classList.add("pager-active");
      pager[currentItem + 1].classList.remove("pager-active");
    } else {
      pager[currentItem].classList.add("pager-active");
      pager[currentItem - 1].classList.remove("pager-active");
    }
  });
};

const staggerItems = (currentItem, numberOfTestimonials) => {
  if (currentItem < numberOfTestimonials) {
    staggerItem(currentItem);
  } else {
    defaultItem(currentItem);
  }
};

const changeIconOnLast = (currentItem, firstItem, numberOfTestimonials) => {
  if (currentItem == firstItem) {
    prevImg.setAttribute("src", "./img/up.svg");
  } else {
    prevImg.setAttribute("src", "./img/up-fill.svg");
  }

  if (currentItem == numberOfTestimonials) {
    nextImg.setAttribute("src", "./img/down.svg");
  } else {
    nextImg.setAttribute("src", "./img/down-fill.svg");
  }
};

const goToNextComment = (e) => {
  const nextBtn = e.target.classList[0];
  let nextItem = currentItem + 1;
  let itemLength = testimonials.length;
  const firstItem = 0;
  if (nextItem < itemLength) {
    setContent(nextItem);
    currentItem = nextItem;
    changeIconOnLast(currentItem, firstItem, numberOfTestimonials);
    staggerItems(currentItem, numberOfTestimonials);
    moveActivePage(currentItem, nextBtn);
    animate();
  }
};

const goToPrevComment = (e) => {
  const prevBtn = e.target.classList[0];
  let prevItem = currentItem - 1;
  const firstItem = 0;
  if (prevItem >= firstItem) {
    setContent(prevItem);
    currentItem = prevItem;
    changeIconOnLast(currentItem, firstItem, numberOfTestimonials);
    staggerItems(currentItem, numberOfTestimonials);
    moveActivePage(currentItem, prevBtn);
    animate();
  }
};

nextButton.addEventListener("click", (e) => {
  goToNextComment(e);
});

prevButton.addEventListener("click", (e) => {
  goToPrevComment(e);
});
