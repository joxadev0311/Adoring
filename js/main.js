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
      document.addEventListener('click', (e) => {
        if (!e.target.closest(".language-switcher") &&!e.target.closest(".language-switcher__option")) {
          languageSwitcher.classList.remove("language-switcher__open");
        //   document.removeEventListener('click', closeDropdown);
        }
      })
    });
    const languages = {
      uz: {
        name: "O'zbekcha",
        flag: "https://ik.imagekit.io/testcloud/Adoring/Icon/Language-en-icon.svg?updatedAt=1727723639436",
      },
      ru: {
        name: "Русский",
        flag: "https://ik.imagekit.io/testcloud/Adoring/Icon/Language-en-icon.svg?updatedAt=1727723639436",
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
    }
  }
});
