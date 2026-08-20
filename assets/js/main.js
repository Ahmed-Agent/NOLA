document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }

  const applyForm = document.getElementById("applyForm");
  const successModal = document.getElementById("successModal");

  if (applyForm) {
    applyForm.addEventListener("submit", (event) => {
      event.preventDefault();
      // TODO: أضف منطق رفع الملفات/الإرسال إلى الخادم هنا عند تجهيز Backend فعلي.
      if (successModal) {
        successModal.classList.add("show");
        successModal.setAttribute("aria-hidden", "false");
      }
      applyForm.reset();
    });
  }

  const closeButtons = document.querySelectorAll("[data-close-modal]");
  closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (successModal) {
        successModal.classList.remove("show");
        successModal.setAttribute("aria-hidden", "true");
      }
    });
  });

  if (successModal) {
    successModal.addEventListener("click", (event) => {
      if (event.target === successModal) {
        successModal.classList.remove("show");
        successModal.setAttribute("aria-hidden", "true");
      }
    });
  }

  const contactForm = document.getElementById("contactForm");
  const contactFeedback = document.getElementById("contactFeedback");

  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      // TODO: أضف منطق إرسال الاستفسار إلى الخادم/البريد عند تجهيز Backend فعلي.
      if (contactFeedback) {
        contactFeedback.hidden = false;
      }
      contactForm.reset();
    });
  }

  const whatsappFab = document.querySelector(".whatsapp-fab");
  if (whatsappFab) {
    whatsappFab.addEventListener("click", () => {
      // معالجة بسيطة لزر واتساب (الانتقال يتم عبر رابط href مباشرة).
      whatsappFab.blur();
    });
  }
});
