let nameU = document.querySelector('#nameU');
let radio = document.querySelector('#radio');
let date = document.querySelector('#date');
let oCebe = document.querySelector('#personalityInformation');

let descriptionName = document.querySelector('#descriptionName');
let descriptionRadio = document.querySelector('#descriptionRadio');
let descriptionAge = document.querySelector('#descriptionAge');
let descriptionOCebe = document.querySelector('#descriptionOCebe');

nameU.addEventListener('input', function() {
    descriptionName.textContent = nameU.value;
});
radio.addEventListener('change', function () {
    const selectedRadio = radio.querySelector('input[name="radio"]:checked');
  
    if (selectedRadio.value == "ghgh") {
      descriptionRadio.textContent = "Парень";
    } else if (selectedRadio.value == "roor") {
      descriptionRadio.textContent = "Девушка";
    }
  });
date.addEventListener('input', function() {
    var str = date.value;
    var newstr = str.replace(".", "/");
    var n = newstr.replace(".", "/");
    const bluat = n[3]+n[4]+n[2]+n[0]+n[1]+n.slice(5)
    const inputDate = new Date(bluat);
    var ageDifMs = Date.now() - inputDate;
    var ageDate = new Date(ageDifMs);
    var age = Math.abs(ageDate.getUTCFullYear() - 1970);
    descriptionAge.textContent = age;
});
oCebe.addEventListener('input', function() {
    descriptionOCebe.textContent = oCebe.value;
});