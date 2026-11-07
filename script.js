const checkout = document.querySelector("#checkout");
const transactionForm = document.querySelector("#transaction-form");
const transactionId = document.querySelector("#transaction-id");
const confirmation = document.querySelector("#confirmation");

document.querySelector("#buy-button").addEventListener("click", () => {
  checkout.showModal();
  transactionId.focus();
});

document.querySelector("#close-checkout").addEventListener("click", () => {
  checkout.close();
});

transactionId.addEventListener("input", () => {
  transactionId.value = transactionId.value.replace(/\D/g, "").slice(0, 4);
});

transactionForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!transactionForm.reportValidity()) return;

  confirmation.textContent = "Thanks! Your demo submission is noted on this page only. No payment was made or verified.";
  confirmation.hidden = false;
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
