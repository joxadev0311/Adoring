const successAlert = document.querySelector(".success__card");
const errorAlert = document.querySelector(".error__card");
const sendContactInfo = (message) => {
  const botToken = "7376365254:AAFA8d3mGtw6Q_dlM99bMPBAEw_tn-8zuRI";
  const chatId = "-1002214386046";

  //   let message = "Salom conversation";

  fetch(`https://api.telegram.org/bot${botToken}/endMessage`, {
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
      }
      if (!data.ok) {
        errorAlert.classList.add("error__card--active");
        setTimeout(() => {
          errorAlert.classList.add("error__card--hide");
          errorAlert.classList.remove("error__card--active");
        }, 5000);
      }
    })
    .catch((error) => {
      console.log("Send message failed:", error, data);
    });
};

// function inputValidate() {
//   const name = document.getElementById("user-name");
//   const phone = document.getElementById("user-number");
//   const email = document.getElementById("user-email");
//   const messageInput = document.getElementById("message");

//   const nameError = document.getElementById("user-name-error");
//   const phoneError = document.getElementById("user-number-error");
//   const emailError = document.getElementById("user-email-error");
//   const messageError = document.getElementById("user-message-error");

//   let isValid = true;

//   // Validatsiya funksiyasi
//   function validateField(field, errorField, errorMessage) {
//     if (field && field.value.trim() === "") {
//       isValid = false;
//       errorField.textContent = errorMessage;
//     } else {
//       errorField.textContent = ""; // Xato xabarini tozalash
//     }
//   }

//   // Ekran kengligi 1200px dan kichik bo'lsa messageInput DOM'dan olib tashlanadi
//   if (window.innerWidth < 1200 && messageInput) {
//     messageInput.remove(); // DOM'dan olib tashlash
//   }

//   // Har bir maydonni validatsiya qilish
//   validateField(name, nameError, "Ism kiritilishi shart!");
//   validateField(phone, phoneError, "Telefon raqami kiritilishi shart!");
//   validateField(email, emailError, "Email kiritilishi shart!");

//   // MessageInput DOM'da mavjud bo'lsa validatsiya qilinadi
//   if (messageInput && document.contains(messageInput)) {
//     validateField(messageInput, messageError, "Xabar kiritilishi shart!");
//   }

//   return isValid;
// }

// // Jonli validatsiya
// const inputs = [
//   {
//     field: document.getElementById("user-name"),
//     errorField: document.getElementById("user-name-error"),
//     errorMessage: "Ism kiritilishi shart!",
//   },
//   {
//     field: document.getElementById("user-number"),
//     errorField: document.getElementById("user-number-error"),
//     errorMessage: "Telefon raqami kiritilishi shart!",
//   },
//   {
//     field: document.getElementById("user-email"),
//     errorField: document.getElementById("user-email-error"),
//     errorMessage: "Email kiritilishi shart!",
//   },
// ];

// // Message inputni inputs array'iga qo'shish, agar u DOM'da mavjud bo'lsa va 1200px dan kengroq bo'lsa
// const messageInput = document.getElementById("message");
// if (messageInput && window.innerWidth >= 1200) {
//   inputs.push({
//     field: messageInput,
//     errorField: document.getElementById("user-message-error"),
//     errorMessage: "Xabar kiritilishi shart!",
//   });
// }

// // Har bir input uchun event hodisasi
// inputs.forEach((input) => {
//   input.field.addEventListener("input", () => {
//     if (input.field.value.trim() === "") {
//       input.errorField.textContent = input.errorMessage;
//     } else {
//       input.errorField.textContent = ""; // Xato xabarini tozalash
//     }
//   });
// });

// const sendMessage = document.querySelector("#send-contact");

// if (sendMessage) {
//   sendMessage.addEventListener("click", (e) => {
//     e.preventDefault();
//     if (inputValidate()) {
//       // Sana va vaqtni olish
//       const now = new Date();

//       const formatTimeUnit = (unit) => {
//         return unit < 10 ? `0${unit}` : unit; // 10 dan kichik bo'lsa 0 qo'shish
//       };

//       const year = now.getFullYear();
//       const month = formatTimeUnit(now.getMonth() + 1); // Oyni formatlash
//       const day = formatTimeUnit(now.getDate()); // Kunni formatlash
//       const hours = now.getHours(); // Soat
//       const minutes = formatTimeUnit(now.getMinutes()); // Minutlarni formatlash
//       const seconds = formatTimeUnit(now.getSeconds()); // Sekundlarni formatlash

//       const htmlElement = document.documentElement;
//       const langValue = htmlElement.getAttribute("lang");

//       const name = document.getElementById("user-name");
//       const phone = document.getElementById("user-number");
//       const email = document.getElementById("user-email");
//       // const messageInput = document.getElementById("message");

//       // Xabarni yig'ish
//       let message = `Adoring.uz dan yangi #Contact \n\n\nTil: ${langValue}\nFISH:${name.value.trim()}\nEmail: ${email.value.trim()}\nTelefon: ${phone.value.trim()}\nMatn: ${
//         messageInput && document.contains(messageInput)
//           ? messageInput.value.trim()
//           : "Yo'q"
//       }\n\n\n${day}-${month}-${year} - ${hours}:${minutes}:${seconds}`;

//       // Xabarni yuborish funksiyasi
//       sendContactInfo(message);
//     }
//   });
// }

// Xato xabarlarining tarjimalari
const errorMessages = {
  en: {
    name: "Name is required!",
    phone: "Phone number is required!",
    email: "Email is required!",
    message: "Message is required!",
  },
  ru: {
    name: "Имя обязательно!",
    phone: "Номер телефона обязателен!",
    email: "Электронная почта обязательна!",
    message: "Сообщение обязательно!",
  },
  uz: {
    name: "Ism kiritilishi shart!",
    phone: "Telefon raqami kiritilishi shart!",
    email: "Email kiritilishi shart!",
    message: "Xabar kiritilishi shart!",
  },
};

// inputValidate funksiyasi
function inputValidate() {
  const name = document.getElementById("user-name");
  const phone = document.getElementById("user-number");
  const email = document.getElementById("user-email");
  const messageInput = document.getElementById("message"); // Message mavjudligini keyin tekshiramiz

  const nameError = document.getElementById("user-name-error");
  const phoneError = document.getElementById("user-number-error");
  const emailError = document.getElementById("user-email-error");
  const messageError = document.getElementById("user-message-error");

  let isValid = true;

  // Hozirgi tilni aniqlash
  const lang = document.documentElement.getAttribute("lang") || "en";

  // Tarjimani tanlash
  const selectedMessages = errorMessages[lang] || errorMessages.en;

  // Validatsiya funksiyasini yozish
  function validateField(field, errorField, errorMessage) {
    if (field.value.trim() === "") {
      isValid = false;
      errorField.textContent = errorMessage;
    } else {
      errorField.textContent = ""; // Xato xabarini tozalash
    }
  }

  // Har bir maydonni validatsiya qilish
  validateField(name, nameError, selectedMessages.name);
  validateField(phone, phoneError, selectedMessages.phone);
  validateField(email, emailError, selectedMessages.email);

  // Ekran kengligini tekshirish
  if (window.innerWidth >= 1200) {
    // Agar ekran kengligi 1200px dan katta bo'lsa, messageInput uchun validatsiya o'tkazamiz
    if (messageInput) {
      validateField(messageInput, messageError, selectedMessages.message);
    }
  }

  return isValid;
}

// MessageInput elementini ekran kengligi 1200px dan kichik bo'lsa olib tashlash
function removeMessageInputIfSmallScreen() {
  const messageInput = document.getElementById("message");
  if (window.innerWidth < 1200) {
    if (messageInput) {
      messageInput.remove(); // DOM dan olib tashlash
    }
  }
}

// Hujjat yuklanganda xususiyatlarni aniqlash
window.addEventListener("load", () => {
  removeMessageInputIfSmallScreen();
});

// Ekran o'lchamini o'zgartirishda xususiyatlarni aniqlash
window.addEventListener("resize", () => {
  removeMessageInputIfSmallScreen();
});

// Jonli validatsiya uchun input hodisalarini qo'shish
const inputs = [
  {
    field: document.getElementById("user-name"),
    errorField: document.getElementById("user-name-error"),
  },
  {
    field: document.getElementById("user-number"),
    errorField: document.getElementById("user-number-error"),
  },
  {
    field: document.getElementById("user-email"),
    errorField: document.getElementById("user-email-error"),
  },
];

// Message input mavjud bo'lsa, uni inputs array'iga qo'shamiz
const messageInput = document.getElementById("message");
if (messageInput) {
  inputs.push({
    field: messageInput,
    errorField: document.getElementById("user-message-error"),
  });
}

// Hozirgi tilni aniqlash
const lang = document.documentElement.getAttribute("lang") || "en";

// Tarjimani tanlash
const selectedMessages = errorMessages[lang] || errorMessages.en;

inputs.forEach((input) => {
  input.field.addEventListener("input", () => {
    if (input.field.value.trim() === "") {
      input.errorField.textContent =
        selectedMessages[input.field.id.split("-")[1]];
    } else {
      input.errorField.textContent = ""; // Xato xabarini tozalash
    }
  });
});

const sendMessage = document.querySelector("#send-contact");

if (sendMessage) {
  sendMessage.addEventListener("click", (e) => {
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
      const seconds = formatTimeUnit(now.getSeconds()); // Sekundlarni formatlash

      const htmlElement = document.documentElement;
      const langValue = htmlElement.getAttribute("lang");

      // Ism, telefon, email va xabarni yana bir bor olish
      const name = document.getElementById("user-name");
      const phone = document.getElementById("user-number");
      const email = document.getElementById("user-email");
      const messageInput = document.getElementById("message");

      // Xabar yig'ish
      let message = `Adoring.uz dan yangi #Contact \n\n\nTil: ${langValue}\nFISH:${name.value.trim()}\nEmail: ${email.value.trim()}\nTelefon: ${phone.value.trim()}\nMatn: ${
        messageInput && document.contains(messageInput)
          ? messageInput.value.trim()
          : "Yo'q"
      }\n\n\n${day}-${month}-${year} - ${hours}:${minutes}:${seconds}`;

      // Xabarni yuborish funksiyasi
      sendContactInfo(message);

      name.value = "";
      phone.value = "";
      email.value = "";
      messageInput && messageInput.value
        ? (messageInput.value = "")
        : (messageInput.value = ""); // Message mavjud bo'lsa inputni tozalash
    }
  });
}
