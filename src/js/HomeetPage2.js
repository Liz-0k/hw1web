let whatYear = document.querySelector('#whatYear');
let bm = document.querySelector('#bm');
let miem = document.querySelector('#miem');
let ivt = document.querySelector('#ivt');

let descriptionStudy = document.querySelector('#descriptionStudy');
let descriptionStudy1 = document.querySelector('#descriptionStudy1');
let descriptionStudy2 = document.querySelector('#descriptionStudy2');
let descriptionStudy3 = document.querySelector('#descriptionStudy3');

whatYear.addEventListener('change', function () {
    const selectedRadio = whatYear.querySelector('input[name="whatYear"]:checked');
  
    if (selectedRadio.value == "1") {
        descriptionStudy.textContent = "1 курс";
    } else if (selectedRadio.value == "2") {
        descriptionStudy.textContent = "2 курс";
    } else if (selectedRadio.value == "3") {
        descriptionStudy.textContent = "3 курс";
    } else if (selectedRadio.value == "4") {
        descriptionStudy.textContent = "4 курс";
    } else if (selectedRadio.value == "5") {
        descriptionStudy.textContent = "5 курс";
    } else if (selectedRadio.value == "6") {
        descriptionStudy.textContent = "6 курс";
    } else if (selectedRadio.value == "graduate") {
        descriptionStudy.textContent = "Закончил";
    }
  });
bm.addEventListener('input', function() {
    descriptionStudy1.textContent = ' ' + bm.value;
});
miem.addEventListener('input', function() {
    descriptionStudy2.textContent = ' ' + miem.value;
});
ivt.addEventListener('input', function() {
    descriptionStudy3.textContent = ' ' + ivt.value;
});