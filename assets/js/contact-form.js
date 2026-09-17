/* ----- VALIDATION DU FORMULAIRE ET ENVOI VIA MAILTO ----- */
const formsToValidate = document.querySelectorAll('form[validate]');

formsToValidate.forEach((form) => {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let valid = true;
    const data = {};
    const inputs = [...form.querySelectorAll('input'), ...form.querySelectorAll("select"), ...form.querySelectorAll("textarea")];

    inputs.forEach(input => {
      if (input.value.trim() === "") {
        input.style.borderColor = "#e5484d";
        valid = false;
      } else {
        input.style.borderColor = "";
        data[input.name ?? input.id] = input.value.trim();
      }
    });

    if (!valid) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    window.location.href = `mailto:nononoj@3il.fr?subject=${encodeURIComponent(data.name)}&body=${encodeURIComponent(data.message + '\n\nEmail: ' + data.email)}`;
    form.reset();
    alert("Message prêt à être envoyé via votre client mail.");
  });
});
