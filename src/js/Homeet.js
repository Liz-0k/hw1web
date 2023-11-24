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
nameU.addEventListener('input', function(e){
  if( e.key.match(/[0-9]/) ) return e.preventDefault();
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
  var n = str.replace(/\./g, "/");
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

const fileSelect = document.querySelector("#buttonSendPhoto"),
  fileElem = document.querySelector("#photo"),
  fileList = document.querySelector("#yourProfilePhotoId");

fileSelect.addEventListener(
  "click",
  (e) => {
    if (fileElem) {
      fileElem.click();
    }
    e.preventDefault(); // prevent navigation to "#"
  },
  false,
);

fileElem.addEventListener("change", handleFiles, false);

function handleFiles() {
  for (let i = 0; i < this.files.length; i++) {
    if (`${this.files[i].size}`>10000000) {
      alert("Размер изображения превышает 10 мб");
    } else {
      fileList.innerHTML = "";
      const img = document.createElement("img");
      img.src = URL.createObjectURL(this.files[i]);
      img.width = 150;
      img.onload = () => {
        URL.revokeObjectURL(img.src);
      };
      fileList.appendChild(img);
      fileList.classList.remove("yourProfilePhoto");
      img.style.cssText += `
        border: 2px solid #b18bd2;
        border-radius: 10px;
      `
    }
  }
}

      // ВАЛИДАЦИЯ
let number = document.querySelector("#number")

window.addEventListener("DOMContentLoaded", function() {
  [].forEach.call( document.querySelectorAll('#number'), function(input) {
  var keyCode;
  function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___)-___-__-__",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function(a) {
              return i < val.length ? val.charAt(i++) || def.charAt(i) : a
          });
      i = new_value.indexOf("_");
      if (i != -1) {
          i < 5 && (i = 3);
          new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
          function(a) {
              return "\\d{1," + a.length + "}"
          }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
      if (event.type == "blur" && this.value.length < 5)  this.value = ""
  }

  input.addEventListener("input", mask, false);
  input.addEventListener("focus", mask, false);
  input.addEventListener("blur", mask, false);
  input.addEventListener("keydown", mask, false)

});

});
function Calendar3(id, year, month) {
  var Dlast = new Date(year,month+1,0).getDate(),
      D = new Date(year,month,Dlast),
      DNlast = D.getDay(),
      DNfirst = new Date(D.getFullYear(),D.getMonth(),1).getDay(),
      calendar = '<tr>',
      m = document.querySelector('#'+id+' option[value="' + D.getMonth() + '"]'),
      g = document.querySelector('#'+id+' input');
  if (DNfirst != 0) {
    for(var  i = 1; i < DNfirst; i++) calendar += '<td>';
  }else{
    for(var  i = 0; i < 6; i++) calendar += '<td>';
  }
  for(var  i = 1; i <= Dlast; i++) {
    if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
      calendar += '<td class="today">' + i;
    }else{
      if (  // список официальных праздников
          (i == 1 && D.getMonth() == 0 && ((D.getFullYear() > 1897 && D.getFullYear() < 1930) || D.getFullYear() > 1947)) || // Новый год
          (i == 2 && D.getMonth() == 0 && D.getFullYear() > 1992) || // Новый год
          ((i == 3 || i == 4 || i == 5 || i == 6 || i == 8) && D.getMonth() == 0 && D.getFullYear() > 2004) || // Новый год
          (i == 7 && D.getMonth() == 0 && D.getFullYear() > 1990) || // Рождество Христово
          (i == 23 && D.getMonth() == 1 && D.getFullYear() > 2001) || // День защитника Отечества
          (i == 8 && D.getMonth() == 2 && D.getFullYear() > 1965) || // Международный женский день
          (i == 1 && D.getMonth() == 4 && D.getFullYear() > 1917) || // Праздник Весны и Труда
          (i == 9 && D.getMonth() == 4 && D.getFullYear() > 1964) || // День Победы
          (i == 12 && D.getMonth() == 5 && D.getFullYear() > 1990) || // День России (декларации о государственном суверенитете Российской Федерации ознаменовала окончательный Распад СССР)
          (i == 7 && D.getMonth() == 10 && (D.getFullYear() > 1926 && D.getFullYear() < 2005)) || // Октябрьская революция 1917 года
          (i == 8 && D.getMonth() == 10 && (D.getFullYear() > 1926 && D.getFullYear() < 1992)) || // Октябрьская революция 1917 года
          (i == 4 && D.getMonth() == 10 && D.getFullYear() > 2004) // День народного единства, который заменил Октябрьскую революцию 1917 года
         ) {
        calendar += '<td class="holiday">' + i;
      }else{
        calendar += '<td>' + i;
      }
    }
    if (new Date(D.getFullYear(),D.getMonth(),i).getDay() == 0) {
      calendar += '<tr>';
    }
  }
  for(var  i = DNlast; i < 7; i++) calendar += '<td>&nbsp;';
  document.querySelector('#'+id+' tbody').innerHTML = calendar;
  g.value = D.getFullYear();
  m.selected = true;
  if (document.querySelectorAll('#'+id+' tbody tr').length < 6) {
      document.querySelector('#'+id+' tbody').innerHTML += '<tr><td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;';
  }
  document.querySelector('#'+id+' option[value="' + new Date().getMonth() + '"]').style.color = 'rgb(220, 0, 0)'; // в выпадающем списке выделен текущий месяц
  }
  Calendar3("calendar3",new Date().getFullYear(),new Date().getMonth());
  document.querySelector('#calendar3').onchange = function Kalendar3() {
    Calendar3("calendar3",document.querySelector('#calendar3 input').value,parseFloat(document.querySelector('#calendar3 select').options[document.querySelector('#calendar3 select').selectedIndex].value));
  }