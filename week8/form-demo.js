document.addEventListener("DOMContentLoaded", () => {
  const paymentSelect = document.getElementById("payment");
  const cardLabel = document.querySelector("label[for='card']");
  const cardInput = document.getElementById("card");
  const paypalLabel = document.querySelector("label[for='paypal']");
  const paypalInput = document.getElementById("paypal");

  // Hide both labels and fields initially
  cardLabel.classList.add("hide");
  cardInput.classList.add("hide");
  paypalLabel.classList.add("hide");
  paypalInput.classList.add("hide");

  // Show or hide labels and fields based on the selected payment method
  paymentSelect.addEventListener("change", () => {
      if (paymentSelect.value === "creditCard") {
          cardLabel.classList.remove("hide"); // Show Credit Card label
          cardInput.classList.remove("hide"); // Show Credit Card input
          paypalLabel.classList.add("hide");   // Hide PayPal label
          paypalInput.classList.add("hide");   // Hide PayPal input
      } else if (paymentSelect.value === "paypal") {
          paypalLabel.classList.remove("hide"); // Show PayPal label
          paypalInput.classList.remove("hide"); // Show PayPal input
          cardLabel.classList.add("hide");      // Hide Credit Card label
          cardInput.classList.add("hide");      // Hide Credit Card input
      } else {
          // Hide both labels and fields if no payment method is selected
          cardLabel.classList.add("hide");
          cardInput.classList.add("hide");
          paypalLabel.classList.add("hide");
          paypalInput.classList.add("hide");
      }
  });
});

