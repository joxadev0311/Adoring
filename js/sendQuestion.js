const successAlert = document.querySelector(".success__card");
const errorAlert = document.querySelector(".error__card");

const sendContactInfo = (message) => {
  const botToken = "7376365254:AAFA8d3mGtw6Q_dlM99bMPBAEw_tn-8zuRI";
  const chatId = "-1002214386046";

  fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.ok) {
        successAlert.classList.add("success__card--active");
        setTimeout(() => {
          successAlert.classList.add("success__card--hide");
          successAlert.classList.remove("success__card--active");
          setTimeout(() => {
            successAlert.classList.remove("success__card--hide");
          }, 1000);
        }, 5000);
      } else {
        errorAlert.classList.add("error__card--active");
        setTimeout(() => {
          errorAlert.classList.add("error__card--hide");
          errorAlert.classList.remove("error__card--active");
        }, 5000);
      }
    })
    .catch((error) => {
      console.log("Send message failed:", error);
    });
};

// Xato xabarlarining tarjimalari
const errorMessages = {
  en: {
    name: "Name is required!",
    message: "Message is required!",
  },
  ru: {
    name: "Имя обязательно!",
    message: "Сообщение обязательно!",
  },
  uz: {
    name: "Ism kiritilishi shart!",
    message: "Xabar kiritilishi shart!",
  },
};

// Validatsiya funksiyasi (umumiy funksiyaga aylantirildi)
function validateField(field, errorField, errorMessage) {
  if (field.value.trim() === "") {
    errorField.textContent = errorMessage;
    return false;
  } else {
    errorField.textContent = ""; // Xato xabarini tozalash
    return true;
  }
}

// inputValidate funksiyasi
function inputValidate() {
  const name = document.querySelector("#name");
  const msg = document.querySelector("#msg");

  const nameError = document.querySelector(".name-error");
  const messageError = document.querySelector(".msg-error");

  let isValid = true;

  // Hozirgi tilni aniqlash
  const lang = document.documentElement.getAttribute("lang") || "en";

  // Tarjimani tanlash
  const selectedMessages = errorMessages[lang] || errorMessages.en;

  // Har bir maydonni validatsiya qilish
  isValid &= validateField(name, nameError, selectedMessages.name);
  isValid &= validateField(msg, messageError, selectedMessages.message);

  return Boolean(isValid); // true yoki false qaytaradi
}

// Live validatsiya funksiyasi
function addLiveValidation() {
  const name = document.querySelector("#name");
  const msg = document.querySelector("#msg");

  const nameError = document.querySelector(".name-error");
  const messageError = document.querySelector(".msg-error");

  // Hozirgi tilni aniqlash
  const lang = document.documentElement.getAttribute("lang") || "en";
  const selectedMessages = errorMessages[lang] || errorMessages.en;

  // Har bir inputga event listener qo'shish
  name.addEventListener("input", () => {
    validateField(name, nameError, selectedMessages.name);
  });

  msg.addEventListener("input", () => {
    validateField(msg, messageError, selectedMessages.message);
  });
}

const sendQuestion = document.querySelector(".question-modal__send-button");
const sendQuestionModal = document.querySelector(".question-modal");

if (sendQuestion) {
  sendQuestion.addEventListener("click", (e) => {
    e.preventDefault();
    if (inputValidate()) {
      const now = new Date();

      const formatTimeUnit = (unit) => {
        return unit < 10 ? `0${unit}` : unit; // 10 dan kichik bo'lsa 0 qo'shish
      };

      const year = now.getFullYear();
      const month = formatTimeUnit(now.getMonth() + 1); // Oyni formatlash
      const day = formatTimeUnit(now.getDate()); // Kunni formatlash
      const hours = now.getHours(); // Soat
      const minutes = formatTimeUnit(now.getMinutes()); // Minutlarni formatlash
      const seconds = formatTimeUnit(now.getSeconds());
      const formattedDate = `${day}-${month}-${year} - ${hours}:${minutes}:${seconds}`;

      const langValue = document.documentElement.getAttribute("lang");

      sendQuestionModal.classList.remove("question-modal_active");
      const name = document.querySelector("#name");
      const msg = document.querySelector("#msg");
      const message = `Adoring.uz dan yangi #obunachi\n\n\Til: ${langValue}\nFISH: ${name.value}\nXabar: ${msg.value}\n\n\n${formattedDate}`;
      sendContactInfo(message);

      // Forma yuborilgandan so'ng inputlarni tozalash
      name.value = "";
      msg.value = "";
    }
  });
}

// Live validatsiyani ishga tushirish
addLiveValidation();
