function scrollToSection(id){
  const el = document.getElementById(id);
  if(el){
    el.scrollIntoView({behavior:"smooth", block:"start"});
  }
}

function handleSubmit(e){
  e.preventDefault();
  const name = document.getElementById("name").value.trim() || "Merci";
  const success = document.getElementById("success");
  success.textContent = `${name} — votre message a bien été simulé.`;
}
