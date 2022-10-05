const ham = document.querySelector('.mobile-menu');
const navbar = document.querySelector('.nav-menu');
const x = document.querySelector('.slide-in');

x.addEventListener('click', () => {
  navbar.classList.toggle('active');
});
ham.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

document.querySelectorAll('.link').forEach((n) => n.addEventListener('click', () => {
  navbar.classList.remove('active');
}));

// featured speaker-section

const reset = () => {
  if (window.innerWidth > 768) {
    
  }
};

window.addEventListener('resize', reset);
const data = [
  {
    id: 1,
    picture: 'https://images.pexels.com/photos/7414946/pexels-photo-7414946.jpeg?auto=compress&cs=tinysrgb&w=600.png',
    about: 'speaker',
    speakerName: 'Rollins Camp',
    designation: 'Professor at STANFORD UNIVERSITY ',
    history:
      'Vast years of experience in REAL ESTATE, nationally and internationally',
  },
  {
    id: 2,
    picture: 'https://images.pexels.com/photos/8293643/pexels-photo-8293643.jpeg?auto=compress&cs=tinysrgb&w=600.png',
    about: 'featured speaker image',
    speakerName: 'Elliot Didan',
    designation: 'Real Estate specialist',
    history:
      'Vast years of experience in real estate, nationally and internationally ',
  },
  {
    id: 3,
    picture: 'https://images.pexels.com/photos/8482835/pexels-photo-8482835.jpeg?',
    about: 'featured speaker image',
    speakerName: 'Roger Twesigye',
    designation: 'CEO hollywood homes.',
    history:
      'Vast years of experience in interior, nationally and internationally',
  },
  {
    id: 4,
    picture: 'https://cdn.xxl.thumbs.canstockphoto.com/realtor-happy-realtor-woman-is-showing-home-for-sale-sign-and-keys-stock-photos_csp27243435.jpg',
    about: 'featured speaker image',
    speakerName: 'Nick',
    designation: 'Founder of building homes',
    history:
      'Vast years of experience in Real Estate, nationally and internationally',
  },
  {
    id: 5,
    picture: 'https://images.pexels.com/photos/864994/pexels-photo-864994.jpeg?auto=compress&cs=tinysrgb&w=600.png',
    about: 'featured speaker image',
    speakerName: 'Racheal Mbabazi',
    designation: 'CEO of lets Build.',
    history:
      'Six years of experience in interior design, nationally and internationally',
  },
  {
    id: 6,
    picture: 'https://images.pexels.com/photos/7642009/pexels-photo-7642009.jpeg?auto=compress&cs=tinysrgb&w=600.png',
    about: 'featured speaker image',
    speakerName: 'Phillip Musiime',
    designation: 'Founder of Tomorrow World',
    history:
      'Vast years of experience in real estate, nationally and internationally.',
  },
];

const speakerContainer = document.createElement('section');
speakerContainer.setAttribute('class', 'featured-speakers');
speakerContainer.setAttribute('id', 'speakers');
data.forEach((speakerPara) => {
  const speakerSection = document.createElement('div');
  speakerSection.setAttribute('class', 'speaker-section');
  speakerSection.setAttribute('id', 'each-speaker');

  const imageSection = document.createElement('div');
  imageSection.setAttribute('class', 'speaker-image-section');
  const image = document.createElement('img');
  image.setAttribute('class', 'speaker-image');
  image.setAttribute('src', speakerPara.picture);
  image.setAttribute('alt', speakerPara.about);

  imageSection.appendChild(image);
  speakerSection.appendChild(imageSection);

  const contentSection = document.createElement('div');
  contentSection.setAttribute('class', 'speaker-details');
  contentSection.setAttribute('id', 'about-speaker');

  const speakerName = document.createElement('h3');
  speakerName.setAttribute('class', 'speaker-name');
  speakerName.textContent = speakerPara.speakerName;
  contentSection.appendChild(speakerName);

  const speakerDesignation = document.createElement('p');
  speakerDesignation.setAttribute('class', 'speaker-designation');
  speakerDesignation.textContent = speakerPara.designation;
  contentSection.appendChild(speakerDesignation);

  const dotText = document.createElement('p');
  dotText.setAttribute('id', 'dots');
  dotText.textContent = '......';
  contentSection.appendChild(dotText);

  const speakerHistory = document.createElement('p');
  speakerHistory.setAttribute('class', 'speaker-history');
  speakerHistory.textContent = speakerPara.history;
  contentSection.appendChild(speakerHistory);

  speakerSection.appendChild(contentSection);
  speakerContainer.appendChild(speakerSection);
});

const body = document.querySelector('body');
const partners = document.getElementById('partners');
body.insertBefore(speakerContainer, partners);