/* ----- VALIDATION ET ENVOI DU FORMULAIRE DE CONTACT (Netlify Forms) ----- */
function encodeFormData(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const formsToValidate = document.querySelectorAll('form[validate]');

formsToValidate.forEach((form) => {
  const statusEl = form.querySelector('.form-status');
  const submitBtn = form.querySelector('button[type="submit"]');

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let valid = true;
    const data = {};
    const requiredFields = form.querySelectorAll('[required]');

    requiredFields.forEach((field) => {
      if (field.value.trim() === "") {
        field.style.borderColor = "#e5484d";
        valid = false;
      } else {
        field.style.borderColor = "";
      }
      data[field.name] = field.value.trim();
    });

    if (!valid) {
      if (statusEl) {
        statusEl.textContent = "Merci de remplir tous les champs.";
        statusEl.className = "form-status error";
      }
      return;
    }

    // Honeypot anti-spam : si rempli, on abandonne silencieusement
    const honeypot = form.querySelector('[name="bot-field"]');
    if (honeypot && honeypot.value !== "") {
      return;
    }

    data['form-name'] = form.getAttribute('name');

    if (submitBtn) submitBtn.disabled = true;
    if (statusEl) {
      statusEl.textContent = "Envoi en cours...";
      statusEl.className = "form-status";
    }

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encodeFormData(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP " + response.status);
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
