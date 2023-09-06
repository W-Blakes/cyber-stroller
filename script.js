// Navigation //
// const navBtn = document.getElementById('nav-btn');
// const menu = document.querySelectorAll('.main ul li');
// const buildBtn = document.getElementById('build');
// const quickLinks = document.querySelectorAll('.quick-nav div');
// const form = document.querySelector('form');

// App Loader //
const loadEl = document.getElementById('loader');

const menuBtn = document.getElementById('menu');
const closeNav_btn = document.getElementById('close-nav');
const quickNav = document.getElementById('quick-nav');
const social_links = document.querySelectorAll('.links');

// Pages //
const homePage = document.querySelector('.hero');
const orderPage = document.querySelector('.hero-order');
const buildPage = document.querySelector('.hero-build');

// Page Sections //
const info_section = document.getElementById('info');
const gallery_info = document.getElementById('gallery-info');
const galleryPics = document.querySelectorAll('.utility-pic');
const galleryBtn = document.querySelectorAll('.utility-btn');
const buildTitle = document.querySelector('.build-title');
const builderEl = document.getElementById('builder');
const footerEl = document.getElementById('footer');

// Build Options //
const lightEl = document.getElementById('light-item');
const paint_options = document.querySelectorAll('.paint-options input');
const paintEl = document.getElementById('refinish-item');
const color_options = document.querySelectorAll('.color-options input');
const colorEl = document.getElementById('paint-item');
const wheel_options = document.querySelectorAll('.wheel-options input');
const wheelEl = document.getElementById('wheels-item');
const canvas_options = document.querySelectorAll('.canvas-options input');
const canvasEl = document.getElementById('canvas-item');
const seat_options = document.querySelectorAll('.seats-options input');
const seatEl = document.getElementById('seats-item');
const weapons_options = document.querySelectorAll('.weapons-options input');
const weaponsEl = document.getElementById('weapons-item');
const updateMsg = document.getElementById('update-success');
const orderMsg = document.getElementById('order-error');

// Build Section //
const inputs = document.querySelectorAll('form input');
const formBg_target = document.getElementById('form-bg');
const options_container = document.getElementById('options');
const openOptions_btn = document.getElementById('open');
const closeOptions_btn = document.getElementById('close-options');
const option_tabs = document.querySelectorAll('.options p');
const zoom_btn = document.getElementById('zoom');
const save_btn = document.getElementById('save');

utility_info = [
  {
    title: 'Flexible Travel',
    text: 'Travel from point A to B in the cyber stroller or car seat. Our multi-functional travel system allows a more optimal and safe choice for any type of journey ahead.',
  },
  {
    title: 'Beacon of Light',
    text: 'Cut through the dark fog of mediocre compromises with the sharpe edge of cold-rolled steel and laser crisp LED projector technology. Only found and the one of kind Tesla Cyber Stroller® ',
  },
  {
    title: 'Affluent and Affordable',
    text: 'The perfect marriage of the latest techincal automotive marvels and 5 star luxury amenities at your finger tips. Stroll the neighborhood in a stylish bullet proof feat of modern ingenuity ',
  },
  {
    title: 'Conquer The World',
    text: 'Build your very own custom Cyber Stroller and tackle any climate or terrain in your path. From luxury leisure to aggressive off-road capabilities, no route is out of reach.',
  },
];

////                  ////
////   STORE BUILD    ////
////                  ////

userName = [];
userPaintType = [];
userColorType = [];
userWheelType = [];
userCanvasType = [];
userSeatType = [];
userWeaponType = [];

let cyberBuildData = JSON.parse(localStorage.getItem('BuildSheet'));
let paint = JSON.parse(localStorage.getItem('paint'));
let color = JSON.parse(localStorage.getItem('color'));
let wheel = JSON.parse(localStorage.getItem('wheel'));
let canvas = JSON.parse(localStorage.getItem('canvas'));
let seat = JSON.parse(localStorage.getItem('seat'));
let weapon = JSON.parse(localStorage.getItem('weapons'));
let isNewuser = JSON.parse(localStorage.getItem('NewUser'));
////    Update Build    ////
const loadCSBuildSheet = function () {
  paintEl.style = `background-image: ${paint}`;
  colorEl.style = `background-image: ${color}`;
  wheelEl.style = `background-image: ${wheel}`;
  canvasEl.style = `background-image: ${canvas}`;
  seatEl.style = `background-image: ${seat}`;
  weaponsEl.style = `background-image: ${weapon}`;
};

if (buildPage) {
  loadCSBuildSheet();
  console.log('lets build');
}

isDesktop = false;
isMobile = false;
navOpen = false;

function checkMobile() {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    isMobile = true;
    closeNav();
  } else {
    isDesktop = true;
    navOpen = true;
    showNav();

    return;
  }
}

////                  ////
////    LOAD PAGE     ////
////                  ////

function loadPage() {
  setTimeout(() => {
    loadEl.classList.toggle('loaded');
  }, 2000);

  if (homePage) {
    stickyMenu();
  }
}

// Sticky Nav Toggle //
function stickyMenu() {
  window.addEventListener('scroll', () => {
    if (window.scrollY >= window.innerHeight - info_section.clientHeight) {
      menuBtn.classList.add('sticky');
    } else {
      menuBtn.classList.remove('sticky');
    }
  });
}

// Play Utility Gallery //

function loadUtilityGallery() {
  i = 0;
  startGallery();
  function startGallery() {
    galleryInterval = setInterval(() => playGallery(), 5500);
  }
  function playGallery() {
    if (i > 3) {
      i = 0;
    }
    renderUtilityText(i);

    galleryPics.forEach((pic) => pic.classList.remove('active'));
    galleryPics[i].classList.add('active');
    galleryBtn.forEach((btn) => btn.classList.remove('active'));
    galleryBtn[i].classList.add('active');
    i++;
  }
  function stopGallery() {
    clearInterval(galleryInterval);
  }

  for (let i = 0; i < galleryBtn.length; i++) {
    galleryBtn[i].addEventListener('click', () => {});
  }

  galleryBtn.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
      stopGallery();
      index < 3 ? (i = index) : (i = 0);
      startGallery();
      galleryBtn.forEach((btn) => {
        btn.classList.remove('active');
      });
      e.target.classList.add('active');
      galleryPics.forEach((pic) => pic.classList.remove('active'));
      galleryPics[index].classList.add('active');
      renderUtilityText(index);
    });
  });

  function renderUtilityText(idx) {
    gallery_info.innerHTML = `
    <h4 class="utility-title">${utility_info[idx].title}</h4>
    <p class="info utility-text">
    ${utility_info[idx].text}
    </p>
    `;
    if (idx > 0) {
      gallery_info.classList.remove('active');
      setTimeout(() => gallery_info.classList.add('active'), 50);
    } else return;
  }
}

////           ////
//// MENU BTN  ////
////           ////

menuBtn.addEventListener('click', () => {
  quickNav.classList.toggle('hide');
  if (buildPage) {
    buildPage.style = `pointer-events:none;`;
  }
  if (homePage) {
    homePage.style = `pointer-events:none;`;
  }
  if (orderPage) {
    orderPage.style = `pointer-events:none;`;
  }
});

closeNav_btn.addEventListener('click', () => {
  quickNav.classList.toggle('hide');
  if (buildPage) {
    buildPage.style = `pointer-events:all;`;
  }
  if (homePage) {
    homePage.style = `pointer-events:all;`;
  }
  if (orderPage) {
    orderPage.style = `pointer-events:all;`;
  }
});

function printType() {
  console.log(
    userPaintType,
    userColorType,
    userCanvasType,
    userSeatType,
    userWheelType,
    userWeaponType
  );
}
////             ////
//// BUILD PAGE  ////
////             ////
console.log(isNewuser);
function buildStroller() {
  ///// Warning Message ////
  if (isNewuser !== false) {
    orderMsg.classList.add('update');
    console.log('show user error');
  }
  orderMsg.addEventListener('click', () => {
    orderMsg.classList.remove('update');
    console.log('No msg');
  });

  ////    Store Build    ////

  const updateBuild = () => {
    if (cyberBuildData == null) {
      return;
    } else {
      if (paint == null) {
        paintEl.style = `background-image: ${paint}`;
      }
      if (color == null) {
        colorEl.style = `background-image: ${color}`;
      }
      if (wheel == null) {
        wheelEl.style = `background-image: ${wheel}`;
      }
      if (canvas == null) {
        canvasEl.style = `background-image: ${canvas}`;
      }
      if (seat == null) {
        seatEl.style = `background-image: ${seat}`;
      }
      if (weapon == null) {
        weaponsEl.style = `background-image: ${weapon}`;
      }
    }

    // e.preventDefault();

    let buildData = {
      builder: userName,
      iD: Date.now(),
      paint: userPaintType,
      color: userColorType,
      wheel: userWheelType,
      canvas: userCanvasType,
      seat: userSeatType,
      weapon: userWeaponType,
    };
    localStorage.setItem('BuildSheet', JSON.stringify(buildData));
  };

  // Click Build Page BG Close Option Select
  window.addEventListener('click', (e) => {
    if (options_container.className == 'options close') {
      return;
    }
    if (
      e.target == buildPage ||
      e.target == buildPage.childNodes[5].childNodes[3] ||
      e.target == buildPage.childNodes[1] ||
      e.target == footerEl
    ) {
      buildTitle.classList.toggle('fade');
      options_container.classList.add('close');
    }
  });

  // Init Build Headlight Animation

  lightEl.addEventListener('click', () => {
    lightEl.classList.remove('glow');
    setTimeout(() => {
      lightEl.classList.add('glow');
    }, 1000);
  });

  // Click Form BG Close Options Select

  formBg_target.addEventListener('click', () => {
    option_tabs.forEach((btn) => {
      btn.classList.remove('active');
      btn.nextElementSibling.classList.remove('active');
    });
  });

  // Click Option--Btn Open Options Select

  openOptions_btn.addEventListener('click', () => {
    buildTitle.classList.toggle('fade');
    options_container.classList.toggle('close');
    setTimeout(() => {
      lightEl.classList.remove('glow');
    }, 1000);
  });

  closeOptions_btn.addEventListener('click', () => {
    buildTitle.classList.toggle('fade');
    option_tabs.forEach((btn) => {
      btn.classList.remove('active');
      btn.nextElementSibling.classList.remove('active');
    });
    setTimeout(() => {
      options_container.classList.toggle('close');
      lightEl.classList.add('glow');
    }, 500);
  });

  // Click Option--Btn Switch Options Select

  option_tabs.forEach((btn) => {
    btn.addEventListener('click', () => {
      option_tabs.forEach((btn) => {
        btn.classList.remove('active');
        btn.nextElementSibling.classList.remove('active');
      });

      btn.classList.toggle('active');
      btn.nextElementSibling.classList.toggle('active');
      target = btn;
    });
  });

  // Zoom Build Image

  function zoomImage() {
    if (zoom_btn !== null) {
      zoom_btn.addEventListener('click', () => {
        builderEl.classList.toggle('zoom');
        if (zoom_btn.innerText == 'zoom_in') {
          zoom_btn.innerHTML = 'zoom_out';
        } else if (zoom_btn.innerText == 'zoom_out') {
          zoom_btn.innerHTML = 'zoom_in';
        }
      });
    }
  }
  zoomImage();

  // Clear Options Input

  function deslesect() {
    inputs.forEach((input) => (input.checked = false));
  }
  deslesect();

  // Paint-Type Build Image

  paint_options.forEach((options) =>
    options.addEventListener('click', (e) => {
      url = '/build/';
      format = '.png';
      paintEl.style = `background-image: url('${url}${e.target.value}${format}')`;
      userPaintType.push(paintEl.style.backgroundImage);
      localStorage.setItem(
        'paint',
        JSON.stringify(paintEl.style.backgroundImage)
      );
      printType();
    })
  );

  // Paint-Color Build Image

  color_options.forEach((options) =>
    options.addEventListener('click', (e) => {
      url = '/build/Paint/';
      format = '0001.png';
      colorEl.style = `background-image: url('${url}${e.target.value}${format}')`;
      userColorType.push(colorEl.style.backgroundImage);
      localStorage.setItem(
        'color',
        JSON.stringify(colorEl.style.backgroundImage)
      );
      printType();
    })
  );

  // Wheel Build Image

  wheel_options.forEach((options) =>
    options.addEventListener('click', (e) => {
      url = '/build/Wheels/';
      format = '0001.png';
      wheelEl.style = `background-image: url('${url}${e.target.value}${format}')`;
      userWheelType.push(wheelEl.style.backgroundImage);
      localStorage.setItem(
        'wheel',
        JSON.stringify(wheelEl.style.backgroundImage)
      );
      printType();
    })
  );

  // Canvas Build Image

  canvas_options.forEach((options) =>
    options.addEventListener('click', (e) => {
      url = '/build/Canvas/';
      format = '0001.png';
      canvasEl.style = `background-image: url('${url}${e.target.value}${format}')`;
      userCanvasType.push(canvasEl.style.backgroundImage);
      localStorage.setItem(
        'canvas',
        JSON.stringify(canvasEl.style.backgroundImage)
      );
      console.log(userCanvasType);
      printType();
    })
  );

  // Seat Build Image

  seat_options.forEach((options) =>
    options.addEventListener('click', (e) => {
      url = '/build/Seats/';
      format = '0001.png';
      seatEl.style = `background-image: url('${url}${e.target.value}${format}')`;
      userSeatType.push(seatEl.style.backgroundImage);
      localStorage.setItem(
        'seat',
        JSON.stringify(seatEl.style.backgroundImage)
      );
      printType();
    })
  );

  // Weapon Build Image

  weapons_options.forEach((options) =>
    options.addEventListener('click', (e) => {
      url = '/build/Weapons/';
      format = '0001.png';
      weaponsEl.style = `background-image: url('${url}${e.target.value}${format}')`;
      userWeaponType.push(weaponsEl.style.backgroundImage);
      localStorage.setItem(
        'weapons',
        JSON.stringify(weaponsEl.style.backgroundImage)
      );
      printType();
    })
  );

  // Build-Success Message //

  save_btn.addEventListener('click', () => {
    localStorage.setItem('NewUser', JSON.stringify(false));
    updateBuild();
    option_tabs.forEach((btn) => {
      updateMsg.classList.add('update');
      setTimeout(() => {
        updateMsg.classList.remove('update');
      }, 1500);

      btn.classList.remove('active');
      btn.nextElementSibling.classList.remove('active');
      setTimeout(() => {
        buildTitle.classList.remove('fade');
        options_container.classList.add('close');
      }, 1500);
    });
  });
}

social_links.forEach((link) => {
  link.addEventListener('mouseenter', () => {
    link.classList.add('flip');
    setTimeout(() => link.classList.remove('flip'), 1500);
  });
});
