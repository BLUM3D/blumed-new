const form = document.getElementById('opcoes-senha');
const btn =  document.getElementById('btn-opcoes');
const box = document.getElementById('box-forms');


btn.addEventListener('click', function(event) {
  event.preventDefault();
  let divQueVaiAparecer = document.getElementById(form.choice.value);
  divQueVaiAparecer.classList.toggle("invisivel");
  console.log(divQueVaiAparecer);
});
