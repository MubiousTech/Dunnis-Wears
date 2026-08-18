/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {

    dropDownMenu.classList.toggle("open");

    const isOpen = dropDownMenu.classList.contains("open");

    toggleBtnIcon.className = isOpen
      ? "fa-solid fa-xmark"
      : "fa-solid fa-bars";

  });
}


/* =========================================================
   CLOSE MOBILE MENU WHEN LINK IS CLICKED
========================================================= */

const mobileLinks = document.querySelectorAll(".dropdown_menu a");

mobileLinks.forEach((link) => {

  link.addEventListener("click", () => {

    dropDownMenu.classList.remove("open");

    toggleBtnIcon.className = "fa-solid fa-bars";

  });

});


/* =========================================================
   IMAGE SLIDER
========================================================= */

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const slide = document.querySelector(".slide");


if (next && prev && slide) {

  next.addEventListener("click", () => {

    const items = document.querySelectorAll(".item");

    slide.appendChild(items[0]);

  });


  prev.addEventListener("click", () => {

    const items = document.querySelectorAll(".item");

    slide.prepend(items[items.length - 1]);

  });

}


/* =========================================================
   COLLECTION FILTER
========================================================= */

const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");


filterButtons.forEach((button) => {

  button.addEventListener("click", () => {

    /* Remove active state */
    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    /* Add active state */
    button.classList.add("active");


    const filter = button.dataset.filter;


    galleryItems.forEach((item) => {

      if (filter === "all" || item.classList.contains(filter)) {

        item.style.display = "block";

      } else {

        item.style.display = "none";

      }

    });

  });

});