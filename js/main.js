document.addEventListener("DOMContentLoaded", function () {
  const langValue = document.documentElement.lang;

  const languageSwitcher = document.querySelectorAll(".language-switcher");
  if (languageSwitcher) {
    languageSwitcher.forEach((item) => {
      const selectedLangText = item.querySelector(
        ".language-switcher__selected_lang"
      );
      const selectedFlagImg = item.querySelector(
        ".language-switcher__selected-flag img"
      );
      const languageOptions = item.querySelectorAll(
        ".language-switcher__option"
      );
      item.addEventListener("click", () => {
        item.classList.toggle("language-switcher__open");
        document.addEventListener("click", (e) => {
          if (
            !e.target.closest(".language-switcher") &&
            !e.target.closest(".language-switcher__option")
          ) {
            item.classList.remove("language-switcher__open");
          }
        });
      });
      const languages = {
        ru: {
          name: "Русский",
          flag: "https://ik.imagekit.io/testcloud/SultanSeeds/photo/icon/RU.png?updatedAt=1725041169328",
        },
        en: {
          name: "English",
          flag: "https://ik.imagekit.io/testcloud/Adoring/Icon/Language-en-icon.svg?updatedAt=1727723639436",
        },
      };
      languageOptions.forEach((option) => {
        option.addEventListener("click", function () {
          const selectedLang = this.getAttribute("data-lang");
          selectedLangText.textContent = languages[selectedLang].name;
          selectedFlagImg.src = languages[selectedLang].flag;
        });
      });
      if (langValue === "en") {
        selectedLangText.textContent = languages.en.name;
        selectedFlagImg.src = languages.en.flag;
      } else {
        selectedLangText.textContent = languages.ru.name;
        selectedFlagImg.src = languages.ru.flag;
      }
    });
  }

  // accordion
  const accordionHeaders = document.querySelectorAll(".accordion__header");

  if (accordionHeaders) {
    accordionHeaders.forEach((button) => {
      button.addEventListener("click", () => {
        const accordionItem = button.parentElement;
        const accordionContent = accordionItem.querySelector(
          ".accordion__content"
        );
        const clickedIcon = button.querySelector(".accordion__header-icon");

        // Agar accordion ochiq bo'lsa (active class bor bo'lsa), uni yopish
        if (accordionItem.classList.contains("accordion__item_active")) {
          accordionItem.classList.remove("accordion__item_active");
          accordionContent.style.maxHeight = null; // Kontentni yopish
          clickedIcon.classList.remove("accordion__header-icon_active"); // Icon active'ni olib tashlash
        } else {
          // Boshqa ochiq accordionlarni yopish
          document.querySelectorAll(".accordion__item").forEach((item) => {
            item.classList.remove("accordion__item_active");
            item.querySelector(".accordion__content").style.maxHeight = null;
            item
              .querySelector(".accordion__header-icon")
              .classList.remove("accordion__header-icon_active");
          });

          // Bosilgan accordion'ni ochish
          accordionItem.classList.add("accordion__item_active");
          accordionContent.style.maxHeight =
            accordionContent.scrollHeight + "px";
          clickedIcon.classList.add("accordion__header-icon_active");
        }
      });
    });
  }

  // up
  const upButton = document.querySelector(".up");
  if (upButton) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 600) {
        upButton.classList.add("up_visible");
      } else {
        upButton.classList.remove("up_visible");
      }
    });
    upButton.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // header sticky
  document.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (window.scrollY > 0) {
      header.classList.add("header--sticky");
      if (document.body.classList.contains("no-scroll")) {
        header.classList.remove("header--sticky");
      }
    } else {
      header.classList.remove("header--sticky");
    }
  });

  // mobile menu
  const openButton = document.querySelector(".header__menu-icon");
  const closeButton = document.querySelector(".mobile__nav button");

  openButton.addEventListener("click", () => {
    // document.body.classList.add("no-scroll");
    document.querySelector(".mobile-menu").classList.add("mobile-menu_active");
  });

  closeButton.addEventListener("click", () => {
    // document.body.classList.remove("no-scroll");
    document
      .querySelector(".mobile-menu")
      .classList.remove("mobile-menu_active");
  });

  // send question modal
  const sendQuestionButton = document.querySelector(".send-question__button");
  const sendQuestionModal = document.querySelector(".question-modal");
  const closeSendQuestionModalButton2 = document.querySelector(
    ".question-modal__close"
  );

  if (sendQuestionButton) {
    sendQuestionButton.addEventListener("click", () => {
      sendQuestionModal.classList.add("question-modal_active");
    });
  }

  closeSendQuestionModalButton2.addEventListener("click", () => {
    sendQuestionModal.classList.remove("question-modal_active");
  });
});
