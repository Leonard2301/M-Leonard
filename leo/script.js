document.getElementById("formInscription").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const nom = document.getElementById("nom").value;
    const numero = document.getElementById("numero").value;
    const cours = document.getElementById("coursChoisi").value;
    const mode = document.getElementById("mode").value;
  
    const messageDiv = document.getElementById("message");
  
    if (nom && numero && cours && mode) {
      messageDiv.innerHTML = `<p>Merci M/Mme ${nom}, vous êtes inscrit(e) au cours de ${cours} (${mode}).Pour plus de détails, Nous vous contacterons le plutôt possible sur votre numéro ${numero} !</p>`;
      messageDiv.style.color = "blue";
    } else {
      messageDiv.innerHTML = `<p>Veuillez remplir tous les champs.</p>`;
      messageDiv.style.color = "red";
    }
  
    // Ici, tu pourrais envoyer les infos vers une base de données ou un email avec PHP/Backend
  });
  