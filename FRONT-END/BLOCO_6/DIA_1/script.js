function createList() {
  let estados = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];

  let selectEstados = document.querySelector('#select-estado');
  for (let index = 0; index < estados.length; index += 1) {
    let option = document.createElement('option');
    option.innerText = estados[index];
    option.value = estados[index];
    selectEstados.appendChild(option);
  }
}
createList();

const data = document.getElementById('dInicio');
const botaoEnvia = document.getElementById('botaoEnvia');

botaoEnvia.addEventListener('click', function (event) {
  event.preventDefault();
  const required = document.querySelectorAll('[required]');
  for (let itemRequired = 0; itemRequired < required.length; itemRequired += 1) {
    let input = required[itemRequired];
    if (input.required) {
      if (input.value === '') {
        alert(`O campo ${input.name} é obrigatório!`);
      }
    }
  }
});
