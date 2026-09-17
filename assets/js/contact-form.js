/* ----- VALIDATION ET ENVOI DU FORMULAIRE DE CONTACT (Web3Forms) ----- */
const formsToValidate = document.querySelectorAll('form[validate]');

formsToValidate.forEach((form) => {
  const statusEl = form.querySelector('.form-status');
  const submitBtn = form.querySelector('button[type="submit"]');

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let valid = true;
    const requiredFields = form.querySelectorAll('[required]');

    requiredFields.forEach((field) => {
      if (field.value.trim() === "") {
        field.style.borderColor = "#e5484d";
        valid = false;
      } else {
        field.style.borderColor = "";
      }
    });

    if (!valid) {
      if (statusEl) {
        statusEl.textContent = "Merci de remplir tous les champs.";
        statusEl.className = "form-status error";
      }
      return;
    }

    // Honeypot anti-spam : si coché, on abandonne silencieusement
    const honeypot = form.querySelector('[name="botcheck"]');
    if (honeypot && honeypot.checked) {
      return;
    }

    const formData = new FormData(form);

    if (submitBtn) submitBtn.disabled = true;
    if (statusEl) {
      statusEl.textContent = "Envoi en cours...";
      statusEl.className = "form-status";
    }

    fetch(form.action, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        if (!result.success) {
          throw new Error(result.message || "Échec de l'envoi");
        }
        if (statusEl) {
          statusEl.textContent = "Message envoyé, merci ! Je reviens vers vous rapidement.";
          statusEl.className = "form-status success";
        }
        form.reset();
      })
      .catch(() => {
        if (statusEl) {
          statusEl.textContent = "Échec de l'envoi. Écrivez-moi directement à jordannono2245@gmail.com.";
          statusEl.className = "form-status error";
        }
      })
      .finally(() => {
        if (submitBtn) submitBtn.disabled = false;
      });
  });
});
