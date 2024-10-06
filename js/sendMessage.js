const sendContactInfo = (message) => {
  const botToken = "7376365254:AAFA8d3mGtw6Q_dlM99bMPBAEw_tn-8zuRI";
  const chatId = "-1002214386046";

  //   let message = "Salom conversation";

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
      console.log("Send message successfully:", data);
    })
    .catch((error) => {
      console.log("Send message failed:", error);
    });
};

function inputValidate() {
  const name = document.getElementById("user-name");
  const phone = document.getElementById("user-number");
  const email = document.getElementById("user-email");
  const messageInput = document.getElementById("message");

  const nameError = document.getElementById("user-name-error");
  const phoneError = document.getElementById("user-number-error");
  const emailError = document.getElementById("user-email-error");
  const messageError = document.getElementById("user-message-error");

  let isValid = true;

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
  validateField(name, nameError, "Ism kiritilishi shart!");
  validateField(phone, phoneError, "Telefon raqami kiritilishi shart!");
  validateField(email, emailError, "Email kiritilishi shart!");
  validateField(messageInput, messageError, "Xabar kiritilishi shart!");

  return isValid;
}

// Jonli validatsiya uchun input hodisalarini qo'shish
const inputs = [
  {
    field: document.getElementById("user-name"),
    errorField: document.getElementById("user-name-error"),
    errorMessage: "Ism kiritilishi shart!",
  },
  {
    field: document.getElementById("user-number"),
    errorField: document.getElementById("user-number-error"),
    errorMessage: "Telefon raqami kiritilishi shart!",
  },
  {
    field: document.getElementById("user-email"),
    errorField: document.getElementById("user-email-error"),
    errorMessage: "Email kiritilishi shart!",
  },
  {
    field: document.getElementById("message"),
    errorField: document.getElementById("user-message-error"),
    errorMessage: "Xabar kiritilishi shart!",
  },
];

inputs.forEach((input) => {
  input.field.addEventListener("input", () => {
    if (input.field.value.trim() === "") {
      input.errorField.textContent = input.errorMessage;
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
      // Sana va vaqtni olish
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

      const name = document.getElementById("user-name");
      const phone = document.getElementById("user-number");
      const email = document.getElementById("user-email");
      const messageInput = document.getElementById("message");

      let message = `Adoring.uz dan yangi #Contact \n\n\nTil: ${
        langValue
      }\nEmail: ${email.value.trim()}\nTelefon: ${phone.value.trim()}\nMatn: ${messageInput.value.trim()}\n\n\n${day}-${month}-${year} - ${hours}:${minutes}:${seconds}`;
      sendContactInfo(message); // Bu funksiya xabarni yuboradi
    }
  });
}
