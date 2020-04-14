const icon_button = document.querySelectorAll('.icon_box');
console.log(icon_button);

icon_button.forEach(function (icon) {
  icon.addEventListener('mouseover', function () {
    icon_button.forEach(function (icon) {
      icon.nextElementSibling.classList.remove('active');
    })
    icon.nextElementSibling.classList.add('active');
    console.log(icon.nextElementSibling);

  })
})