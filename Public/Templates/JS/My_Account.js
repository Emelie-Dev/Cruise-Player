"use strict";

// For the menu and files

const countryDetails = [
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

  { flag: "🇽🇰", country: "Kosovo", code: "+" },

  { flag: "🇾🇪", country: "Yemen", code: "+967" },

  { flag: "🇾🇹", country: "Mayotte", code: "+262" },

  { flag: "🇿🇦", country: "South Africa", code: "+27" },

  { flag: "🇿🇲", country: "Zambia", code: "+260" },

  { flag: "🇿🇼", country: "Zimbabwe", code: "+263" },

  { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", country: "England", code: "+" },

  { flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", country: "Scotland", code: "+" },

  { flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", country: "Wales", code: "+" },
];

(() => {
  const fir = document.getElementsByClassName("opt")[0];

  const sec = document.getElementsByClassName("opt")[1];

  fir.classList.add("opt2");

  fir.onclick = () => {
    fir.classList.add("opt2");
    sec.classList.remove("opt2");

    // let nav = document.getElementById("nav");
    const navFir = document.getElementById("menu");
    const navSec = document.getElementById("nav-list2");

    navFir.style.display = "block";
    navSec.style.display = "none";
  };

  document.getElementById("nav-list2").style.display = "none";

  sec.onclick = () => {
    sec.classList.add("opt2");
    fir.classList.remove("opt2");

    const navFir = document.getElementById("menu");
    const navSec = document.getElementById("nav-list2");

    navSec.style.display = "block";
    navFir.style.display = "none";
  };
})();

// For the random name

(() => {
  document.getElementById("profile-img").onclick = () => {
    document.getElementById("file").click();
  };

  const index = Math.floor(Math.random() * 26);
  const index1 = Math.floor(Math.random() * 26);
  const index2 = Math.floor(Math.random() * 26);
  const index3 = Math.floor(Math.random() * 26);
  const index4 = Math.floor(Math.random() * 26);
  const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const random = `${Math.floor(Math.random() * 100)}${alpha[index2]}${
    alpha[index]
  }${Math.floor(Math.random() * 1000)}${alpha[index3]}${
    alpha[index4]
  }${Math.floor(Math.random() * 1000)}${alpha[index1]}&nbsp;`;

  document.getElementById("num").innerHTML = random;
  document.getElementById("profile-name").title =
    "User" + random.replace(/&nbsp;/g, "");
})();

// For the side nav height

// function navHeight() {

//   let matchWidth = window.matchMedia("(min-width: 800px)");

//   if(matchWidth.matches) {

//   const parentHeight = getComputedStyle(
//     document.getElementById("nav")
//   ).getPropertyValue("height");
//   const par = parentHeight.replace("px", "");

//   document.getElementById("nav-list").style.height = `${0.74 * par}px`;

//   // For the main content

//   // For the main body and animation

//   const wid = getComputedStyle(document.getElementById("nav")).getPropertyValue(
//     "width"
//   );

//   const widNo = Number(wid.toString().replace("px", ""));

//   document.getElementById("main").style.marginLeft = `${widNo + 10}px`;
//   document.getElementById("main").style.width = `${
//     screen.availWidth - (widNo + 15)
//   }px`;

// } 

// }

//sign in

function closeIn() {
  document.getElementById("sign-in-page").style.display = "none";
}

const signInmodal = document.getElementById("sign-in-page");

const signUpmodal = document.getElementById("sign-up-page");

document.documentElement.addEventListener("click", (event) => {
  if (event.target == signInmodal) {
    document.getElementById("sign-in-page").style.display = "none";
  }

  if (event.target == signUpmodal) {
    document.getElementById("sign-up-page").style.display = "none";
  }
});

window.addEventListener("keypress", (event) => {
  const disp =
    String(
      getComputedStyle(
        document.getElementById("sign-in-page")
      ).getPropertyValue("display")
    ).toLowerCase() == "flex"
      ? true
      : String(
          getComputedStyle(
            document.getElementById("sign-up-page")
          ).getPropertyValue("display")
        ).toLowerCase() == "flex"
      ? true
      : false;

  if (disp) {
    if (event.which === 13 || event.keyCode == 13) {
      event.preventDefault();
    }
  }
});

function signIn() {
  document.getElementById("sign-in-page").style.display = "flex";
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
  document.getElementById("sign-up-page").style.display = "flex";
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
  const pass = document.getElementById("password-input1").value;

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

  if (/\W/.test(pass.toString()) || /_/.test(pass.toString())) {
    document.getElementById("special").checked = true;

    document.getElementById("special").style.pointerEvents = "none";
  } else {
    document.getElementById("special").checked = false;
  }
}

// username

function userCheck(event) {
  const x = event.data;
  const param = /\W/;

  const username = document
    .getElementById("username1")
    .value.toString()
    .replace(/\W/gim, "");

  if (param.test(x)) {
    document.getElementById("username1").value = username;
  }
}

//country

(() => {
  const con = [
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

    { flag: "🇽🇰", country: "Kosovo", code: "+" },

    { flag: "🇾🇪", country: "Yemen", code: "+967" },

    { flag: "🇾🇹", country: "Mayotte", code: "+262" },

    { flag: "🇿🇦", country: "South Africa", code: "+27" },

    { flag: "🇿🇲", country: "Zambia", code: "+260" },

    { flag: "🇿🇼", country: "Zimbabwe", code: "+263" },

    { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", country: "England", code: "+" },

    { flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", country: "Scotland", code: "+" },

    { flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", country: "Wales", code: "+" },
  ];

  const conSort = con.sort((x, y) => {
    const a = x.country.toUpperCase();

    const b = y.country.toUpperCase();

    return a == b ? 0 : a > b ? 1 : -1;
  });

  const sel = document.getElementById("sel");

  const conFlag = document.getElementById("col");

  // eslint-disable-next-line no-restricted-syntax
  for (const [index, { country, flag }] of conSort.entries()) {
    const opt = document.createElement("option");

    const opt1 = document.createElement("option");

    opt.value = country;

    opt.innerHTML = country;
    opt.id = country;

    sel.appendChild(opt);

    conFlag.src = flag;
  }
})();

// Mtaching the datalists

function match() {
  const con = [
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

    { flag: "🇽🇰", country: "Kosovo", code: "+" },

    { flag: "🇾🇪", country: "Yemen", code: "+967" },

    { flag: "🇾🇹", country: "Mayotte", code: "+262" },

    { flag: "🇿🇦", country: "South Africa", code: "+27" },

    { flag: "🇿🇲", country: "Zambia", code: "+260" },

    { flag: "🇿🇼", country: "Zimbabwe", code: "+263" },

    { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", country: "England", code: "+" },

    { flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", country: "Scotland", code: "+" },

    { flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", country: "Wales", code: "+" },
  ];

  const conSort = con.sort((x, y) => {
    const a = x.country.toUpperCase();

    const b = y.country.toUpperCase();

    return a == b ? 0 : a > b ? 1 : -1;
  });

  const param = conSort.find(
    (el) =>
      el.country.toString().toLowerCase().trim() ===
      document.getElementById("country").value.toString().toLowerCase().trim()
  );

  if (param) {
    if (document.getElementById("country").value.toString().includes(" ")) {
      const val = param.country.toString().replace(/\s/g, "_");
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
  const param = /^\w{1,}@\w{1,}\.\w{1,}/m;

  const email = document.getElementById("email").value;

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
  const con = [
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

    { flag: "🇽🇰", country: "Kosovo", code: "+" },

    { flag: "🇾🇪", country: "Yemen", code: "+967" },

    { flag: "🇾🇹", country: "Mayotte", code: "+262" },

    { flag: "🇿🇦", country: "South Africa", code: "+27" },

    { flag: "🇿🇲", country: "Zambia", code: "+260" },

    { flag: "🇿🇼", country: "Zimbabwe", code: "+263" },

    { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", country: "England", code: "+" },

    { flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", country: "Scotland", code: "+" },

    { flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", country: "Wales", code: "+" },
  ];

  const conSort = con.sort((x, y) => {
    const a = x.country.toUpperCase();

    const b = y.country.toUpperCase();

    return a == b ? 0 : a > b ? 1 : -1;
  });

  const cod = document.getElementById("code");

  // eslint-disable-next-line no-restricted-syntax
  for (const [index, { country, flag, code }] of conSort.entries()) {
    const opt = document.createElement("option");

    opt.value = code;

    opt.innerHTML = code;

    cod.appendChild(opt);
  }
})();

/* Number spacing and validation */

function numCheck(event) {
  const num = document.getElementById("tel");

  const conCode = document.getElementById("con-code");

  const str = num.value.toString();

  if (!/\d/.test(event.data)) {
    const odd = num.value.toString().replace(event.data, "");

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

  if (random < 0.1) {
    random *= 10;
  }

  return random;
}

function suggestPass() {
  const sugPass = document.getElementById("sugPass");

  document.getElementById("sp3").style.display = "block";

  document.getElementById("sugClose").style.display = "inline";

  document.getElementById("copy-cont").style.display = "inline";

  const param1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const param2 = param1.toLowerCase();

  const index1 = Math.floor(rom() * 26);

  const index2 = Math.floor(rom() * 26);
  const index3 = Math.floor(rom() * 26);
  const index4 = Math.floor(rom() * 26);
  const index5 = Math.floor(rom() * 26);
  const index6 = Math.floor(rom() * 26);
  const index7 = Math.floor(rom() * 26);
  const index8 = Math.floor(rom() * 26);

  const spec = [
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

  const index9 = Math.floor(rom() * spec.length);

  const index10 = Math.floor(rom() * spec.length);

  const index11 = Math.floor(rom() * spec.length);

  const ans = `${param1[index1]}${Math.floor(rom() * 10)}${Math.floor(
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
  const text = document.getElementById("sugPass");

  document.getElementById("copy-message").style.display = "inline";

  setTimeout(() => {
    document.getElementById("copy-message").style.display = "none";
  }, 1000);

  navigator.clipboard.writeText(text.value);
}

// For checking the country code

function conCodeCheck(event) {
  const num = document.getElementById("tel");

  const conCode = document.getElementById("con-code");

  if (!/\d/.test(event.data) && !/\+/.test(event.data)) {
    const odd = conCode.value.toString().replace(event.data, "");

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
  const user = document.getElementById("username1").value !== "";

  const check =
    document.getElementById("letter").checked === true &&
    document.getElementById("digit").checked === true &&
    document.getElementById("special").checked === true;

  const email = /^\w{1,}@\w{1,}\.\w{1,}/gm.test(
    document.getElementById("email").value.toString()
  );

  const country =
    document.getElementById("col").value !== "" &&
    document.getElementById("country").value !== "";

  const code = /^\+\d{0,}$/.test(
    document.getElementById("con-code").value.toString()
  );

  const phone = document.getElementById("tel").value !== "";

  const all = user && check && email && country && code && phone;

  if (all) {
    document.getElementById("final").style.pointerEvents = "all";
    document.getElementById("final").style.opacity = 1;
  } else {
    document.getElementById("final").style.pointerEvents = "none";
    document.getElementById("final").style.opacity = 0.5;
  }

 // For the nav height onresize

document.querySelector("#nav").style.height =
 `${-95.917127 + (window.innerHeight * (179/181))}px`;


 document.querySelector("#nav-list").style.height =
 `${-219.407895 + (document.querySelector("#nav").offsetHeight * (175/152))}px`;


 document.querySelector("#main").style.height = `${-86.98125 + (window.innerHeight * (0.98125))}px`;


}, 0);


function validate() {
  const pass = document.getElementById("password-input1");

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
    const res = await fetch("http://127.0.0.1:1000/api/v1/user-location", {
      mode: "no-cors",
    });

    const data = await res.text();

    const con = [
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

      { flag: "🇽🇰", country: "Kosovo", code: "+" },

      { flag: "🇾🇪", country: "Yemen", code: "+967" },

      { flag: "🇾🇹", country: "Mayotte", code: "+262" },

      { flag: "🇿🇦", country: "South Africa", code: "+27" },

      { flag: "🇿🇲", country: "Zambia", code: "+260" },

      { flag: "🇿🇼", country: "Zimbabwe", code: "+263" },

      { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", country: "England", code: "+" },

      { flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", country: "Scotland", code: "+" },

      { flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", country: "Wales", code: "+" },
    ];

    const conSort = con.sort((x, y) => {
      const a = x.country.toUpperCase();

      const b = y.country.toUpperCase();

      return a == b ? 0 : a > b ? 1 : -1;
    });

    const loc = conSort.find(
      (x) =>
        x.country.toString().toLowerCase().trim() ==
        data.toString().toLowerCase().trim()
    );

    if (loc) {
      if (data.toString().includes(" ")) {
        const val = loc.country.toString().replace(/\s/g, "_");
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

// function to show tab contents

function showAccountContent(id) {
  const elem = document.querySelector(`#${id}`);

  const disp = String(
    getComputedStyle(elem.nextElementSibling).getPropertyValue("display")
  ).toLowerCase();

  const closedSvg = elem.querySelector(".closed-arrow-svg");

  const openendSvg = elem.querySelector(".opened-arrow-svg");

  if (disp == "none") {
    elem.nextElementSibling.style.display = "block";
    openendSvg.style.display = "inline";
    closedSvg.style.display = "none";
  } else {
    elem.nextElementSibling.style.display = "none";
    openendSvg.style.display = "none";
    closedSvg.style.display = "inline";
  }
}

function checkName(event) {
  const { data } = event;

  const param = /\W/;

  const name = String(event.target.value).replace(/\W/gim, "");

  if (param.test(data)) {
    event.target.value = name;
  }
}

// for the account name authentication code

const authCodeArray = [...document.querySelectorAll(".authentication-code")];

authCodeArray.forEach((el, index) => {
  el.addEventListener("input", (e) => {
    // if(el.value !== "") {

    //   for(let i = index; i < authCodeArray.length; i++) {

    //     if(!authCodeArray[i].readOnly) {

    //       authCodeArray[i].focus();

    //       break;

    //     }

    //   }

    // }

    if (/\d/.test(e.data)) {
      el.value = parseInt(String(el.value)[0], 10);

      el.readOnly = true;

      if (index !== authCodeArray.length - 1) {
        authCodeArray[index + 1].focus();
      }
    } else {
      el.value = "";
    }
  });
});

authCodeArray.forEach((el, index) => {
  el.addEventListener("click", () => {
    if (el.value !== "") {
      for (let i = index; i < authCodeArray.length; i++) {
        if (!authCodeArray[i].readOnly) {
          authCodeArray[i].focus();

          break;
        }
      }
    } else {
      for (let i = 0; i < index; i++) {
        if (!authCodeArray[i].readOnly) {
          authCodeArray[i].focus();

          break;
        }
      }
    }
  });
});

authCodeArray.forEach((el, index) => {
  el.addEventListener("keydown", (e) => {
    const key = String(e.key).toLowerCase().trim();

    if (key === "backspace") {
      const elemArray = authCodeArray.filter((elem) => elem.value !== "");

      if (elemArray.length !== 0) {
        const lastElem = elemArray[elemArray.length - 1];

        const lastIndex = authCodeArray.indexOf(lastElem);

        lastElem.value = "";

        lastElem.readOnly = false;

        authCodeArray[lastIndex].focus();
      }
    }
  });
});

// for showing the profile image

function showProfileImg() {
  document.querySelector("#account-profile-image-display-div").style.display =
    "grid";
}

// for closing the profile image display

function closeProfileImageDisplay() {
  document.querySelector("#account-profile-image-display-div").style.display =
    "none";
}

// for showing the profile image options list

function showProfileImageOptions() {
  const disp = String(
    getComputedStyle(
      document.querySelector("#account-profile-image-options-list")
    ).getPropertyValue("display")
  ).toLowerCase();

  if (disp == "none") {
    document.querySelector("#empty-div").style.display = "block";

    document.querySelector(
      "#account-profile-image-options-list"
    ).style.display = "block";
  } else {
    document.querySelector("#empty-div").style.display = "none";

    document.querySelector(
      "#account-profile-image-options-list"
    ).style.display = "none";
  }
}

// for showing the profile image options list

function hideProfileImageOptions() {
  document.querySelector("#empty-div").style.display = "none";

  document.querySelector("#account-profile-image-options-list").style.display =
    "none";
}

// for checking the account email

function checkEmail() {
  const param = /^\w{1,}@\w{1,}\.\w{1,}/m;

  const email = document.getElementById("account-email-value").value;

  if (param.test(email.toString())) {
    console.log("Success");
  } else {
    console.log("error");
  }
}

// for giving the account country code its values

(() => {
  const countryCodes = new Set(countryDetails.map((con) => con.code));

  const dataList = document.querySelector("#account-number-code");

  let options = "";

  countryCodes.forEach((con) => {
    options += `<option value="${con}">\n`;
  });

  dataList.innerHTML = options;
})();

// Function to show security modals

function showSecurityModals(id, num) {

document.querySelector(`#${id}`).style.display = "flex";

document.querySelector("#nav").style.position = "static"; 

if(num === 1) {


const alertContentArray = [...document.querySelectorAll(".account-profile-child-security-alerts-item-box")];

alertContentArray.forEach(el => {

  el.style.height = "0px";
  el.style.overflow = `hidden`;
  el.previousElementSibling.children[1].innerHTML = ` <svg class="account-profile-child-security-alerts-item-head-svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
</svg>`;

})



} else if (num === 3) {

  document.querySelector("#account-profile-child-2step-verification-password-box").style.display = "none";
  
  document.querySelector("#account-profile-child-2step-verification-container").style.display = "flex";

} else if (num === 5) {

  document.querySelector("#account-profile-child-deactivate-account-verification-container").style.display = "none";
  
  document.querySelector("#account-profile-child-deactivate-account-details-container").style.display = "block";
 
} else if (num === 6) {

  document.querySelector("#account-profile-child-delete-account-download-container").style.display = "none";

  document.querySelector("#account-profile-child-delete-account-review-container").style.display = "none";

  document.querySelector("#account-profile-child-delete-account-verification-container").style.display = "none";

  document.querySelector("#account-profile-child-delete-account-questions-container").style.display = "block";


}


}


// function to close the security modals

function closeSecurityModals(id) {

  document.querySelector(`#${id}`).style.display = "none";

  document.querySelector("#nav").style.position = "fixed"; 

}

Array.from(document.querySelectorAll(".account-profile-child-security-modal")).forEach(el => {
  
  el.addEventListener("click", e => {

  if(e.target === el) {
    
    el.style.display = "none";

  }

  })
})

// for management modals

Array.from(document.querySelectorAll(".account-profile-child-management-modal")).forEach(el => {
  
  el.addEventListener("click", e => {

  if(e.target === el) {
    
    el.style.display = "none";

  }

  })
})


//  for showing security alert box content


function showAlertContent(e) {

  const alertContentArray = [...document.querySelectorAll(".account-profile-child-security-alerts-item-box")];

  alertContentArray.forEach(el => {

    el.style.height = "0px";
    el.style.overflow = `hidden`;
    el.previousElementSibling.children[1].innerHTML = ` <svg class="account-profile-child-security-alerts-item-head-svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
  </svg>`;

  })

   let alertContent = e.currentTarget.nextElementSibling;

   let elemSymbol = e.currentTarget.children[1];

  let elemHeight = String(getComputedStyle(alertContent).getPropertyValue("height")).toLowerCase();

 

  if(elemHeight === "0px") {

    alertContent.style.height = `${alertContent.scrollHeight}px`;
    elemSymbol.innerHTML =
     `<svg class="account-profile-child-security-alerts-item-head-svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
    <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
  </svg>
  `;
    
    
  } else {

    alertContent.style.height = "0px";
    alertContent.style.overflow = `hidden`;
    elemSymbol.innerHTML = `  <svg class="account-profile-child-security-alerts-item-head-svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
  </svg>`;

  }

  
}


// function for switching security content

function switchContent() {


let disp = String(getComputedStyle(document.querySelector("#account-profile-child-no-security-alerts-box")).getPropertyValue("display")).toLowerCase();

 if(disp === "none") {

  document.querySelector("#account-profile-child-no-security-alerts-box").style.display = "flex";

  document.querySelector("#account-profile-child-security-alerts-container").style.display = "none";
  
  document.querySelector("#account-profile-child-security-alerts-footer").style.display = "none";
  

 } else {

  document.querySelector("#account-profile-child-security-alerts-container").style.display = "flex";
  
  document.querySelector("#account-profile-child-security-alerts-footer").style.display = "block";

  
  document.querySelector("#account-profile-child-no-security-alerts-box").style.display = "none";

 }


}

// For closing the remove device div

function closeRemoveDeviceBox() {

  document.querySelector("#account-profile-child-manage-devices-delete-box").style.display = "none";

}
// For showing the remove item div

function showRemoveDeviceBox(e) {

let deviceName = e.currentTarget.parentElement.previousElementSibling.children[0].textContent;

document.querySelector("#account-profile-child-manage-devices-delete-box-device-name").textContent = `${deviceName}`;

document.querySelector("#account-profile-child-manage-devices-delete-box").style.display = "flex";

}


// function for enaling 2FA

function enable2FA() {

  document.querySelector("#account-profile-child-2step-verification-container").style.display = "none";

  document.querySelector("#account-profile-child-2step-verification-password-box").style.display = "flex";

  slideForwardAnimation("account-profile-child-2step-verification-password-box", "account-profile-child-2step-verification-modal");



}
// function for canceling 2fa 

function cancel2FA() {

  document.querySelector("#account-profile-child-2step-verification-password-box").style.display = "none";

  document.querySelector("#account-profile-child-2step-verification-container").style.display = "flex";
 
  slideBackwardAnimation("account-profile-child-2step-verification-container", "account-profile-child-management-deactivate-account-modal");

}


// function for adding account

function addAccount() {

  document.querySelector("#account-profile-child-management-switch-account-modal").style.display = "none";

  document.querySelector("#sign-in-page").style.display = "flex";

}

// function for cancelling deactivation

function cancelDeactivation() {

  document.querySelector("#account-profile-child-deactivate-account-verification-container").style.display = "none";

  document.querySelector("#account-profile-child-deactivate-account-details-container").style.display = "block";

  slideBackwardAnimation("account-profile-child-deactivate-account-details-container", "account-profile-child-management-deactivate-account-modal");

}

// function for sliding forward animation

 function slideForwardAnimation(elemId, modalId) {

document.querySelector(`#${modalId}`).style.overflowX  = "hidden";

const elem = document.querySelector(`#${elemId}`);

const width = elem.offsetWidth;

elem.animate({
    transform: [`translateX(${width}px)`, `translateX(0)`],
    opacity: [0, 1]
  },
    {
      duration: 200,
      iterations: 1
    }
  )


setTimeout(() => {

  document.querySelector(`#${modalId}`).style.overflowX  = "auto";

}, 300)

}

// function for sliding backward animation 

function slideBackwardAnimation(elemId, modalId) {

document.querySelector(`#${modalId}`).style.overflowX  = "hidden";

const elem = document.querySelector(`#${elemId}`);

const width = elem.offsetWidth;

elem.animate({
    transform: [`translateX(${-1 * width}px)`, `translateX(0)`],
    opacity: [0, 1]
  },
    {
      duration: 200,
      iterations: 1
    }
  )


setTimeout(() => {

  document.querySelector(`#${modalId}`).style.overflowX  = "auto";

}, 300)

}

// function for proceeding deactivation

function proceedDeactivation() {


  document.querySelector("#account-profile-child-deactivate-account-details-container").style.display = "none";

  document.querySelector("#account-profile-child-deactivate-account-verification-container").style.display = "flex";

 slideForwardAnimation("account-profile-child-deactivate-account-verification-container", "account-profile-child-management-deactivate-account-modal");

  
}

// function for closing deactivation modal

function closeDeactivation() {

  document.querySelector("#account-profile-child-deactivate-account-confirm-modal").style.display = "none";

}

// function for confirming deactivation

function confirmDeactivation() {
  
  document.querySelector("#account-profile-child-deactivate-account-confirm-modal").style.display = "flex";


}

// for showing additional contents in the questions for deleting account

[...document.querySelectorAll(".account-profile-child-delete-account-questions-container-item-input")].forEach((el,index) => {

  el.addEventListener("input", e => {

    let scroll = document.querySelector("#account-profile-child-delete-account-questions-container-reason-div").scrollHeight;

    if(index === 4) {

      document.querySelector("#account-profile-child-delete-account-questions-container-reason-div").style.display = "flex";

      document.querySelector("#account-profile-child-delete-account-questions-container-reason-input").textContent = "";

      document.querySelector("#account-profile-child-delete-account-questions-container-reason-input").focus();

    } else {

      document.querySelector("#account-profile-child-delete-account-questions-container-reason-div").style.display = "none";

     
    }

  })
})


// for limitting length of characters in the delete reason

document.querySelector("#account-profile-child-delete-account-questions-container-reason-input").addEventListener("input", e => {

let txt = String(e.currentTarget.textContent).trim();


if( txt.length > 500) {

  e.currentTarget.textContent = txt.slice(0, 500);

  if(window.getSelection && document.createRange) {
  
  // creates a new range object
 const range = document.createRange();

  // selects the entire content of the element
  range.selectNodeContents(e.currentTarget);

 // collapses te range to the end
  range.collapse(false);

  // Gets the selection object and remove all existing selections
  const selection = window.getSelection();
  selection.removeAllRanges();

  // Add the new range to the selection
  selection.addRange(range);

  } else if(document.body.createTextRange) {

    const textRange = document.body.createTextRange();

    textRange.moveToElementText(e.currentTarget);

    textRange.collapse(false);

    textRange.select();

  }
}

})

// for showing the questions container

function showQuestionsContainer() {

  document.querySelector("#account-profile-child-delete-account-download-container").style.display = "none";

  document.querySelector("#account-profile-child-delete-account-review-container").style.display = "none";

  document.querySelector("#account-profile-child-delete-account-verification-container").style.display = "none";

  document.querySelector("#account-profile-child-delete-account-questions-container").style.display = "block";
    
  slideBackwardAnimation("account-profile-child-delete-account-questions-container", "account-profile-child-management-delete-account-modal");

}

// for showing the download container

function showDownloadContainer(num) {

  document.querySelector("#account-profile-child-delete-account-questions-container").style.display = "none";

  document.querySelector("#account-profile-child-delete-account-review-container").style.display = "none";

  document.querySelector("#account-profile-child-delete-account-verification-container").style.display = "none";

  document.querySelector("#account-profile-child-delete-account-download-container").style.display = "block";

  if(num === 1) {
    
  slideBackwardAnimation("account-profile-child-delete-account-download-container", "account-profile-child-management-delete-account-modal");

  } else {
  
  slideForwardAnimation("account-profile-child-delete-account-download-container", "account-profile-child-management-delete-account-modal");

  }
}


// for showing the review container

function showReviewContainer(num) {

  document.querySelector("#account-profile-child-delete-account-questions-container").style.display = "none";

  document.querySelector("#account-profile-child-delete-account-download-container").style.display = "none";
  
  document.querySelector("#account-profile-child-delete-account-verification-container").style.display = "none";


  document.querySelector("#account-profile-child-delete-account-review-container").style.display = "block";

  
  if(num === 1) {
    
    slideBackwardAnimation("account-profile-child-delete-account-review-container", "account-profile-child-management-delete-account-modal");
  
    } else {
    
  slideForwardAnimation("account-profile-child-delete-account-review-container", "account-profile-child-management-delete-account-modal");

    }

}

// for showing delete verification container


function showVerificationContainer() {
 

  document.querySelector("#account-profile-child-delete-account-questions-container").style.display = "none";

  document.querySelector("#account-profile-child-delete-account-download-container").style.display = "none";

  document.querySelector("#account-profile-child-delete-account-review-container").style.display = "none";

  document.querySelector("#account-profile-child-delete-account-verification-container").style.display = "flex";

  
  slideForwardAnimation("account-profile-child-delete-account-verification-container", "account-profile-child-management-delete-account-modal");


}


// function for confirming account delete

function confirmAccountDelete() {
  
  document.querySelector("#account-profile-child-delete-account-confirm-modal").style.display = "flex";


}


// function for closing delete account confirmation modal

function closeAccountDeletion() {

  document.querySelector("#account-profile-child-delete-account-confirm-modal").style.display = "none";

}


// for showing the navbar on smaller screens

function showNavBar(e) {

  let disp = String(getComputedStyle(document.querySelector("#nav")).getPropertyValue("display")).toLowerCase();

  if(disp === "none") {

  document.querySelector("#nav").style.display = "block";

  document.querySelector("#empty-div2").style.display = "block";

 
} else {

  document.querySelector("#nav").style.display = "none";

  document.querySelector("#empty-div2").style.display = "none";


}

}

// for hiding the empty div

document.querySelector("#empty-div2").addEventListener("click", e => {

  document.querySelector("#nav").style.display = "none";
  
  e.target.style.display = "none";

})

