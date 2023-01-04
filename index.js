// Dropdown

const dropdownButtons = document.querySelectorAll('.cards button');

for (const indexClicked in dropdownButtons) {
  const button = dropdownButtons[indexClicked];

  function handleClick() {
    for (const i in dropdownButtons) {
      const button = dropdownButtons[i];

      const img = button.firstElementChild;

      if (i === indexClicked) {
        img.src = 'icones/icon-arrow-up.svg';

        button.classList.add('active');
      } else {
        img.src = 'icones/icon-arrow-down.svg';

        button.classList.remove('active');
      }
    }
  }

  button.addEventListener('click', handleClick);
}
