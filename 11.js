document.addEventListener('DOMContentLoaded', function () {
  const btnSelect = document.querySelector('.btn-select');
  const listItems = document.querySelectorAll('.list-member ');

  btnSelect.addEventListener('click', function () {
    if (btnSelect.classList.contains('on')) {
      btnSelect.classList.remove('on');
    } else {
      btnSelect.classList.add('on');
    }
  });

  listItems.forEach((el) => {
    console.log(el);
    el.addEventListener('click', (event) => {
      console.log(event.target.textContent);
      let resultText = event.target.textContent;
      btnSelect.textContent = resultText;
    });
  });
});
