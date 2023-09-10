"use strict";

// For the menu and files
var c;
(() => {
  let fir = document.getElementsByClassName("opt")[0];

  let sec = document.getElementsByClassName("opt")[1];

  fir.classList.add("opt2");

  fir.onclick = () => {
    fir.classList.add("opt2");
    sec.classList.remove("opt2");

    let nav = document.getElementById("nav");
    let navFir = document.getElementById("menu");
    let navSec = document.getElementById("nav-list2");

    navFir.style.display = "block";
    navSec.style.display = "none";
  };

  document.getElementById("nav-list2").style.display = "none";

  sec.onclick = () => {
    sec.classList.add("opt2");
    fir.classList.remove("opt2");
    let nav = document.getElementById("nav");
    let navFir = document.getElementById("menu");
    let navSec = document.getElementById("nav-list2");

    navSec.style.display = "block";
    navFir.style.display = "none";
  };
})();

// For the random name

(() => {
  document.getElementById("profile-img").onclick = () => {
    document.getElementById("file").click();
  };

  let index = Math.floor(Math.random() * 26);
  let index1 = Math.floor(Math.random() * 26);
  let index2 = Math.floor(Math.random() * 26);
  let index3 = Math.floor(Math.random() * 26);
  let index4 = Math.floor(Math.random() * 26);
  let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let random = `${Math.floor(Math.random() * 100)}${alpha[index2]}${
    alpha[index]
  }${Math.floor(Math.random() * 1000)}${alpha[index3]}${
    alpha[index4]
  }${Math.floor(Math.random() * 1000)}${alpha[index1]}&nbsp;`;

  document.getElementById("num").innerHTML = random;
  document.getElementById("profile-name").title =
    "User" + random.replace(/&nbsp;/g, "");
})();

// For the side nav height

function navHeight() {
  let parentHeight = getComputedStyle(
    document.getElementById("nav")
  ).getPropertyValue("height");
  let par = parentHeight.replace("px", "");

  document.getElementById("nav-list").style.height = `${0.74 * par}px`;

  // For the main content

  // For the main body and animation

  let wid = getComputedStyle(document.getElementById("nav")).getPropertyValue(
    "width"
  );

  let widNo = Number(wid.toString().replace("px", ""));

  document.getElementById("main").style.marginLeft = `${widNo + 10}px`;
  document.getElementById("main").style.width = `${
    screen.availWidth - (widNo + 15)
  }px`;

  let point1 = getComputedStyle(
    document.getElementById("point")
  ).getPropertyValue("width");

  let point2 = getComputedStyle(
    document.getElementById("point")
  ).getPropertyValue("height");

  let hor = Number(point1.toString().replace("px", ""));

  let ver = Number(point2.toString().replace("px", ""));

  let param1 = screen.availWidth / 2 - hor;

  let param2 = screen.availHeight / 2 - ver / 2;

  document.getElementById("point").style.left = `${param1}px`;

  document.getElementById("point").style.right = `${param1}px`;

  // For the repoer from subject
}

//sign in

function closeIn() {
  document.getElementById("sign-in-page").style.display = "none";
}

function signIn() {
  document.getElementById("sign-in-page").style.display = "flex";

  var modal = document.getElementById("sign-in-page");

  document.documentElement.onclick = (event) => {
    if (event.target == modal) {
      document.getElementById("sign-in-page").style.display = "none";
    }
  };

  window.addEventListener("keypress", (event) => {
    if (event.which === 13 || event.keyCode == 13) {
      event.preventDefault();
    }
  });
}

function showPassword() {
  if (document.getElementById("password-input").type == "password") {
    document.getElementById("password-input").type = "text";
    document.getElementById("pass").style.display = "none";
    document.getElementById("pass3").style.display = "block";
  } else {
    document.getElementById("password-input").type = "password";

    document.getElementById("pass3").style.display = "none";
    document.getElementById("pass").style.display = "block";
  }
}

// sign up

function closeUp() {
  document.getElementById("sign-up-page").style.display = "none";
}

function signUp() {
  document.getElementById("sign-up-page").style.display = "block";

  var modal = document.getElementById("sign-up-page");

  document.documentElement.onclick = (event) => {
    if (event.target == modal) {
      document.getElementById("sign-up-page").style.display = "none";
    }
  };

  window.addEventListener("keypress", (event) => {
    if (event.which === 13 || event.keyCode == 13) {
      event.preventDefault();
    }
  });
}

function showPassword1() {
  if (document.getElementById("password-input1").type == "password") {
    document.getElementById("password-input1").type = "text";
    document.getElementById("pass1").style.display = "none";
    document.getElementById("pass2").style.display = "block";
  } else {
    document.getElementById("password-input1").type = "password";

    document.getElementById("pass2").style.display = "none";
    document.getElementById("pass1").style.display = "block";
  }
}

//Form Validation

//Password

function check() {
  let pass = document.getElementById("password-input1").value;

  /* for the length */

  if (pass.toString().length >= 10) {
    document.getElementById("len").checked = true;

    document.getElementById("len").style.pointerEvents = "none";
  } else {
    document.getElementById("len").checked = false;
  }

  /* for the letters */

  if (/[A-Z]/.test(pass.toString()) && /[a-z]/.test(pass.toString())) {
    document.getElementById("letter").checked = true;

    document.getElementById("letter").style.pointerEvents = "none";
  } else {
    document.getElementById("letter").checked = false;
  }

  /* for the digits */

  if (/\d/.test(pass.toString())) {
    document.getElementById("digit").checked = true;

    document.getElementById("digit").style.pointerEvents = "none";
  } else {
    document.getElementById("digit").checked = false;
  }

  /* for the special characters */

  if (/\W/.test(pass.toString()) || /\_/.test(pass.toString())) {
    document.getElementById("special").checked = true;

    document.getElementById("special").style.pointerEvents = "none";
  } else {
    document.getElementById("special").checked = false;
  }
}

// username

function userCheck(event) {
  let x = event.data;
  let param = /\W/;

  let username = document
    .getElementById("username1")
    .value.toString()
    .replace(/\W/gim, "");

  if (param.test(x)) {
    document.getElementById("username1").value = username;
  }
}

//country

(() => {
  let con = [
    { flag: "🇦🇨", country: "Ascension Island", code: "+" },

    { flag: "🇦🇩", country: "Andorra", code: "+376" },

    { flag: "🇦🇪", country: "United Arab Emirates", code: "+971" },

    { flag: "🇦🇫", country: "Afghanistan", code: "+93" },

    { flag: "🇦🇬", country: "Antigua & Barbuda", code: "+1" },

    { flag: "🇦🇮", country: "Anguilla", code: "+1" },

    { flag: "🇦🇱", country: "Albania", code: "+355" },

    { flag: "🇦🇲", country: "Armenia", code: "+374" },

    { flag: "🇦🇴", country: "Angola", code: "+244" },

    { flag: "🇦🇶", country: "Antarctica", code: "+" },

    { flag: "🇦🇷", country: "Argentina", code: "+54" },

    { flag: "🇦🇸", country: "American Samoa", code: "+1" },

    { flag: "🇦🇹", country: "Austria", code: "+43" },

    { flag: "🇦🇺", country: "Australia", code: "+61" },

    { flag: "🇦🇼", country: "Aruba", code: "+297" },

    { flag: "🇦🇽", country: "Åland Islands", code: "+" },

    { flag: "🇦🇿", country: "Azerbaijan", code: "+994" },

    { flag: "🇧🇦", country: "Bosnia & Herzegovina", code: "+387" },

    { flag: "🇧🇧", country: "Barbados", code: "+1" },

    { flag: "🇧🇩", country: "Bangladesh", code: "+880" },

    { flag: "🇧🇪", country: "Belgium", code: "+32" },

    { flag: "🇧🇫", country: "Burkina Faso", code: "+226" },

    { flag: "🇧🇬", country: "Bulgaria", code: "+359" },

    { flag: "🇧🇭", country: "Bahrain", code: "+973" },

    { flag: "🇧🇮", country: "Burundi", code: "+257" },

    { flag: "🇧🇯", country: "Benin", code: "+229" },

    { flag: "🇧🇱", country: "St. Barthélemy", code: "+" },

    { flag: "🇧🇲", country: "Bermuda", code: "+1" },

    { flag: "🇧🇳", country: "Brunei", code: "+673" },

    { flag: "🇧🇴", country: "Bolivia", code: "+591" },

    { flag: "🇧🇶", country: "Caribbean Netherlands", code: "+" },

    { flag: "🇧🇷", country: "Brazil", code: "+55" },

    { flag: "🇧🇸", country: "Bahamas", code: "+1" },

    { flag: "🇧🇹", country: "Bhutan", code: "+975" },

    { flag: "🇧🇻", country: "Bouvet Island", code: "+" },

    { flag: "🇧🇼", country: "Botswana", code: "+267" },

    { flag: "🇧🇾", country: "Belarus", code: "+375" },

    { flag: "🇧🇿", country: "Belize", code: "+501" },

    { flag: "🇨🇦", country: "Canada", code: "+1" },

    { flag: "🇨🇨", country: "Cocos (Keeling) Islands", code: "+61" },

    { flag: "🇨🇩", country: "Congo - Kinshasa", code: "+243" },

    { flag: "🇨🇫", country: "Central African Republic", code: "+236" },

    { flag: "🇨🇬", country: "Congo - Brazzaville", code: "+242" },

    { flag: "🇨🇭", country: "Switzerland", code: "+41" },

    { flag: "🇨🇮", country: "Ivory Coast", code: "+225" },

    { flag: "🇨🇰", country: "Cook Islands", code: "+682" },

    { flag: "🇨🇱", country: "Chile", code: "+56" },

    { flag: "🇨🇲", country: "Cameroon", code: "+237" },

    { flag: "🇨🇳", country: "China", code: "+86" },

    { flag: "🇨🇴", country: "Colombia", code: "+57" },

    { flag: "🇨🇵", country: "Clipperton Island", code: "+" },

    { flag: "🇨🇷", country: "Costa Rica", code: "+506" },

    { flag: "🇨🇺", country: "Cuba", code: "+53" },

    { flag: "🇨🇻", country: "Cape Verde", code: "+238" },

    { flag: "🇨🇼", country: "Curaçao", code: "+" },

    { flag: "🇨🇽", country: "Christmas Island", code: "+61" },

    { flag: "🇨🇾", country: "Cyprus", code: "+357" },

    { flag: "🇨🇿", country: "Czech Republic", code: "+" },

    { flag: "🇩🇪", country: "Germany", code: "+49" },

    { flag: "🇩🇬", country: "Diego Garcia", code: "+" },

    { flag: "🇩🇯", country: "Djibouti", code: "+253" },

    { flag: "🇩🇰", country: "Denmark", code: "+45" },

    { flag: "🇩🇲", country: "Dominica", code: "+1" },

    { flag: "🇩🇴", country: "Dominican Republic", code: "+1" },

    { flag: "🇩🇿", country: "Algeria", code: "+213" },

    { flag: "🇪🇦", country: "Ceuta & Melilla", code: "+" },

    { flag: "🇪🇨", country: "Ecuador", code: "+593" },

    { flag: "🇪🇪", country: "Estonia", code: "+372" },

    { flag: "🇪🇬", country: "Egypt", code: "+20" },

    { flag: "🇪🇭", country: "Western Sahara", code: "+212" },

    { flag: "🇪🇷", country: "Eritrea", code: "+291" },

    { flag: "🇪🇸", country: "Spain", code: "+34" },

    { flag: "🇪🇹", country: "Ethiopia", code: "+251" },

    { flag: "🇪🇺", country: "European Union", code: "+" },

    { flag: "🇫🇮", country: "Finland", code: "+358" },

    { flag: "🇫🇯", country: "Fiji", code: "+679" },

    { flag: "🇫🇰", country: "Falkland Islands", code: "+500" },

    { flag: "🇫🇲", country: "Micronesia", code: "+691" },

    { flag: "🇫🇴", country: "Faroe Islands", code: "+298" },

    { flag: "🇫🇷", country: "France", code: "+33" },

    { flag: "🇬🇦", country: "Gabon", code: "+241" },

    { flag: "🇬🇧", country: "United Kingdom", code: "+44" },

    { flag: "🇬🇩", country: "Grenada", code: "+1" },

    { flag: "🇬🇪", country: "Georgia", code: "+995" },

    { flag: "🇬🇫", country: "French Guiana", code: "+594" },

    { flag: "🇬🇬", country: "Guernsey", code: "+" },

    { flag: "🇬🇭", country: "Ghana", code: "+233" },

    { flag: "🇬🇮", country: "Gibraltar", code: "+350" },

    { flag: "🇬🇱", country: "Greenland", code: "+299" },

    { flag: "🇬🇲", country: "Gambia", code: "+220" },

    { flag: "🇬🇳", country: "Guinea", code: "+224" },

    { flag: "🇬🇵", country: "Guadeloupe", code: "+590" },

    { flag: "🇬🇶", country: "Equatorial Guinea", code: "+240" },

    { flag: "🇬🇷", country: "Greece", code: "+30" },

    {
      flag: "🇬🇸",
      country: "South Georgia & South Sandwich Islands",
      code: "+",
    },

    { flag: "🇬🇹", country: "Guatemala", code: "+502" },

    { flag: "🇬🇺", country: "Guam", code: "+1" },

    { flag: "🇬🇼", country: "Guinea-Bissau", code: "+245" },

    { flag: "🇬🇾", country: "Guyana", code: "+592" },

    { flag: "🇭🇰", country: "Hong Kong", code: "+852" },

    { flag: "🇭🇲", country: "Heard & McDonald Islands", code: "+" },

    { flag: "🇭🇳", country: "Honduras", code: "+504" },

    { flag: "🇭🇷", country: "Croatia", code: "+385" },

    { flag: "🇭🇹", country: "Haiti", code: "+509" },

    { flag: "🇭🇺", country: "Hungary", code: "+36" },

    { flag: "🇮🇨", country: "Canary Islands", code: "+" },

    { flag: "🇮🇩", country: "Indonesia", code: "+62" },

    { flag: "🇮🇪", country: "Ireland", code: "+353" },

    { flag: "🇮🇱", country: "Israel", code: "+972" },

    { flag: "🇮🇲", country: "Isle of Man", code: "+" },

    { flag: "🇮🇳", country: "India", code: "+91" },

    { flag: "🇮🇴", country: "British Indian Ocean Territory", code: "+" },

    { flag: "🇮🇶", country: "Iraq", code: "+964" },

    { flag: "🇮🇷", country: "Iran", code: "+98" },

    { flag: "🇮🇸", country: "Iceland", code: "+354" },

    { flag: "🇮🇹", country: "Italy", code: "+39" },

    { flag: "🇯🇪", country: "Jersey", code: "+" },

    { flag: "🇯🇲", country: "Jamaica", code: "+1" },

    { flag: "🇯🇴", country: "Jordan", code: "+962" },

    { flag: "🇯🇵", country: "Japan", code: "+81" },

    { flag: "🇰🇪", country: "Kenya", code: "+254" },

    { flag: "🇰🇬", country: "Kyrgyzstan", code: "+966" },

    { flag: "🇰🇭", country: "Cambodia", code: "+855" },

    { flag: "🇰🇮", country: "Kiribati", code: "+686" },

    { flag: "🇰🇲", country: "Comoros", code: "+269" },

    { flag: "🇰🇳", country: "St. Kitts & Nevis", code: "+1" },

    { flag: "🇰🇵", country: "North Korea", code: "+850" },

    { flag: "🇰🇷", country: "South Korea", code: "+82" },

    { flag: "🇰🇼", country: "Kuwait", code: "+965" },

    { flag: "🇰🇾", country: "Cayman Islands", code: "+1" },

    { flag: "🇰🇿", country: "Kazakhstan", code: "+7" },

    { flag: "🇱🇦", country: "Laos", code: "+856" },

    { flag: "🇱🇧", country: "Lebanon", code: "+961" },

    { flag: "🇱🇨", country: "St. Lucia", code: "+1" },

    { flag: "🇱🇮", country: "Liechtenstein", code: "+423" },

    { flag: "🇱🇰", country: "Sri Lanka", code: "+94" },

    { flag: "🇱🇷", country: "Liberia", code: "+231" },

    { flag: "🇱🇸", country: "Lesotho", code: "+266" },

    { flag: "🇱🇹", country: "Lithuania", code: "+370" },

    { flag: "🇱🇺", country: "Luxembourg", code: "+352" },

    { flag: "🇱🇻", country: "Latvia", code: "+371" },

    { flag: "🇱🇾", country: "Libya", code: "+218" },

    { flag: "🇲🇦", country: "Morocco", code: "+212" },

    { flag: "🇲🇨", country: "Monaco", code: "+377" },

    { flag: "🇲🇩", country: "Moldova", code: "+373" },

    { flag: "🇲🇪", country: "Montenegro", code: "+382" },

    { flag: "🇲🇫", country: "St. Martin", code: "+" },

    { flag: "🇲🇬", country: "Madagascar", code: "+261" },

    { flag: "🇲🇭", country: "Marshall Islands", code: "+692" },

    { flag: "🇲🇰", country: "North Macedonia", code: "+" },

    { flag: "🇲🇱", country: "Mali", code: "+223" },

    { flag: "🇲🇲", country: "Myanmar", code: "+95" },

    { flag: "🇲🇳", country: "Mongolia", code: "+976" },

    { flag: "🇲🇴", country: "Macao Sar China", code: "+853" },

    { flag: "🇲🇵", country: "Northern Mariana Islands", code: "+1" },

    { flag: "🇲🇶", country: "Martinique", code: "+596" },

    { flag: "🇲🇷", country: "Mauritania", code: "+222" },

    { flag: "🇲🇸", country: "Montserrat", code: "+1" },

    { flag: "🇲🇹", country: "Malta", code: "+356" },

    { flag: "🇲🇺", country: "Mauritius", code: "+230" },

    { flag: "🇲🇻", country: "Maldives", code: "+960" },

    { flag: "🇲🇼", country: "Malawi", code: "+265" },

    { flag: "🇲🇽", country: "Mexico", code: "+52" },

    { flag: "🇲🇾", country: "Malaysia", code: "+60" },

    { flag: "🇲🇿", country: "Mozambique", code: "+258" },

    { flag: "🇳🇦", country: "Namibia", code: "+264" },

    { flag: "🇳🇨", country: "New Caledonia", code: "+687" },

    { flag: "🇳🇪", country: "Niger", code: "+227" },

    { flag: "🇳🇫", country: "Norfolk Island", code: "+672" },

    { flag: "🇳🇬", country: "Nigeria", code: "+234" },

    { flag: "🇳🇮", country: "Nicaragua", code: "+505" },

    { flag: "🇳🇱", country: "Netherlands", code: "+31" },

    { flag: "🇳🇴", country: "Norway", code: "+47" },

    { flag: "🇳🇵", country: "Nepal", code: "+977" },

    { flag: "🇳🇷", country: "Nauru", code: "+674" },

    { flag: "🇳🇺", country: "Niue", code: "+683" },

    { flag: "🇳🇿", country: "New Zealand", code: "+64" },

    { flag: "🇴🇲", country: "Oman", code: "+968" },

    { flag: "🇵🇦", country: "Panama", code: "+507" },

    { flag: "🇵🇪", country: "Peru", code: "+51" },

    { flag: "🇵🇫", country: "French Polynesia", code: "+689" },

    { flag: "🇵🇬", country: "Papua New Guinea", code: "+675" },

    { flag: "🇵🇭", country: "Philippines", code: "+63" },

    { flag: "🇵🇰", country: "Pakistan", code: "+92" },

    { flag: "🇵🇱", country: "Poland", code: "+48" },

    { flag: "🇵🇲", country: "St. Pierre & Miquelon", code: "+508" },

    { flag: "🇵🇳", country: "Pitcairn Islands", code: "+870" },

    { flag: "🇵🇷", country: "Puerto Rico", code: "+1" },

    { flag: "🇵🇸", country: "Palestinian Territories", code: "+970" },

    { flag: "🇵🇹", country: "Portugal", code: "+351" },

    { flag: "🇵🇼", country: "Palau", code: "+680" },

    { flag: "🇵🇾", country: "Paraguay", code: "+595" },

    { flag: "🇶🇦", country: "Qatar", code: "+974" },

    { flag: "🇷🇪", country: "Réunion", code: "+262" },

    { flag: "🇷🇴", country: "Romania", code: "+40" },

    { flag: "🇷🇸", country: "Serbia", code: "+381" },

    { flag: "🇷🇺", country: "Russia", code: "+7" },

    { flag: "🇷🇼", country: "Rwanda", code: "+250" },

    { flag: "🇸🇦", country: "Saudi Arabia", code: "+966" },

    { flag: "🇸🇧", country: "Solomon Islands", code: "+677" },

    { flag: "🇸🇨", country: "Seychelles", code: "+248" },

    { flag: "🇸🇩", country: "Sudan", code: "+249" },

    { flag: "🇸🇪", country: "Sweden", code: "+46" },

    { flag: "🇸🇬", country: "Singapore", code: "+65" },

    { flag: "🇸🇭", country: "St. Helena", code: "+290" },

    { flag: "🇸🇮", country: "Slovenia", code: "+386" },

    { flag: "🇸🇯", country: "Svalbard & Jan Mayen", code: "+47" },

    { flag: "🇸🇰", country: "Slovakia", code: "+421" },

    { flag: "🇸🇱", country: "Sierra Leone", code: "+232" },

    { flag: "🇸🇲", country: "San Marino", code: "+378" },

    { flag: "🇸🇳", country: "Senegal", code: "+221" },

    { flag: "🇸🇴", country: "Somalia", code: "+252" },

    { flag: "🇸🇷", country: "Suriname", code: "+597" },

    { flag: "🇸🇸", country: "South Sudan", code: "+" },

    { flag: "🇸🇹", country: "São Tomé & Príncipe", code: "+239" },

    { flag: "🇸🇻", country: "El Salvador", code: "+503" },

    { flag: "🇸🇽", country: "Sint Maarten", code: "+" },

    { flag: "🇸🇾", country: "Syria", code: "+963" },

    { flag: "🇸🇿", country: "Eswatini", code: "+" },

    { flag: "🇹🇦", country: "Tristan Da Cunha", code: "+290" },

    { flag: "🇹🇨", country: "Turks & Caicos Islands", code: "+1" },

    { flag: "🇹🇩", country: "Chad", code: "+235" },

    { flag: "🇹🇫", country: "French Southern Territories", code: "+" },

    { flag: "🇹🇬", country: "Togo", code: "+228" },

    { flag: "🇹🇭", country: "Thailand", code: "+66" },

    { flag: "🇹🇯", country: "Tajikistan", code: "+992" },

    { flag: "🇹🇰", country: "Tokelau", code: "+690" },

    { flag: "🇹🇱", country: "Timor-Leste", code: "+670" },

    { flag: "🇹🇲", country: "Turkmenistan", code: "+993" },

    { flag: "🇹🇳", country: "Tunisia", code: "+216" },

    { flag: "🇹🇴", country: "Tonga", code: "+676" },

    { flag: "🇹🇷", country: "Turkey", code: "+90" },

    { flag: "🇹🇹", country: "Trinidad & Tobago", code: "+1" },

    { flag: "🇹🇻", country: "Tuvalu", code: "+688" },

    { flag: "🇹🇼", country: "Taiwan", code: "+886" },

    { flag: "🇹🇿", country: "Tanzania", code: "+255" },

    { flag: "🇺🇦", country: "Ukraine", code: "+380" },

    { flag: "🇺🇬", country: "Uganda", code: "+256" },

    { flag: "🇺🇲", country: "U.S. Outlying Islands", code: "+" },

    { flag: "🇺🇳", country: "United Nations", code: "+" },

    { flag: "🇺🇸", country: "United States", code: "+1" },

    { flag: "🇺🇾", country: "Uruguay", code: "+598" },

    { flag: "🇺🇿", country: "Uzbekistan", code: "+998" },

    { flag: "🇻🇦", country: "Vatican City", code: "+" },

    { flag: "🇻🇨", country: "St. Vincent & the Grenadines", code: "+1" },

    { flag: "🇻🇪", country: "Venezuela", code: "+58" },

    { flag: "🇻🇬", country: "British Virgin Islands", code: "+" },

    { flag: "🇻🇮", country: "U.S. Virgin Islands", code: "+" },

    { flag: "🇻🇳", country: "Vietnam", code: "+84" },

    { flag: "🇻🇺", country: "Vanuatu", code: "+678" },

    { flag: "🇼🇫", country: "Wallis & Futuna", code: "+681" },

    { flag: "🇼🇸", country: "Samoa", code: "+685" },

    { flag: "🇽🇰", country: "Kosovo", code: "+", code: "+" },

    { flag: "🇾🇪", country: "Yemen", code: "+967" },

    { flag: "🇾🇹", country: "Mayotte", code: "+262" },

    { flag: "🇿🇦", country: "South Africa", code: "+27" },

    { flag: "🇿🇲", country: "Zambia", code: "+260" },

    { flag: "🇿🇼", country: "Zimbabwe", code: "+263" },

    { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", country: "England", code: "+" },

    { flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", country: "Scotland", code: "+" },

    { flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", country: "Wales", code: "+" },
  ];

  let conSort = con.sort((x, y) => {
    let a = x.country.toUpperCase();

    let b = y.country.toUpperCase();

    return a == b ? 0 : a > b ? 1 : -1;
  });

  let sel = document.getElementById("sel");

  let conFlag = document.getElementById("col");

  for (let [index, { country, flag }] of conSort.entries()) {
    let opt = document.createElement("option");

    let opt1 = document.createElement("option");

    opt.value = country;

    opt.innerHTML = country;
    opt.id = country;

    sel.appendChild(opt);

    conFlag.src = flag;
  }
})();

// Mtaching the datalists

function match() {
  let con = [
    { flag: "🇦🇨", country: "Ascension Island", code: "+" },

    { flag: "🇦🇩", country: "Andorra", code: "+376" },

    { flag: "🇦🇪", country: "United Arab Emirates", code: "+971" },

    { flag: "🇦🇫", country: "Afghanistan", code: "+93" },

    { flag: "🇦🇬", country: "Antigua & Barbuda", code: "+1" },

    { flag: "🇦🇮", country: "Anguilla", code: "+1" },

    { flag: "🇦🇱", country: "Albania", code: "+355" },

    { flag: "🇦🇲", country: "Armenia", code: "+374" },

    { flag: "🇦🇴", country: "Angola", code: "+244" },

    { flag: "🇦🇶", country: "Antarctica", code: "+" },

    { flag: "🇦🇷", country: "Argentina", code: "+54" },

    { flag: "🇦🇸", country: "American Samoa", code: "+1" },

    { flag: "🇦🇹", country: "Austria", code: "+43" },

    { flag: "🇦🇺", country: "Australia", code: "+61" },

    { flag: "🇦🇼", country: "Aruba", code: "+297" },

    { flag: "🇦🇽", country: "Åland Islands", code: "+" },

    { flag: "🇦🇿", country: "Azerbaijan", code: "+994" },

    { flag: "🇧🇦", country: "Bosnia & Herzegovina", code: "+387" },

    { flag: "🇧🇧", country: "Barbados", code: "+1" },

    { flag: "🇧🇩", country: "Bangladesh", code: "+880" },

    { flag: "🇧🇪", country: "Belgium", code: "+32" },

    { flag: "🇧🇫", country: "Burkina Faso", code: "+226" },

    { flag: "🇧🇬", country: "Bulgaria", code: "+359" },

    { flag: "🇧🇭", country: "Bahrain", code: "+973" },

    { flag: "🇧🇮", country: "Burundi", code: "+257" },

    { flag: "🇧🇯", country: "Benin", code: "+229" },

    { flag: "🇧🇱", country: "St. Barthélemy", code: "+" },

    { flag: "🇧🇲", country: "Bermuda", code: "+1" },

    { flag: "🇧🇳", country: "Brunei", code: "+673" },

    { flag: "🇧🇴", country: "Bolivia", code: "+591" },

    { flag: "🇧🇶", country: "Caribbean Netherlands", code: "+" },

    { flag: "🇧🇷", country: "Brazil", code: "+55" },

    { flag: "🇧🇸", country: "Bahamas", code: "+1" },

    { flag: "🇧🇹", country: "Bhutan", code: "+975" },

    { flag: "🇧🇻", country: "Bouvet Island", code: "+" },

    { flag: "🇧🇼", country: "Botswana", code: "+267" },

    { flag: "🇧🇾", country: "Belarus", code: "+375" },

    { flag: "🇧🇿", country: "Belize", code: "+501" },

    { flag: "🇨🇦", country: "Canada", code: "+1" },

    { flag: "🇨🇨", country: "Cocos (Keeling) Islands", code: "+61" },

    { flag: "🇨🇩", country: "Congo - Kinshasa", code: "+243" },

    { flag: "🇨🇫", country: "Central African Republic", code: "+236" },

    { flag: "🇨🇬", country: "Congo - Brazzaville", code: "+242" },

    { flag: "🇨🇭", country: "Switzerland", code: "+41" },

    { flag: "🇨🇮", country: "Ivory Coast", code: "+225" },

    { flag: "🇨🇰", country: "Cook Islands", code: "+682" },

    { flag: "🇨🇱", country: "Chile", code: "+56" },

    { flag: "🇨🇲", country: "Cameroon", code: "+237" },

    { flag: "🇨🇳", country: "China", code: "+86" },

    { flag: "🇨🇴", country: "Colombia", code: "+57" },

    { flag: "🇨🇵", country: "Clipperton Island", code: "+" },

    { flag: "🇨🇷", country: "Costa Rica", code: "+506" },

    { flag: "🇨🇺", country: "Cuba", code: "+53" },

    { flag: "🇨🇻", country: "Cape Verde", code: "+238" },

    { flag: "🇨🇼", country: "Curaçao", code: "+" },

    { flag: "🇨🇽", country: "Christmas Island", code: "+61" },

    { flag: "🇨🇾", country: "Cyprus", code: "+357" },

    { flag: "🇨🇿", country: "Czech Republic", code: "+" },

    { flag: "🇩🇪", country: "Germany", code: "+49" },

    { flag: "🇩🇬", country: "Diego Garcia", code: "+" },

    { flag: "🇩🇯", country: "Djibouti", code: "+253" },

    { flag: "🇩🇰", country: "Denmark", code: "+45" },

    { flag: "🇩🇲", country: "Dominica", code: "+1" },

    { flag: "🇩🇴", country: "Dominican Republic", code: "+1" },

    { flag: "🇩🇿", country: "Algeria", code: "+213" },

    { flag: "🇪🇦", country: "Ceuta & Melilla", code: "+" },

    { flag: "🇪🇨", country: "Ecuador", code: "+593" },

    { flag: "🇪🇪", country: "Estonia", code: "+372" },

    { flag: "🇪🇬", country: "Egypt", code: "+20" },

    { flag: "🇪🇭", country: "Western Sahara", code: "+212" },

    { flag: "🇪🇷", country: "Eritrea", code: "+291" },

    { flag: "🇪🇸", country: "Spain", code: "+34" },

    { flag: "🇪🇹", country: "Ethiopia", code: "+251" },

    { flag: "🇪🇺", country: "European Union", code: "+" },

    { flag: "🇫🇮", country: "Finland", code: "+358" },

    { flag: "🇫🇯", country: "Fiji", code: "+679" },

    { flag: "🇫🇰", country: "Falkland Islands", code: "+500" },

    { flag: "🇫🇲", country: "Micronesia", code: "+691" },

    { flag: "🇫🇴", country: "Faroe Islands", code: "+298" },

    { flag: "🇫🇷", country: "France", code: "+33" },

    { flag: "🇬🇦", country: "Gabon", code: "+241" },

    { flag: "🇬🇧", country: "United Kingdom", code: "+44" },

    { flag: "🇬🇩", country: "Grenada", code: "+1" },

    { flag: "🇬🇪", country: "Georgia", code: "+995" },

    { flag: "🇬🇫", country: "French Guiana", code: "+594" },

    { flag: "🇬🇬", country: "Guernsey", code: "+" },

    { flag: "🇬🇭", country: "Ghana", code: "+233" },

    { flag: "🇬🇮", country: "Gibraltar", code: "+350" },

    { flag: "🇬🇱", country: "Greenland", code: "+299" },

    { flag: "🇬🇲", country: "Gambia", code: "+220" },

    { flag: "🇬🇳", country: "Guinea", code: "+224" },

    { flag: "🇬🇵", country: "Guadeloupe", code: "+590" },

    { flag: "🇬🇶", country: "Equatorial Guinea", code: "+240" },

    { flag: "🇬🇷", country: "Greece", code: "+30" },

    {
      flag: "🇬🇸",
      country: "South Georgia & South Sandwich Islands",
      code: "+",
    },

    { flag: "🇬🇹", country: "Guatemala", code: "+502" },

    { flag: "🇬🇺", country: "Guam", code: "+1" },

    { flag: "🇬🇼", country: "Guinea-Bissau", code: "+245" },

    { flag: "🇬🇾", country: "Guyana", code: "+592" },

    { flag: "🇭🇰", country: "Hong Kong", code: "+852" },

    { flag: "🇭🇲", country: "Heard & McDonald Islands", code: "+" },

    { flag: "🇭🇳", country: "Honduras", code: "+504" },

    { flag: "🇭🇷", country: "Croatia", code: "+385" },

    { flag: "🇭🇹", country: "Haiti", code: "+509" },

    { flag: "🇭🇺", country: "Hungary", code: "+36" },

    { flag: "🇮🇨", country: "Canary Islands", code: "+" },

    { flag: "🇮🇩", country: "Indonesia", code: "+62" },

    { flag: "🇮🇪", country: "Ireland", code: "+353" },

    { flag: "🇮🇱", country: "Israel", code: "+972" },

    { flag: "🇮🇲", country: "Isle of Man", code: "+" },

    { flag: "🇮🇳", country: "India", code: "+91" },

    { flag: "🇮🇴", country: "British Indian Ocean Territory", code: "+" },

    { flag: "🇮🇶", country: "Iraq", code: "+964" },

    { flag: "🇮🇷", country: "Iran", code: "+98" },

    { flag: "🇮🇸", country: "Iceland", code: "+354" },

    { flag: "🇮🇹", country: "Italy", code: "+39" },

    { flag: "🇯🇪", country: "Jersey", code: "+" },

    { flag: "🇯🇲", country: "Jamaica", code: "+1" },

    { flag: "🇯🇴", country: "Jordan", code: "+962" },

    { flag: "🇯🇵", country: "Japan", code: "+81" },

    { flag: "🇰🇪", country: "Kenya", code: "+254" },

    { flag: "🇰🇬", country: "Kyrgyzstan", code: "+966" },

    { flag: "🇰🇭", country: "Cambodia", code: "+855" },

    { flag: "🇰🇮", country: "Kiribati", code: "+686" },

    { flag: "🇰🇲", country: "Comoros", code: "+269" },

    { flag: "🇰🇳", country: "St. Kitts & Nevis", code: "+1" },

    { flag: "🇰🇵", country: "North Korea", code: "+850" },

    { flag: "🇰🇷", country: "South Korea", code: "+82" },

    { flag: "🇰🇼", country: "Kuwait", code: "+965" },

    { flag: "🇰🇾", country: "Cayman Islands", code: "+1" },

    { flag: "🇰🇿", country: "Kazakhstan", code: "+7" },

    { flag: "🇱🇦", country: "Laos", code: "+856" },

    { flag: "🇱🇧", country: "Lebanon", code: "+961" },

    { flag: "🇱🇨", country: "St. Lucia", code: "+1" },

    { flag: "🇱🇮", country: "Liechtenstein", code: "+423" },

    { flag: "🇱🇰", country: "Sri Lanka", code: "+94" },

    { flag: "🇱🇷", country: "Liberia", code: "+231" },

    { flag: "🇱🇸", country: "Lesotho", code: "+266" },

    { flag: "🇱🇹", country: "Lithuania", code: "+370" },

    { flag: "🇱🇺", country: "Luxembourg", code: "+352" },

    { flag: "🇱🇻", country: "Latvia", code: "+371" },

    { flag: "🇱🇾", country: "Libya", code: "+218" },

    { flag: "🇲🇦", country: "Morocco", code: "+212" },

    { flag: "🇲🇨", country: "Monaco", code: "+377" },

    { flag: "🇲🇩", country: "Moldova", code: "+373" },

    { flag: "🇲🇪", country: "Montenegro", code: "+382" },

    { flag: "🇲🇫", country: "St. Martin", code: "+" },

    { flag: "🇲🇬", country: "Madagascar", code: "+261" },

    { flag: "🇲🇭", country: "Marshall Islands", code: "+692" },

    { flag: "🇲🇰", country: "North Macedonia", code: "+" },

    { flag: "🇲🇱", country: "Mali", code: "+223" },

    { flag: "🇲🇲", country: "Myanmar", code: "+95" },

    { flag: "🇲🇳", country: "Mongolia", code: "+976" },

    { flag: "🇲🇴", country: "Macao Sar China", code: "+853" },

    { flag: "🇲🇵", country: "Northern Mariana Islands", code: "+1" },

    { flag: "🇲🇶", country: "Martinique", code: "+596" },

    { flag: "🇲🇷", country: "Mauritania", code: "+222" },

    { flag: "🇲🇸", country: "Montserrat", code: "+1" },

    { flag: "🇲🇹", country: "Malta", code: "+356" },

    { flag: "🇲🇺", country: "Mauritius", code: "+230" },

    { flag: "🇲🇻", country: "Maldives", code: "+960" },

    { flag: "🇲🇼", country: "Malawi", code: "+265" },

    { flag: "🇲🇽", country: "Mexico", code: "+52" },

    { flag: "🇲🇾", country: "Malaysia", code: "+60" },

    { flag: "🇲🇿", country: "Mozambique", code: "+258" },

    { flag: "🇳🇦", country: "Namibia", code: "+264" },

    { flag: "🇳🇨", country: "New Caledonia", code: "+687" },

    { flag: "🇳🇪", country: "Niger", code: "+227" },

    { flag: "🇳🇫", country: "Norfolk Island", code: "+672" },

    { flag: "🇳🇬", country: "Nigeria", code: "+234" },

    { flag: "🇳🇮", country: "Nicaragua", code: "+505" },

    { flag: "🇳🇱", country: "Netherlands", code: "+31" },

    { flag: "🇳🇴", country: "Norway", code: "+47" },

    { flag: "🇳🇵", country: "Nepal", code: "+977" },

    { flag: "🇳🇷", country: "Nauru", code: "+674" },

    { flag: "🇳🇺", country: "Niue", code: "+683" },

    { flag: "🇳🇿", country: "New Zealand", code: "+64" },

    { flag: "🇴🇲", country: "Oman", code: "+968" },

    { flag: "🇵🇦", country: "Panama", code: "+507" },

    { flag: "🇵🇪", country: "Peru", code: "+51" },

    { flag: "🇵🇫", country: "French Polynesia", code: "+689" },

    { flag: "🇵🇬", country: "Papua New Guinea", code: "+675" },

    { flag: "🇵🇭", country: "Philippines", code: "+63" },

    { flag: "🇵🇰", country: "Pakistan", code: "+92" },

    { flag: "🇵🇱", country: "Poland", code: "+48" },

    { flag: "🇵🇲", country: "St. Pierre & Miquelon", code: "+508" },

    { flag: "🇵🇳", country: "Pitcairn Islands", code: "+870" },

    { flag: "🇵🇷", country: "Puerto Rico", code: "+1" },

    { flag: "🇵🇸", country: "Palestinian Territories", code: "+970" },

    { flag: "🇵🇹", country: "Portugal", code: "+351" },

    { flag: "🇵🇼", country: "Palau", code: "+680" },

    { flag: "🇵🇾", country: "Paraguay", code: "+595" },

    { flag: "🇶🇦", country: "Qatar", code: "+974" },

    { flag: "🇷🇪", country: "Réunion", code: "+262" },

    { flag: "🇷🇴", country: "Romania", code: "+40" },

    { flag: "🇷🇸", country: "Serbia", code: "+381" },

    { flag: "🇷🇺", country: "Russia", code: "+7" },

    { flag: "🇷🇼", country: "Rwanda", code: "+250" },

    { flag: "🇸🇦", country: "Saudi Arabia", code: "+966" },

    { flag: "🇸🇧", country: "Solomon Islands", code: "+677" },

    { flag: "🇸🇨", country: "Seychelles", code: "+248" },

    { flag: "🇸🇩", country: "Sudan", code: "+249" },

    { flag: "🇸🇪", country: "Sweden", code: "+46" },

    { flag: "🇸🇬", country: "Singapore", code: "+65" },

    { flag: "🇸🇭", country: "St. Helena", code: "+290" },

    { flag: "🇸🇮", country: "Slovenia", code: "+386" },

    { flag: "🇸🇯", country: "Svalbard & Jan Mayen", code: "+47" },

    { flag: "🇸🇰", country: "Slovakia", code: "+421" },

    { flag: "🇸🇱", country: "Sierra Leone", code: "+232" },

    { flag: "🇸🇲", country: "San Marino", code: "+378" },

    { flag: "🇸🇳", country: "Senegal", code: "+221" },

    { flag: "🇸🇴", country: "Somalia", code: "+252" },

    { flag: "🇸🇷", country: "Suriname", code: "+597" },

    { flag: "🇸🇸", country: "South Sudan", code: "+" },

    { flag: "🇸🇹", country: "São Tomé & Príncipe", code: "+239" },

    { flag: "🇸🇻", country: "El Salvador", code: "+503" },

    { flag: "🇸🇽", country: "Sint Maarten", code: "+" },

    { flag: "🇸🇾", country: "Syria", code: "+963" },

    { flag: "🇸🇿", country: "Eswatini", code: "+" },

    { flag: "🇹🇦", country: "Tristan Da Cunha", code: "+290" },

    { flag: "🇹🇨", country: "Turks & Caicos Islands", code: "+1" },

    { flag: "🇹🇩", country: "Chad", code: "+235" },

    { flag: "🇹🇫", country: "French Southern Territories", code: "+" },

    { flag: "🇹🇬", country: "Togo", code: "+228" },

    { flag: "🇹🇭", country: "Thailand", code: "+66" },

    { flag: "🇹🇯", country: "Tajikistan", code: "+992" },

    { flag: "🇹🇰", country: "Tokelau", code: "+690" },

    { flag: "🇹🇱", country: "Timor-Leste", code: "+670" },

    { flag: "🇹🇲", country: "Turkmenistan", code: "+993" },

    { flag: "🇹🇳", country: "Tunisia", code: "+216" },

    { flag: "🇹🇴", country: "Tonga", code: "+676" },

    { flag: "🇹🇷", country: "Turkey", code: "+90" },

    { flag: "🇹🇹", country: "Trinidad & Tobago", code: "+1" },

    { flag: "🇹🇻", country: "Tuvalu", code: "+688" },

    { flag: "🇹🇼", country: "Taiwan", code: "+886" },

    { flag: "🇹🇿", country: "Tanzania", code: "+255" },

    { flag: "🇺🇦", country: "Ukraine", code: "+380" },

    { flag: "🇺🇬", country: "Uganda", code: "+256" },

    { flag: "🇺🇲", country: "U.S. Outlying Islands", code: "+" },

    { flag: "🇺🇳", country: "United Nations", code: "+" },

    { flag: "🇺🇸", country: "United States", code: "+1" },

    { flag: "🇺🇾", country: "Uruguay", code: "+598" },

    { flag: "🇺🇿", country: "Uzbekistan", code: "+998" },

    { flag: "🇻🇦", country: "Vatican City", code: "+" },

    { flag: "🇻🇨", country: "St. Vincent & the Grenadines", code: "+1" },

    { flag: "🇻🇪", country: "Venezuela", code: "+58" },

    { flag: "🇻🇬", country: "British Virgin Islands", code: "+" },

    { flag: "🇻🇮", country: "U.S. Virgin Islands", code: "+" },

    { flag: "🇻🇳", country: "Vietnam", code: "+84" },

    { flag: "🇻🇺", country: "Vanuatu", code: "+678" },

    { flag: "🇼🇫", country: "Wallis & Futuna", code: "+681" },

    { flag: "🇼🇸", country: "Samoa", code: "+685" },

    { flag: "🇽🇰", country: "Kosovo", code: "+", code: "+" },

    { flag: "🇾🇪", country: "Yemen", code: "+967" },

    { flag: "🇾🇹", country: "Mayotte", code: "+262" },

    { flag: "🇿🇦", country: "South Africa", code: "+27" },

    { flag: "🇿🇲", country: "Zambia", code: "+260" },

    { flag: "🇿🇼", country: "Zimbabwe", code: "+263" },

    { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", country: "England", code: "+" },

    { flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", country: "Scotland", code: "+" },

    { flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", country: "Wales", code: "+" },
  ];

  let conSort = con.sort((x, y) => {
    let a = x.country.toUpperCase();

    let b = y.country.toUpperCase();

    return a == b ? 0 : a > b ? 1 : -1;
  });

  let param = conSort.find(
    (el) =>
      el.country.toString().toLowerCase().trim() ===
      document.getElementById("country").value.toString().toLowerCase().trim()
  );

  if (param) {
    if (document.getElementById("country").value.toString().includes(" ")) {
      let val = param.country.toString().replace(/\s/g, "_");
      param.flag = `./Templates/Flags/${val}.jpg`;
      document.getElementById("col").style.visibility = "visible";
    } else {
      param.flag = `./Templates/Flags/${param.country}.jpg`;
      document.getElementById("col").style.visibility = "visible";
    }

    document.getElementById("col").src = `${param.flag}`;
    document.getElementById("col").style.visibility = "visible";
    document.getElementById("con-code").value = `${param.code}`;
  }

  if (!param) {
    document.getElementById("col").style.visibility = "hidden";
    document.getElementById("con-code").value = ``;
  }

  if (document.getElementById("tel").value != "") {
    document.getElementById("numText").style.display = "none";
  }
}

// for the email

function emailCheck() {
  let param = /^\w{1,}\@\w{1,}\.\w{1,}/m;

  let email = document.getElementById("email").value;

  if (param.test(email.toString())) {
    document.getElementById("emailText").style.display = "none";
    document.getElementById("sp").style.display = "block";
  } else {
    document.getElementById("emailText").style.display = "block";
    document.getElementById("sp").style.display = "none";
  }
}

// For phone number

(() => {
  let con = [
    { flag: "🇦🇨", country: "Ascension Island", code: "+" },

    { flag: "🇦🇩", country: "Andorra", code: "+376" },

    { flag: "🇦🇪", country: "United Arab Emirates", code: "+971" },

    { flag: "🇦🇫", country: "Afghanistan", code: "+93" },

    { flag: "🇦🇬", country: "Antigua & Barbuda", code: "+1" },

    { flag: "🇦🇮", country: "Anguilla", code: "+1" },

    { flag: "🇦🇱", country: "Albania", code: "+355" },

    { flag: "🇦🇲", country: "Armenia", code: "+374" },

    { flag: "🇦🇴", country: "Angola", code: "+244" },

    { flag: "🇦🇶", country: "Antarctica", code: "+" },

    { flag: "🇦🇷", country: "Argentina", code: "+54" },

    { flag: "🇦🇸", country: "American Samoa", code: "+1" },

    { flag: "🇦🇹", country: "Austria", code: "+43" },

    { flag: "🇦🇺", country: "Australia", code: "+61" },

    { flag: "🇦🇼", country: "Aruba", code: "+297" },

    { flag: "🇦🇽", country: "Åland Islands", code: "+" },

    { flag: "🇦🇿", country: "Azerbaijan", code: "+994" },

    { flag: "🇧🇦", country: "Bosnia & Herzegovina", code: "+387" },

    { flag: "🇧🇧", country: "Barbados", code: "+1" },

    { flag: "🇧🇩", country: "Bangladesh", code: "+880" },

    { flag: "🇧🇪", country: "Belgium", code: "+32" },

    { flag: "🇧🇫", country: "Burkina Faso", code: "+226" },

    { flag: "🇧🇬", country: "Bulgaria", code: "+359" },

    { flag: "🇧🇭", country: "Bahrain", code: "+973" },

    { flag: "🇧🇮", country: "Burundi", code: "+257" },

    { flag: "🇧🇯", country: "Benin", code: "+229" },

    { flag: "🇧🇱", country: "St. Barthélemy", code: "+" },

    { flag: "🇧🇲", country: "Bermuda", code: "+1" },

    { flag: "🇧🇳", country: "Brunei", code: "+673" },

    { flag: "🇧🇴", country: "Bolivia", code: "+591" },

    { flag: "🇧🇶", country: "Caribbean Netherlands", code: "+" },

    { flag: "🇧🇷", country: "Brazil", code: "+55" },

    { flag: "🇧🇸", country: "Bahamas", code: "+1" },

    { flag: "🇧🇹", country: "Bhutan", code: "+975" },

    { flag: "🇧🇻", country: "Bouvet Island", code: "+" },

    { flag: "🇧🇼", country: "Botswana", code: "+267" },

    { flag: "🇧🇾", country: "Belarus", code: "+375" },

    { flag: "🇧🇿", country: "Belize", code: "+501" },

    { flag: "🇨🇦", country: "Canada", code: "+1" },

    { flag: "🇨🇨", country: "Cocos (Keeling) Islands", code: "+61" },

    { flag: "🇨🇩", country: "Congo - Kinshasa", code: "+243" },

    { flag: "🇨🇫", country: "Central African Republic", code: "+236" },

    { flag: "🇨🇬", country: "Congo - Brazzaville", code: "+242" },

    { flag: "🇨🇭", country: "Switzerland", code: "+41" },

    { flag: "🇨🇮", country: "Ivory Coast", code: "+225" },

    { flag: "🇨🇰", country: "Cook Islands", code: "+682" },

    { flag: "🇨🇱", country: "Chile", code: "+56" },

    { flag: "🇨🇲", country: "Cameroon", code: "+237" },

    { flag: "🇨🇳", country: "China", code: "+86" },

    { flag: "🇨🇴", country: "Colombia", code: "+57" },

    { flag: "🇨🇵", country: "Clipperton Island", code: "+" },

    { flag: "🇨🇷", country: "Costa Rica", code: "+506" },

    { flag: "🇨🇺", country: "Cuba", code: "+53" },

    { flag: "🇨🇻", country: "Cape Verde", code: "+238" },

    { flag: "🇨🇼", country: "Curaçao", code: "+" },

    { flag: "🇨🇽", country: "Christmas Island", code: "+61" },

    { flag: "🇨🇾", country: "Cyprus", code: "+357" },

    { flag: "🇨🇿", country: "Czech Republic", code: "+" },

    { flag: "🇩🇪", country: "Germany", code: "+49" },

    { flag: "🇩🇬", country: "Diego Garcia", code: "+" },

    { flag: "🇩🇯", country: "Djibouti", code: "+253" },

    { flag: "🇩🇰", country: "Denmark", code: "+45" },

    { flag: "🇩🇲", country: "Dominica", code: "+1" },

    { flag: "🇩🇴", country: "Dominican Republic", code: "+1" },

    { flag: "🇩🇿", country: "Algeria", code: "+213" },

    { flag: "🇪🇦", country: "Ceuta & Melilla", code: "+" },

    { flag: "🇪🇨", country: "Ecuador", code: "+593" },

    { flag: "🇪🇪", country: "Estonia", code: "+372" },

    { flag: "🇪🇬", country: "Egypt", code: "+20" },

    { flag: "🇪🇭", country: "Western Sahara", code: "+212" },

    { flag: "🇪🇷", country: "Eritrea", code: "+291" },

    { flag: "🇪🇸", country: "Spain", code: "+34" },

    { flag: "🇪🇹", country: "Ethiopia", code: "+251" },

    { flag: "🇪🇺", country: "European Union", code: "+" },

    { flag: "🇫🇮", country: "Finland", code: "+358" },

    { flag: "🇫🇯", country: "Fiji", code: "+679" },

    { flag: "🇫🇰", country: "Falkland Islands", code: "+500" },

    { flag: "🇫🇲", country: "Micronesia", code: "+691" },

    { flag: "🇫🇴", country: "Faroe Islands", code: "+298" },

    { flag: "🇫🇷", country: "France", code: "+33" },

    { flag: "🇬🇦", country: "Gabon", code: "+241" },

    { flag: "🇬🇧", country: "United Kingdom", code: "+44" },

    { flag: "🇬🇩", country: "Grenada", code: "+1" },

    { flag: "🇬🇪", country: "Georgia", code: "+995" },

    { flag: "🇬🇫", country: "French Guiana", code: "+594" },

    { flag: "🇬🇬", country: "Guernsey", code: "+" },

    { flag: "🇬🇭", country: "Ghana", code: "+233" },

    { flag: "🇬🇮", country: "Gibraltar", code: "+350" },

    { flag: "🇬🇱", country: "Greenland", code: "+299" },

    { flag: "🇬🇲", country: "Gambia", code: "+220" },

    { flag: "🇬🇳", country: "Guinea", code: "+224" },

    { flag: "🇬🇵", country: "Guadeloupe", code: "+590" },

    { flag: "🇬🇶", country: "Equatorial Guinea", code: "+240" },

    { flag: "🇬🇷", country: "Greece", code: "+30" },

    {
      flag: "🇬🇸",
      country: "South Georgia & South Sandwich Islands",
      code: "+",
    },

    { flag: "🇬🇹", country: "Guatemala", code: "+502" },

    { flag: "🇬🇺", country: "Guam", code: "+1" },

    { flag: "🇬🇼", country: "Guinea-Bissau", code: "+245" },

    { flag: "🇬🇾", country: "Guyana", code: "+592" },

    { flag: "🇭🇰", country: "Hong Kong", code: "+852" },

    { flag: "🇭🇲", country: "Heard & McDonald Islands", code: "+" },

    { flag: "🇭🇳", country: "Honduras", code: "+504" },

    { flag: "🇭🇷", country: "Croatia", code: "+385" },

    { flag: "🇭🇹", country: "Haiti", code: "+509" },

    { flag: "🇭🇺", country: "Hungary", code: "+36" },

    { flag: "🇮🇨", country: "Canary Islands", code: "+" },

    { flag: "🇮🇩", country: "Indonesia", code: "+62" },

    { flag: "🇮🇪", country: "Ireland", code: "+353" },

    { flag: "🇮🇱", country: "Israel", code: "+972" },

    { flag: "🇮🇲", country: "Isle of Man", code: "+" },

    { flag: "🇮🇳", country: "India", code: "+91" },

    { flag: "🇮🇴", country: "British Indian Ocean Territory", code: "+" },

    { flag: "🇮🇶", country: "Iraq", code: "+964" },

    { flag: "🇮🇷", country: "Iran", code: "+98" },

    { flag: "🇮🇸", country: "Iceland", code: "+354" },

    { flag: "🇮🇹", country: "Italy", code: "+39" },

    { flag: "🇯🇪", country: "Jersey", code: "+" },

    { flag: "🇯🇲", country: "Jamaica", code: "+1" },

    { flag: "🇯🇴", country: "Jordan", code: "+962" },

    { flag: "🇯🇵", country: "Japan", code: "+81" },

    { flag: "🇰🇪", country: "Kenya", code: "+254" },

    { flag: "🇰🇬", country: "Kyrgyzstan", code: "+966" },

    { flag: "🇰🇭", country: "Cambodia", code: "+855" },

    { flag: "🇰🇮", country: "Kiribati", code: "+686" },

    { flag: "🇰🇲", country: "Comoros", code: "+269" },

    { flag: "🇰🇳", country: "St. Kitts & Nevis", code: "+1" },

    { flag: "🇰🇵", country: "North Korea", code: "+850" },

    { flag: "🇰🇷", country: "South Korea", code: "+82" },

    { flag: "🇰🇼", country: "Kuwait", code: "+965" },

    { flag: "🇰🇾", country: "Cayman Islands", code: "+1" },

    { flag: "🇰🇿", country: "Kazakhstan", code: "+7" },

    { flag: "🇱🇦", country: "Laos", code: "+856" },

    { flag: "🇱🇧", country: "Lebanon", code: "+961" },

    { flag: "🇱🇨", country: "St. Lucia", code: "+1" },

    { flag: "🇱🇮", country: "Liechtenstein", code: "+423" },

    { flag: "🇱🇰", country: "Sri Lanka", code: "+94" },

    { flag: "🇱🇷", country: "Liberia", code: "+231" },

    { flag: "🇱🇸", country: "Lesotho", code: "+266" },

    { flag: "🇱🇹", country: "Lithuania", code: "+370" },

    { flag: "🇱🇺", country: "Luxembourg", code: "+352" },

    { flag: "🇱🇻", country: "Latvia", code: "+371" },

    { flag: "🇱🇾", country: "Libya", code: "+218" },

    { flag: "🇲🇦", country: "Morocco", code: "+212" },

    { flag: "🇲🇨", country: "Monaco", code: "+377" },

    { flag: "🇲🇩", country: "Moldova", code: "+373" },

    { flag: "🇲🇪", country: "Montenegro", code: "+382" },

    { flag: "🇲🇫", country: "St. Martin", code: "+" },

    { flag: "🇲🇬", country: "Madagascar", code: "+261" },

    { flag: "🇲🇭", country: "Marshall Islands", code: "+692" },

    { flag: "🇲🇰", country: "North Macedonia", code: "+" },

    { flag: "🇲🇱", country: "Mali", code: "+223" },

    { flag: "🇲🇲", country: "Myanmar", code: "+95" },

    { flag: "🇲🇳", country: "Mongolia", code: "+976" },

    { flag: "🇲🇴", country: "Macao Sar China", code: "+853" },

    { flag: "🇲🇵", country: "Northern Mariana Islands", code: "+1" },

    { flag: "🇲🇶", country: "Martinique", code: "+596" },

    { flag: "🇲🇷", country: "Mauritania", code: "+222" },

    { flag: "🇲🇸", country: "Montserrat", code: "+1" },

    { flag: "🇲🇹", country: "Malta", code: "+356" },

    { flag: "🇲🇺", country: "Mauritius", code: "+230" },

    { flag: "🇲🇻", country: "Maldives", code: "+960" },

    { flag: "🇲🇼", country: "Malawi", code: "+265" },

    { flag: "🇲🇽", country: "Mexico", code: "+52" },

    { flag: "🇲🇾", country: "Malaysia", code: "+60" },

    { flag: "🇲🇿", country: "Mozambique", code: "+258" },

    { flag: "🇳🇦", country: "Namibia", code: "+264" },

    { flag: "🇳🇨", country: "New Caledonia", code: "+687" },

    { flag: "🇳🇪", country: "Niger", code: "+227" },

    { flag: "🇳🇫", country: "Norfolk Island", code: "+672" },

    { flag: "🇳🇬", country: "Nigeria", code: "+234" },

    { flag: "🇳🇮", country: "Nicaragua", code: "+505" },

    { flag: "🇳🇱", country: "Netherlands", code: "+31" },

    { flag: "🇳🇴", country: "Norway", code: "+47" },

    { flag: "🇳🇵", country: "Nepal", code: "+977" },

    { flag: "🇳🇷", country: "Nauru", code: "+674" },

    { flag: "🇳🇺", country: "Niue", code: "+683" },

    { flag: "🇳🇿", country: "New Zealand", code: "+64" },

    { flag: "🇴🇲", country: "Oman", code: "+968" },

    { flag: "🇵🇦", country: "Panama", code: "+507" },

    { flag: "🇵🇪", country: "Peru", code: "+51" },

    { flag: "🇵🇫", country: "French Polynesia", code: "+689" },

    { flag: "🇵🇬", country: "Papua New Guinea", code: "+675" },

    { flag: "🇵🇭", country: "Philippines", code: "+63" },

    { flag: "🇵🇰", country: "Pakistan", code: "+92" },

    { flag: "🇵🇱", country: "Poland", code: "+48" },

    { flag: "🇵🇲", country: "St. Pierre & Miquelon", code: "+508" },

    { flag: "🇵🇳", country: "Pitcairn Islands", code: "+870" },

    { flag: "🇵🇷", country: "Puerto Rico", code: "+1" },

    { flag: "🇵🇸", country: "Palestinian Territories", code: "+970" },

    { flag: "🇵🇹", country: "Portugal", code: "+351" },

    { flag: "🇵🇼", country: "Palau", code: "+680" },

    { flag: "🇵🇾", country: "Paraguay", code: "+595" },

    { flag: "🇶🇦", country: "Qatar", code: "+974" },

    { flag: "🇷🇪", country: "Réunion", code: "+262" },

    { flag: "🇷🇴", country: "Romania", code: "+40" },

    { flag: "🇷🇸", country: "Serbia", code: "+381" },

    { flag: "🇷🇺", country: "Russia", code: "+7" },

    { flag: "🇷🇼", country: "Rwanda", code: "+250" },

    { flag: "🇸🇦", country: "Saudi Arabia", code: "+966" },

    { flag: "🇸🇧", country: "Solomon Islands", code: "+677" },

    { flag: "🇸🇨", country: "Seychelles", code: "+248" },

    { flag: "🇸🇩", country: "Sudan", code: "+249" },

    { flag: "🇸🇪", country: "Sweden", code: "+46" },

    { flag: "🇸🇬", country: "Singapore", code: "+65" },

    { flag: "🇸🇭", country: "St. Helena", code: "+290" },

    { flag: "🇸🇮", country: "Slovenia", code: "+386" },

    { flag: "🇸🇯", country: "Svalbard & Jan Mayen", code: "+47" },

    { flag: "🇸🇰", country: "Slovakia", code: "+421" },

    { flag: "🇸🇱", country: "Sierra Leone", code: "+232" },

    { flag: "🇸🇲", country: "San Marino", code: "+378" },

    { flag: "🇸🇳", country: "Senegal", code: "+221" },

    { flag: "🇸🇴", country: "Somalia", code: "+252" },

    { flag: "🇸🇷", country: "Suriname", code: "+597" },

    { flag: "🇸🇸", country: "South Sudan", code: "+" },

    { flag: "🇸🇹", country: "São Tomé & Príncipe", code: "+239" },

    { flag: "🇸🇻", country: "El Salvador", code: "+503" },

    { flag: "🇸🇽", country: "Sint Maarten", code: "+" },

    { flag: "🇸🇾", country: "Syria", code: "+963" },

    { flag: "🇸🇿", country: "Eswatini", code: "+" },

    { flag: "🇹🇦", country: "Tristan Da Cunha", code: "+290" },

    { flag: "🇹🇨", country: "Turks & Caicos Islands", code: "+1" },

    { flag: "🇹🇩", country: "Chad", code: "+235" },

    { flag: "🇹🇫", country: "French Southern Territories", code: "+" },

    { flag: "🇹🇬", country: "Togo", code: "+228" },

    { flag: "🇹🇭", country: "Thailand", code: "+66" },

    { flag: "🇹🇯", country: "Tajikistan", code: "+992" },

    { flag: "🇹🇰", country: "Tokelau", code: "+690" },

    { flag: "🇹🇱", country: "Timor-Leste", code: "+670" },

    { flag: "🇹🇲", country: "Turkmenistan", code: "+993" },

    { flag: "🇹🇳", country: "Tunisia", code: "+216" },

    { flag: "🇹🇴", country: "Tonga", code: "+676" },

    { flag: "🇹🇷", country: "Turkey", code: "+90" },

    { flag: "🇹🇹", country: "Trinidad & Tobago", code: "+1" },

    { flag: "🇹🇻", country: "Tuvalu", code: "+688" },

    { flag: "🇹🇼", country: "Taiwan", code: "+886" },

    { flag: "🇹🇿", country: "Tanzania", code: "+255" },

    { flag: "🇺🇦", country: "Ukraine", code: "+380" },

    { flag: "🇺🇬", country: "Uganda", code: "+256" },

    { flag: "🇺🇲", country: "U.S. Outlying Islands", code: "+" },

    { flag: "🇺🇳", country: "United Nations", code: "+" },

    { flag: "🇺🇸", country: "United States", code: "+1" },

    { flag: "🇺🇾", country: "Uruguay", code: "+598" },

    { flag: "🇺🇿", country: "Uzbekistan", code: "+998" },

    { flag: "🇻🇦", country: "Vatican City", code: "+" },

    { flag: "🇻🇨", country: "St. Vincent & the Grenadines", code: "+1" },

    { flag: "🇻🇪", country: "Venezuela", code: "+58" },

    { flag: "🇻🇬", country: "British Virgin Islands", code: "+" },

    { flag: "🇻🇮", country: "U.S. Virgin Islands", code: "+" },

    { flag: "🇻🇳", country: "Vietnam", code: "+84" },

    { flag: "🇻🇺", country: "Vanuatu", code: "+678" },

    { flag: "🇼🇫", country: "Wallis & Futuna", code: "+681" },

    { flag: "🇼🇸", country: "Samoa", code: "+685" },

    { flag: "🇽🇰", country: "Kosovo", code: "+", code: "+" },

    { flag: "🇾🇪", country: "Yemen", code: "+967" },

    { flag: "🇾🇹", country: "Mayotte", code: "+262" },

    { flag: "🇿🇦", country: "South Africa", code: "+27" },

    { flag: "🇿🇲", country: "Zambia", code: "+260" },

    { flag: "🇿🇼", country: "Zimbabwe", code: "+263" },

    { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", country: "England", code: "+" },

    { flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", country: "Scotland", code: "+" },

    { flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", country: "Wales", code: "+" },
  ];

  let conSort = con.sort((x, y) => {
    let a = x.country.toUpperCase();

    let b = y.country.toUpperCase();

    return a == b ? 0 : a > b ? 1 : -1;
  });

  let cod = document.getElementById("code");

  for (let [index, { country, flag, code }] of conSort.entries()) {
    let opt = document.createElement("option");

    opt.value = code;

    opt.innerHTML = code;

    cod.appendChild(opt);
  }
})();

/* Number spacing and validation */

function numCheck(event) {
  let num = document.getElementById("tel");

  let conCode = document.getElementById("con-code");

  let str = num.value.toString();

  if (!/\d/.test(event.data)) {
    let odd = num.value.toString().replace(event.data, "");

    num.value = odd;
  }

  if (
    num.value.toString() == "" ||
    conCode.value.toString().match(/^\+\d{0,}$/) == null
  ) {
    document.getElementById("sp2").style.display = "none";
    document.getElementById("numText2").style.display = "block";
  } else {
    document.getElementById("sp2").style.display = "block";
    document.getElementById("numText2").style.display = "none";
  }
}

// For password suggestion


function rom() {

  let random = Math.random();

  if(random < 0.1) {

    random *= 10;
  
  } else {
random = random;
  }

 return random;

}

function suggestPass() {
  let sugPass = document.getElementById("sugPass");

  document.getElementById("sp3").style.display = "block";

  document.getElementById("sugClose").style.display = "inline";

  document.getElementById("copy-cont").style.display = "inline";

  let param1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let param2 = param1.toLowerCase();

  let index1 = Math.floor(rom() * 26);

  let index2 = Math.floor(rom() * 26);
  let index3 = Math.floor(rom() * 26);
  let index4 = Math.floor(rom() * 26);
  let index5 = Math.floor(rom() * 26);
  let index6 = Math.floor(rom() * 26);
  let index7 = Math.floor(rom() * 26);
  let index8 = Math.floor(rom() * 26);

  let spec = [
    "%",
    ".",
    "_",
    "+",
    "-",
    "'",
    "`",
    "@",
    "#",
    "$",
    "^",
    "&",
    "(",
    ")",
    "*",
    "=",
    "/",
    " ",
    "!",
    "?",
    "<",
    ">",
    ";",
  ];

  let index9 = Math.floor(rom() * spec.length);

  let index10 = Math.floor(rom() * spec.length);

  let index11 = Math.floor(rom() * spec.length);

  let ans = `${param1[index1]}${Math.floor(rom() * 10)}${Math.floor(
    rom() * 10
  )}${param2[index5]}${param2[index6]}${spec[index9]}${param1[index2]}${
    param1[index3]
  }${spec[index10]}${Math.floor(rom() * 10)}${param2[index7]}${
    param1[index4]
  }${Math.floor(rom() * 10)}${spec[index11]}${param2[index8]}`;

  sugPass.style.display = "inline";

  sugPass.value = ans;
}

// for removing the suggestion

function removePass() {
  document.getElementById("sugPass").style.display = "none";

  document.getElementById("sp3").style.display = "none";

  document.getElementById("sugClose").style.display = "none";

  document.getElementById("copy-cont").style.display = "none";
}


// For the text copying

function copyText() {

  let text = document.getElementById("sugPass");
  
  document.getElementById("copy-message").style.display = "inline";
  
  setTimeout(() => {
  
    document.getElementById("copy-message").style.display = "none";
  
  }, 1000);
  
  navigator.clipboard.writeText(text.value);
  
  }
  

// For checking the country code

function conCodeCheck(event) {
  let num = document.getElementById("tel");

  let conCode = document.getElementById("con-code");

  if (!/\d/.test(event.data) && !/\+/.test(event.data)) {
    let odd = conCode.value.toString().replace(event.data, "");

    conCode.value = odd;
  }

  if (
    num.value.toString() == "" ||
    conCode.value.toString().match(/^\+\d{0,}$/) == null
  ) {
    document.getElementById("sp2").style.display = "none";
    document.getElementById("numText2").style.display = "block";
  } else {
    document.getElementById("sp2").style.display = "block";
    document.getElementById("numText2").style.display = "none";
  }
}

// Submit validation

setInterval(() => {
  let user = document.getElementById("username1").value !== "";

  let check =
    document.getElementById("letter").checked === true &&
    document.getElementById("digit").checked === true &&
    document.getElementById("special").checked === true;

  let email = /^\w{1,}\@\w{1,}\.\w{1,}/gm.test(
    document.getElementById("email").value.toString()
  );

  let country =
    document.getElementById("col").value !== "" &&
    document.getElementById("country").value !== "";

  let code = /^\+\d{0,}$/.test(
    document.getElementById("con-code").value.toString()
  );

  let phone = document.getElementById("tel").value !== "";

  let all = user && check && email && country && code && phone;

  if (all) {
    document.getElementById("final").style.pointerEvents = "all";
    document.getElementById("final").style.opacity = 1;
  } else {
    document.getElementById("final").style.pointerEvents = "none";
    document.getElementById("final").style.opacity = 0.5;
  }

  // For the nav width onresize

  let wid = getComputedStyle(document.getElementById("nav")).getPropertyValue(
    "width"
  );

  let widNo = Number(wid.toString().replace("px", ""));

  document.getElementById("main").style.marginLeft = `${widNo + 10}px`;
  document.getElementById("main").style.width = `${
    screen.availWidth - (widNo + 15)
  }px`;

  let parentHeight = getComputedStyle(
    document.getElementById("nav")
  ).getPropertyValue("height");
  let par = parentHeight.replace("px", "");

  document.getElementById("nav-list").style.height = `${0.74 * par}px`;
}, 0);

function validate() {
  let pass = document.getElementById("password-input1");

  if (pass.type === "text") {
    pass.type = "password";
  } else {
    pass.type = "password";
  }
}

// For the display of the loading animation

(() => {
  document.getElementById("point").onanimationend = () => {
    document.getElementById("point").style.display = "none";
  };
})();

// For the scroll top button

function scrollView() {
  document.getElementById("top").scrollIntoView();
}

function scrollUp() {
  if (document.getElementById("main").scrollTop > 200) {
    document.getElementById("scroll-btn").style.display = "block";
  } else {
    document.getElementById("scroll-btn").style.display = "none";
  }
}

// For the user's Location

async function getLocation() {
  try {
    let res = await fetch("http://127.0.0.1:1000/api/v1/user-location", {
      mode: "no-cors",
    });

    let data = await res.text();

    let con = [
      { flag: "🇦🇨", country: "Ascension Island", code: "+" },

      { flag: "🇦🇩", country: "Andorra", code: "+376" },

      { flag: "🇦🇪", country: "United Arab Emirates", code: "+971" },

      { flag: "🇦🇫", country: "Afghanistan", code: "+93" },

      { flag: "🇦🇬", country: "Antigua & Barbuda", code: "+1" },

      { flag: "🇦🇮", country: "Anguilla", code: "+1" },

      { flag: "🇦🇱", country: "Albania", code: "+355" },

      { flag: "🇦🇲", country: "Armenia", code: "+374" },

      { flag: "🇦🇴", country: "Angola", code: "+244" },

      { flag: "🇦🇶", country: "Antarctica", code: "+" },

      { flag: "🇦🇷", country: "Argentina", code: "+54" },

      { flag: "🇦🇸", country: "American Samoa", code: "+1" },

      { flag: "🇦🇹", country: "Austria", code: "+43" },

      { flag: "🇦🇺", country: "Australia", code: "+61" },

      { flag: "🇦🇼", country: "Aruba", code: "+297" },

      { flag: "🇦🇽", country: "Åland Islands", code: "+" },

      { flag: "🇦🇿", country: "Azerbaijan", code: "+994" },

      { flag: "🇧🇦", country: "Bosnia & Herzegovina", code: "+387" },

      { flag: "🇧🇧", country: "Barbados", code: "+1" },

      { flag: "🇧🇩", country: "Bangladesh", code: "+880" },

      { flag: "🇧🇪", country: "Belgium", code: "+32" },

      { flag: "🇧🇫", country: "Burkina Faso", code: "+226" },

      { flag: "🇧🇬", country: "Bulgaria", code: "+359" },

      { flag: "🇧🇭", country: "Bahrain", code: "+973" },

      { flag: "🇧🇮", country: "Burundi", code: "+257" },

      { flag: "🇧🇯", country: "Benin", code: "+229" },

      { flag: "🇧🇱", country: "St. Barthélemy", code: "+" },

      { flag: "🇧🇲", country: "Bermuda", code: "+1" },

      { flag: "🇧🇳", country: "Brunei", code: "+673" },

      { flag: "🇧🇴", country: "Bolivia", code: "+591" },

      { flag: "🇧🇶", country: "Caribbean Netherlands", code: "+" },

      { flag: "🇧🇷", country: "Brazil", code: "+55" },

      { flag: "🇧🇸", country: "Bahamas", code: "+1" },

      { flag: "🇧🇹", country: "Bhutan", code: "+975" },

      { flag: "🇧🇻", country: "Bouvet Island", code: "+" },

      { flag: "🇧🇼", country: "Botswana", code: "+267" },

      { flag: "🇧🇾", country: "Belarus", code: "+375" },

      { flag: "🇧🇿", country: "Belize", code: "+501" },

      { flag: "🇨🇦", country: "Canada", code: "+1" },

      { flag: "🇨🇨", country: "Cocos (Keeling) Islands", code: "+61" },

      { flag: "🇨🇩", country: "Congo - Kinshasa", code: "+243" },

      { flag: "🇨🇫", country: "Central African Republic", code: "+236" },

      { flag: "🇨🇬", country: "Congo - Brazzaville", code: "+242" },

      { flag: "🇨🇭", country: "Switzerland", code: "+41" },

      { flag: "🇨🇮", country: "Ivory Coast", code: "+225" },

      { flag: "🇨🇰", country: "Cook Islands", code: "+682" },

      { flag: "🇨🇱", country: "Chile", code: "+56" },

      { flag: "🇨🇲", country: "Cameroon", code: "+237" },

      { flag: "🇨🇳", country: "China", code: "+86" },

      { flag: "🇨🇴", country: "Colombia", code: "+57" },

      { flag: "🇨🇵", country: "Clipperton Island", code: "+" },

      { flag: "🇨🇷", country: "Costa Rica", code: "+506" },

      { flag: "🇨🇺", country: "Cuba", code: "+53" },

      { flag: "🇨🇻", country: "Cape Verde", code: "+238" },

      { flag: "🇨🇼", country: "Curaçao", code: "+" },

      { flag: "🇨🇽", country: "Christmas Island", code: "+61" },

      { flag: "🇨🇾", country: "Cyprus", code: "+357" },

      { flag: "🇨🇿", country: "Czech Republic", code: "+" },

      { flag: "🇩🇪", country: "Germany", code: "+49" },

      { flag: "🇩🇬", country: "Diego Garcia", code: "+" },

      { flag: "🇩🇯", country: "Djibouti", code: "+253" },

      { flag: "🇩🇰", country: "Denmark", code: "+45" },

      { flag: "🇩🇲", country: "Dominica", code: "+1" },

      { flag: "🇩🇴", country: "Dominican Republic", code: "+1" },

      { flag: "🇩🇿", country: "Algeria", code: "+213" },

      { flag: "🇪🇦", country: "Ceuta & Melilla", code: "+" },

      { flag: "🇪🇨", country: "Ecuador", code: "+593" },

      { flag: "🇪🇪", country: "Estonia", code: "+372" },

      { flag: "🇪🇬", country: "Egypt", code: "+20" },

      { flag: "🇪🇭", country: "Western Sahara", code: "+212" },

      { flag: "🇪🇷", country: "Eritrea", code: "+291" },

      { flag: "🇪🇸", country: "Spain", code: "+34" },

      { flag: "🇪🇹", country: "Ethiopia", code: "+251" },

      { flag: "🇪🇺", country: "European Union", code: "+" },

      { flag: "🇫🇮", country: "Finland", code: "+358" },

      { flag: "🇫🇯", country: "Fiji", code: "+679" },

      { flag: "🇫🇰", country: "Falkland Islands", code: "+500" },

      { flag: "🇫🇲", country: "Micronesia", code: "+691" },

      { flag: "🇫🇴", country: "Faroe Islands", code: "+298" },

      { flag: "🇫🇷", country: "France", code: "+33" },

      { flag: "🇬🇦", country: "Gabon", code: "+241" },

      { flag: "🇬🇧", country: "United Kingdom", code: "+44" },

      { flag: "🇬🇩", country: "Grenada", code: "+1" },

      { flag: "🇬🇪", country: "Georgia", code: "+995" },

      { flag: "🇬🇫", country: "French Guiana", code: "+594" },

      { flag: "🇬🇬", country: "Guernsey", code: "+" },

      { flag: "🇬🇭", country: "Ghana", code: "+233" },

      { flag: "🇬🇮", country: "Gibraltar", code: "+350" },

      { flag: "🇬🇱", country: "Greenland", code: "+299" },

      { flag: "🇬🇲", country: "Gambia", code: "+220" },

      { flag: "🇬🇳", country: "Guinea", code: "+224" },

      { flag: "🇬🇵", country: "Guadeloupe", code: "+590" },

      { flag: "🇬🇶", country: "Equatorial Guinea", code: "+240" },

      { flag: "🇬🇷", country: "Greece", code: "+30" },

      {
        flag: "🇬🇸",
        country: "South Georgia & South Sandwich Islands",
        code: "+",
      },

      { flag: "🇬🇹", country: "Guatemala", code: "+502" },

      { flag: "🇬🇺", country: "Guam", code: "+1" },

      { flag: "🇬🇼", country: "Guinea-Bissau", code: "+245" },

      { flag: "🇬🇾", country: "Guyana", code: "+592" },

      { flag: "🇭🇰", country: "Hong Kong", code: "+852" },

      { flag: "🇭🇲", country: "Heard & McDonald Islands", code: "+" },

      { flag: "🇭🇳", country: "Honduras", code: "+504" },

      { flag: "🇭🇷", country: "Croatia", code: "+385" },

      { flag: "🇭🇹", country: "Haiti", code: "+509" },

      { flag: "🇭🇺", country: "Hungary", code: "+36" },

      { flag: "🇮🇨", country: "Canary Islands", code: "+" },

      { flag: "🇮🇩", country: "Indonesia", code: "+62" },

      { flag: "🇮🇪", country: "Ireland", code: "+353" },

      { flag: "🇮🇱", country: "Israel", code: "+972" },

      { flag: "🇮🇲", country: "Isle of Man", code: "+" },

      { flag: "🇮🇳", country: "India", code: "+91" },

      { flag: "🇮🇴", country: "British Indian Ocean Territory", code: "+" },

      { flag: "🇮🇶", country: "Iraq", code: "+964" },

      { flag: "🇮🇷", country: "Iran", code: "+98" },

      { flag: "🇮🇸", country: "Iceland", code: "+354" },

      { flag: "🇮🇹", country: "Italy", code: "+39" },

      { flag: "🇯🇪", country: "Jersey", code: "+" },

      { flag: "🇯🇲", country: "Jamaica", code: "+1" },

      { flag: "🇯🇴", country: "Jordan", code: "+962" },

      { flag: "🇯🇵", country: "Japan", code: "+81" },

      { flag: "🇰🇪", country: "Kenya", code: "+254" },

      { flag: "🇰🇬", country: "Kyrgyzstan", code: "+966" },

      { flag: "🇰🇭", country: "Cambodia", code: "+855" },

      { flag: "🇰🇮", country: "Kiribati", code: "+686" },

      { flag: "🇰🇲", country: "Comoros", code: "+269" },

      { flag: "🇰🇳", country: "St. Kitts & Nevis", code: "+1" },

      { flag: "🇰🇵", country: "North Korea", code: "+850" },

      { flag: "🇰🇷", country: "South Korea", code: "+82" },

      { flag: "🇰🇼", country: "Kuwait", code: "+965" },

      { flag: "🇰🇾", country: "Cayman Islands", code: "+1" },

      { flag: "🇰🇿", country: "Kazakhstan", code: "+7" },

      { flag: "🇱🇦", country: "Laos", code: "+856" },

      { flag: "🇱🇧", country: "Lebanon", code: "+961" },

      { flag: "🇱🇨", country: "St. Lucia", code: "+1" },

      { flag: "🇱🇮", country: "Liechtenstein", code: "+423" },

      { flag: "🇱🇰", country: "Sri Lanka", code: "+94" },

      { flag: "🇱🇷", country: "Liberia", code: "+231" },

      { flag: "🇱🇸", country: "Lesotho", code: "+266" },

      { flag: "🇱🇹", country: "Lithuania", code: "+370" },

      { flag: "🇱🇺", country: "Luxembourg", code: "+352" },

      { flag: "🇱🇻", country: "Latvia", code: "+371" },

      { flag: "🇱🇾", country: "Libya", code: "+218" },

      { flag: "🇲🇦", country: "Morocco", code: "+212" },

      { flag: "🇲🇨", country: "Monaco", code: "+377" },

      { flag: "🇲🇩", country: "Moldova", code: "+373" },

      { flag: "🇲🇪", country: "Montenegro", code: "+382" },

      { flag: "🇲🇫", country: "St. Martin", code: "+" },

      { flag: "🇲🇬", country: "Madagascar", code: "+261" },

      { flag: "🇲🇭", country: "Marshall Islands", code: "+692" },

      { flag: "🇲🇰", country: "North Macedonia", code: "+" },

      { flag: "🇲🇱", country: "Mali", code: "+223" },

      { flag: "🇲🇲", country: "Myanmar", code: "+95" },

      { flag: "🇲🇳", country: "Mongolia", code: "+976" },

      { flag: "🇲🇴", country: "Macao Sar China", code: "+853" },

      { flag: "🇲🇵", country: "Northern Mariana Islands", code: "+1" },

      { flag: "🇲🇶", country: "Martinique", code: "+596" },

      { flag: "🇲🇷", country: "Mauritania", code: "+222" },

      { flag: "🇲🇸", country: "Montserrat", code: "+1" },

      { flag: "🇲🇹", country: "Malta", code: "+356" },

      { flag: "🇲🇺", country: "Mauritius", code: "+230" },

      { flag: "🇲🇻", country: "Maldives", code: "+960" },

      { flag: "🇲🇼", country: "Malawi", code: "+265" },

      { flag: "🇲🇽", country: "Mexico", code: "+52" },

      { flag: "🇲🇾", country: "Malaysia", code: "+60" },

      { flag: "🇲🇿", country: "Mozambique", code: "+258" },

      { flag: "🇳🇦", country: "Namibia", code: "+264" },

      { flag: "🇳🇨", country: "New Caledonia", code: "+687" },

      { flag: "🇳🇪", country: "Niger", code: "+227" },

      { flag: "🇳🇫", country: "Norfolk Island", code: "+672" },

      { flag: "🇳🇬", country: "Nigeria", code: "+234" },

      { flag: "🇳🇮", country: "Nicaragua", code: "+505" },

      { flag: "🇳🇱", country: "Netherlands", code: "+31" },

      { flag: "🇳🇴", country: "Norway", code: "+47" },

      { flag: "🇳🇵", country: "Nepal", code: "+977" },

      { flag: "🇳🇷", country: "Nauru", code: "+674" },

      { flag: "🇳🇺", country: "Niue", code: "+683" },

      { flag: "🇳🇿", country: "New Zealand", code: "+64" },

      { flag: "🇴🇲", country: "Oman", code: "+968" },

      { flag: "🇵🇦", country: "Panama", code: "+507" },

      { flag: "🇵🇪", country: "Peru", code: "+51" },

      { flag: "🇵🇫", country: "French Polynesia", code: "+689" },

      { flag: "🇵🇬", country: "Papua New Guinea", code: "+675" },

      { flag: "🇵🇭", country: "Philippines", code: "+63" },

      { flag: "🇵🇰", country: "Pakistan", code: "+92" },

      { flag: "🇵🇱", country: "Poland", code: "+48" },

      { flag: "🇵🇲", country: "St. Pierre & Miquelon", code: "+508" },

      { flag: "🇵🇳", country: "Pitcairn Islands", code: "+870" },

      { flag: "🇵🇷", country: "Puerto Rico", code: "+1" },

      { flag: "🇵🇸", country: "Palestinian Territories", code: "+970" },

      { flag: "🇵🇹", country: "Portugal", code: "+351" },

      { flag: "🇵🇼", country: "Palau", code: "+680" },

      { flag: "🇵🇾", country: "Paraguay", code: "+595" },

      { flag: "🇶🇦", country: "Qatar", code: "+974" },

      { flag: "🇷🇪", country: "Réunion", code: "+262" },

      { flag: "🇷🇴", country: "Romania", code: "+40" },

      { flag: "🇷🇸", country: "Serbia", code: "+381" },

      { flag: "🇷🇺", country: "Russia", code: "+7" },

      { flag: "🇷🇼", country: "Rwanda", code: "+250" },

      { flag: "🇸🇦", country: "Saudi Arabia", code: "+966" },

      { flag: "🇸🇧", country: "Solomon Islands", code: "+677" },

      { flag: "🇸🇨", country: "Seychelles", code: "+248" },

      { flag: "🇸🇩", country: "Sudan", code: "+249" },

      { flag: "🇸🇪", country: "Sweden", code: "+46" },

      { flag: "🇸🇬", country: "Singapore", code: "+65" },

      { flag: "🇸🇭", country: "St. Helena", code: "+290" },

      { flag: "🇸🇮", country: "Slovenia", code: "+386" },

      { flag: "🇸🇯", country: "Svalbard & Jan Mayen", code: "+47" },

      { flag: "🇸🇰", country: "Slovakia", code: "+421" },

      { flag: "🇸🇱", country: "Sierra Leone", code: "+232" },

      { flag: "🇸🇲", country: "San Marino", code: "+378" },

      { flag: "🇸🇳", country: "Senegal", code: "+221" },

      { flag: "🇸🇴", country: "Somalia", code: "+252" },

      { flag: "🇸🇷", country: "Suriname", code: "+597" },

      { flag: "🇸🇸", country: "South Sudan", code: "+" },

      { flag: "🇸🇹", country: "São Tomé & Príncipe", code: "+239" },

      { flag: "🇸🇻", country: "El Salvador", code: "+503" },

      { flag: "🇸🇽", country: "Sint Maarten", code: "+" },

      { flag: "🇸🇾", country: "Syria", code: "+963" },

      { flag: "🇸🇿", country: "Eswatini", code: "+" },

      { flag: "🇹🇦", country: "Tristan Da Cunha", code: "+290" },

      { flag: "🇹🇨", country: "Turks & Caicos Islands", code: "+1" },

      { flag: "🇹🇩", country: "Chad", code: "+235" },

      { flag: "🇹🇫", country: "French Southern Territories", code: "+" },

      { flag: "🇹🇬", country: "Togo", code: "+228" },

      { flag: "🇹🇭", country: "Thailand", code: "+66" },

      { flag: "🇹🇯", country: "Tajikistan", code: "+992" },

      { flag: "🇹🇰", country: "Tokelau", code: "+690" },

      { flag: "🇹🇱", country: "Timor-Leste", code: "+670" },

      { flag: "🇹🇲", country: "Turkmenistan", code: "+993" },

      { flag: "🇹🇳", country: "Tunisia", code: "+216" },

      { flag: "🇹🇴", country: "Tonga", code: "+676" },

      { flag: "🇹🇷", country: "Turkey", code: "+90" },

      { flag: "🇹🇹", country: "Trinidad & Tobago", code: "+1" },

      { flag: "🇹🇻", country: "Tuvalu", code: "+688" },

      { flag: "🇹🇼", country: "Taiwan", code: "+886" },

      { flag: "🇹🇿", country: "Tanzania", code: "+255" },

      { flag: "🇺🇦", country: "Ukraine", code: "+380" },

      { flag: "🇺🇬", country: "Uganda", code: "+256" },

      { flag: "🇺🇲", country: "U.S. Outlying Islands", code: "+" },

      { flag: "🇺🇳", country: "United Nations", code: "+" },

      { flag: "🇺🇸", country: "United States", code: "+1" },

      { flag: "🇺🇾", country: "Uruguay", code: "+598" },

      { flag: "🇺🇿", country: "Uzbekistan", code: "+998" },

      { flag: "🇻🇦", country: "Vatican City", code: "+" },

      { flag: "🇻🇨", country: "St. Vincent & the Grenadines", code: "+1" },

      { flag: "🇻🇪", country: "Venezuela", code: "+58" },

      { flag: "🇻🇬", country: "British Virgin Islands", code: "+" },

      { flag: "🇻🇮", country: "U.S. Virgin Islands", code: "+" },

      { flag: "🇻🇳", country: "Vietnam", code: "+84" },

      { flag: "🇻🇺", country: "Vanuatu", code: "+678" },

      { flag: "🇼🇫", country: "Wallis & Futuna", code: "+681" },

      { flag: "🇼🇸", country: "Samoa", code: "+685" },

      { flag: "🇽🇰", country: "Kosovo", code: "+", code: "+" },

      { flag: "🇾🇪", country: "Yemen", code: "+967" },

      { flag: "🇾🇹", country: "Mayotte", code: "+262" },

      { flag: "🇿🇦", country: "South Africa", code: "+27" },

      { flag: "🇿🇲", country: "Zambia", code: "+260" },

      { flag: "🇿🇼", country: "Zimbabwe", code: "+263" },

      { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", country: "England", code: "+" },

      { flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", country: "Scotland", code: "+" },

      { flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", country: "Wales", code: "+" },
    ];

    let conSort = con.sort((x, y) => {
      let a = x.country.toUpperCase();

      let b = y.country.toUpperCase();

      return a == b ? 0 : a > b ? 1 : -1;
    });

    let loc = conSort.find(
      (x) =>
        x.country.toString().toLowerCase().trim() ==
        data.toString().toLowerCase().trim()
    );

    if (loc) {
      if (data.toString().includes(" ")) {
        let val = loc.country.toString().replace(/\s/g, "_");
        loc.flag = `./Templates/Flags/${val}.jpg`;
        document.getElementById("col").style.visibility = "visible";
      } else {
        loc.flag = `./Templates/Flags/${loc.country}.jpg`;
        document.getElementById("col").style.visibility = "visible";
      }

      document.getElementById("country").value = loc.country;
      document.getElementById("con-code").value = loc.code;
      document.getElementById("col").src = loc.flag;
    }

    if (!loc) {
      document.getElementById("col").style.visibility = "hidden";
      document.getElementById("con-code").value = ``;
    }

    if (document.getElementById("tel").value != "") {
      document.getElementById("numText").style.display = "none";
    }
  } catch (err) {
    document.getElementById("country").value = "";
    document.getElementById("con-code").value = "";
    document.getElementById("col").src = "";
    document.getElementById("col").style.visibility = "hidden";
  }
}

getLocation();
