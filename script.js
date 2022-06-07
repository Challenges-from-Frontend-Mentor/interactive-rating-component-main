const rateCard = document.getElementById('rate-card');
const thankYouCard = document.getElementById('thank-you-card');
const rateButtons = [
  ...document.getElementsByClassName('rate-card__rate-button'),
];
const selectedValueDisplay = document.getElementById('selectedValue');
let rateSelected = 0;

function turnThanksCardVisible() {
  rateCard.style.display = 'none';
  thankYouCard.style.display = 'flex';
}

function turnRateButtonActive(button) {
  turnRateButtonActiveOff();
  if (!button.className.includes('active')) {
    button.className += ' rate-card__rate-button--active';
  }
}

function getRateButtonActive() {
  return document.getElementsByClassName('rate-card__rate-button--active');
}

function turnRateButtonActiveOff() {
  const activeButton = [...getRateButtonActive()];
  if (activeButton.length === 1) {
    activeButton[0].className = 'rate-card__rate-button';
  }
}

function submit() {
  selectedValueDisplay.innerText = rateSelected;
  turnThanksCardVisible();
}

function main() {
  rateButtons.forEach((button) => {
    button.addEventListener('click', () => {
      rateSelected = button.textContent;
      turnRateButtonActive(button);
    });
  });
}

main();
