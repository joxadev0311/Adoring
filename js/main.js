document.addEventListener("DOMContentLoaded", function () {
  const langValue = document.documentElement.lang;

  const languageSwitcher = document.querySelector(".language-switcher");
  if (languageSwitcher) {
    const selectedLangText = languageSwitcher.querySelector(
      ".language-switcher__selected_lang"
    );
    const selectedFlagImg = languageSwitcher.querySelector(
      ".language-switcher__selected-flag img"
    );
    const languageOptions = languageSwitcher.querySelectorAll(
      ".language-switcher__option"
    );
    languageSwitcher.addEventListener("click", () => {
      languageSwitcher.classList.toggle("language-switcher__open");
      document.addEventListener("click", (e) => {
        if (
          !e.target.closest(".language-switcher") &&
          !e.target.closest(".language-switcher__option")
        ) {
          languageSwitcher.classList.remove("language-switcher__open");
          //   document.removeEventListener('click', closeDropdown);
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

  // menu
  const barsMenu = document.querySelector(".header__bars");
  if (barsMenu) {
    barsMenu.addEventListener("click", () => {
      barsMenu.classList.toggle("header__bars--active");
      const contactPanel = document.querySelector("#top");
      contactPanel.classList.toggle("contact-panel--active");
    });
  }
});
