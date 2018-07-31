function previewFile() {
  var preview = document.querySelector('#img');
  var file    = document.querySelector('#fileinput').files[0];
  var reader  = new FileReader();

  reader.onloadend = function () {
    preview.src = reader.result;
  }

  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = "";
  }
}

function previewFile2() {
  var preview = document.querySelector('#img2');
  var file    = document.querySelector('#fileinput2').files[0];
  var reader  = new FileReader();

  reader.onloadend = function () {
    preview.src = reader.result;
  }

  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = "";
  }
}

document.getElementById("clear").addEventListener("click", function () {
  document.getElementById("fileinput").value = "";
  previewFile();
}, false);

document.getElementById("clear2").addEventListener("click", function () {
  document.getElementById("fileinput2").value = "";
  previewFile2();
}, false);

