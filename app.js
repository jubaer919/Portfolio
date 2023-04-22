const header = document.querySelector('.header');

const body = document.querySelector('body');
const grid = document.querySelector('.grid');

// Set the screen width threshold
const MOBILE_WIDTH = 768;

function disableScroll() {
  body.style.overflow = 'hidden';
}

function enableScroll() {
  body.style.overflow = 'auto';
}

// Function to add or remove the "mobile" class based on the screen width
function setMobileClass() {
  if (window.innerWidth < MOBILE_WIDTH) {
    header.addEventListener('click', () => {
      header.classList.toggle('active');
      // Toggle scroll
      if (header.classList.contains('active')) {
        disableScroll();
      } else {
        enableScroll();
      }
    });
  }
}
// Call the function on page load
setMobileClass();

// Call the function on window resize
window.addEventListener('resize', setMobileClass);

const cards = [
  {
    title: 'Tonic',
    imgMabail: './images/card-1.jpg',
    imgDesktop: './images/desktop-images/img-1.png',
    stack: 'conopy',
    tec: 'beck end dev',
    year: '2015',
    paragraph: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    'language-1': 'html',
    'language-2': 'css',
    'language-3': 'java-script',
    cta: 'See project',
  },
  {
    title: 'Multi-Post Stories',
    imgMabail: './images/card-2.jpg',
    imgDesktop: './images/desktop-images/img2.png',
    stack: 'FACEBOOK',
    tec: 'Full Stack Dev',
    year: '2015',
    paragraph: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    'language-1': 'html',
    'language-2': 'css',
    'language-3': 'java-script',
    cta: 'See project',
  },
  {
    title: 'Facebook 360',
    imgMabail: './images/card-3.jpg',
    imgDesktop: './images/desktop-images/img3.png',
    stack: 'FACEBOOK',
    tec: 'Full Stack Dev',
    year: '2015',
    paragraph: 'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    'language-1': 'html',
    'language-2': 'css',
    'language-3': 'java-script',
    cta: 'See project',
  },
  {
    title: 'Uber Navigation',
    imgMabail: './images/card-4.jpg',
    imgDesktop: './images/desktop-images/img4.png',
    stack: 'Uber',
    tec: 'Lead Developer',
    year: '2015',
    paragraph: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    'language-1': 'html',
    'language-2': 'css',
    'language-3': 'java-script',
    cta: 'See project',
  },
];

for (let i = 0; i < cards.length; i += 1) {
  const card = document.createElement('div');
  card.classList.add('card');
  if (i % 2 === 0) {
    card.classList.add('card-style-2');
  }

  const cardPictureDiv = document.createElement('div');
  cardPictureDiv.classList.add('card__picture');
  card.appendChild(cardPictureDiv);

  //  creating img element
  if (window.innerWidth > MOBILE_WIDTH) {
    const img = document.createElement('img');
    img.src = cards[i].imgDesktop;
    img.alt = cards[i].title;
    img.classList.add('card-img');
    cardPictureDiv.appendChild(img);
  } else {
    const img = document.createElement('img');
    img.src = cards[i].imgMabail;
    img.alt = cards[i].title;
    img.classList.add('card-img');
    cardPictureDiv.appendChild(img);
  }
  //  creating card-content element
  const cardContent = document.createElement('div');
  cardContent.classList.add('card__content');
  card.appendChild(cardContent);

  //  creating card-title element
  const cardTitle = document.createElement('h2');
  cardTitle.classList.add('card-title');
  cardTitle.innerText = cards[i].title;
  cardContent.appendChild(cardTitle);

  //  crating card-description element
  const cardDescription = document.createElement('div');
  cardDescription.classList.add('card-description');
  cardContent.appendChild(cardDescription);

  //  creating card-description__stack element
  const cardStack = document.createElement('span');
  cardStack.classList.add('card-description__stack');
  cardStack.innerText = cards[i].stack;
  cardDescription.appendChild(cardStack);

  //  creating card__gray-dot element
  const grayDot1 = document.createElement('div');
  grayDot1.classList.add('card__gray-dot');
  cardDescription.appendChild(grayDot1);

  //  crating card-description__tec element
  const cardTec = document.createElement('span');
  cardTec.classList.add('card-description__tec');
  cardTec.innerText = cards[i].tec;
  cardDescription.appendChild(cardTec);

  //  creating card__gray-dot element
  const grayDot2 = document.createElement('span');
  grayDot2.classList.add('card__gray-dot');
  cardDescription.appendChild(grayDot2);

  //  crating card-description__year element
  const cardYear = document.createElement('span');
  cardYear.classList.add('card-description__year');
  cardYear.innerText = cards[i].year;
  cardDescription.appendChild(cardYear);

  // creating card-paragraph element
  const cardParagraph = document.createElement('p');
  cardParagraph.classList.add('card-paragraph');
  cardParagraph.innerText = cards[i].paragraph;
  cardContent.appendChild(cardParagraph);

  //  creating card-language element
  const cardLanguage = document.createElement('ul');
  cardLanguage.classList.add('card-language');
  cardContent.appendChild(cardLanguage);

  //  creating btn-small element
  const btnSmall1 = document.createElement('li');
  btnSmall1.classList.add('btn-small');
  btnSmall1.innerText = cards[i]['language-1'];
  cardLanguage.appendChild(btnSmall1);

  //  creating btn-small element
  const btnSmall2 = document.createElement('li');
  btnSmall2.classList.add('btn-small');
  btnSmall2.innerText = cards[i]['language-2'];
  cardLanguage.appendChild(btnSmall2);

  //  creating btn-small element
  const btnSmall3 = document.createElement('li');
  btnSmall3.classList.add('btn-small');
  btnSmall3.innerText = cards[i]['language-3'];
  cardLanguage.appendChild(btnSmall3);

  //  creating card-cta element
  const cardCta = document.createElement('a');
  cardCta.classList.add('card-cta');
  cardCta.innerText = cards[i].cta;
  cardContent.appendChild(cardCta);

  cardCta.addEventListener('click', () => {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.style.display = 'block';
    body.appendChild(modal);

    // creating modal-content element
    const modelContent = document.createElement('div');
    modelContent.classList.add('modal-content');
    modal.appendChild(modelContent);

    // crating close element
    const close = document.createElement('span');
    close.classList.add('close');
    close.innerHTML = '&times;';
    close.addEventListener('click', () => {
      body.removeChild(modal);
    });
    modelContent.appendChild(close);

    // creating modalTitle element
    const modalTitle = document.createElement('h2');
    modalTitle.classList.add('modal-title');
    modalTitle.innerText = cards[i].title;
    modelContent.appendChild(modalTitle);

    // ok
    modelContent.appendChild(cardDescription);

    // creating a images
    if (window.innerWidth > MOBILE_WIDTH) {
      const img = document.createElement('img');
      img.src = cards[i].imgDesktop;
      img.alt = cards[i].title;
      img.style.marginBottom = '2rem';
      img.classList.add('modal-img');
      modelContent.appendChild(img);
    } else {
      const img = document.createElement('img');
      img.src = cards[i].imgMabail;
      img.alt = cards[i].title;
      img.style.marginBottom = '1rem';
      img.classList.add('modal-img');
      modelContent.appendChild(img);
    }

    // creating model-info element
    const modelInfo = document.createElement('div');
    modelInfo.classList.add('model-info');
    modelContent.appendChild(modelInfo);

    if (window.innerWidth > MOBILE_WIDTH) {
      modelInfo.style.display = 'flex';
    }

    // creating model-paragraph element
    const modelParagraph = document.createElement('p');
    modelParagraph.innerText = cards[i].paragraph;
    modelInfo.appendChild(modelParagraph);

    if (window.innerWidth > MOBILE_WIDTH) {
      modelParagraph.classList.add('model-paragraph');
    }

    // creating model language
    const modelinfoActive = document.createElement('div');
    modelInfo.appendChild(modelinfoActive);
    modelinfoActive.appendChild(cardLanguage);

    // model cta
    const cardCta1 = document.createElement('a');
    cardCta1.classList.add('card-cta');
    cardCta1.classList.add('model-cta');
    cardCta1.innerText = 'See live';
    modelinfoActive.appendChild(cardCta1);

    const cardCta2 = document.createElement('a');
    cardCta2.classList.add('card-cta');
    cardCta2.innerText = 'See source';
    modelinfoActive.appendChild(cardCta2);
  });

  grid.appendChild(card);
}

// the form validation
const form = document.querySelector('.contuct-form');
const submitBtn = document.querySelector('input[type="submit"]');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const emailInput = document.querySelector('input[type="email"]');
  const emailValue = emailInput.value;

  if (emailValue === emailValue.toLowerCase()) {
    form.submit();
  } else {
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'Email must be in lower case.';
    errorMessage.style.color = '#ffffff';
    errorMessage.style.marginBottom = '1rem';
    submitBtn.insertAdjacentElement('beforebegin', errorMessage);
  }
});

// store data in local and 
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contuct-form');
  const formInputs = form.querySelectorAll('input[type=text], input[type=email], textarea');
  const savedData = JSON.parse(localStorage.getItem('formData'));

  // If there is saved data, pre-fill the input fields
  if (savedData) {
    for (let input of formInputs) {
      const inputName = input.getAttribute('name');
      if (inputName in savedData) {
        input.value = savedData[inputName];
      }
    }
  }

  // Add event listeners to all input fields
  for (let input of formInputs) {
    input.addEventListener('input', function() {
      const formData = {};
      for (let input of formInputs) {
        const inputName = input.getAttribute('name');
        formData[inputName] = input.value;
      }
      localStorage.setItem('formData', JSON.stringify(formData));
    });
  }
});

