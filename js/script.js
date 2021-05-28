let nameInput = document.getElementById('name');
let labelName = document.getElementById('label-for-name');
let phoneInput = document.getElementById('phone');
let labelPhone = document.getElementById('label-for-phone');

function removeLabelOnInput(element, label) {
  element.addEventListener('input', function() {
    if (this.value === '') {
      label.style.display = 'block';
      return;
    }
    label.style.display = 'none';
  });
}

removeLabelOnInput(nameInput, labelName);
removeLabelOnInput(phoneInput, labelPhone);