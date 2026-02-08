const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".site-nav");
const overlay = document.querySelector(".modal-overlay");
const modals = document.querySelectorAll(".modal");
const modalOpenButtons = document.querySelectorAll("[data-modal-open]");
const modalCloseTargets = document.querySelectorAll("[data-modal-close]");

const closeAllModals = () => {
  modals.forEach((modal) => {
    modal.classList.remove("is-active");
    modal.setAttribute("aria-hidden", "true");
  });
  overlay.classList.remove("is-active");
};

const openModal = (id) => {
  const modal = document.querySelector(`[data-modal="${id}"]`);
  if (!modal) {
    return;
  }
  closeAllModals();
  modal.classList.add("is-active");
  modal.setAttribute("aria-hidden", "false");
  overlay.classList.add("is-active");
};

hamburger?.addEventListener("click", () => {
  const isOpen = hamburger.classList.toggle("is-open");
  hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");
  nav?.classList.toggle("is-open", isOpen);
});

modalOpenButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.getAttribute("data-modal-open");
    if (target) {
      openModal(target);
    }
  });
});

modalCloseTargets.forEach((button) => {
  button.addEventListener("click", () => {
    closeAllModals();
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeAllModals();
  }
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement && hamburger?.classList.contains("is-open")) {
    hamburger.classList.remove("is-open");
    hamburger.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
  }
});
