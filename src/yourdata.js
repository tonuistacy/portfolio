// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import laravelIcon from "./images/laravel.svg"
import codeigniterIcon from "./images/codeigniter.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import codepenIcon from "./images/codepen.svg"
import dribbbleIcon from "./images/dribbble.svg"
import instagramIcon from "./images/instagram.svg"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "stacy",
  headerTagline: [
    //Line 1 For Header
    "Software Engineer",
    //Line 2 For Header
    "based in",
    //Line 3 For Header
    "Nairobi, Kenya",
  ],
  //   Header Paragraph
  headerParagraph:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",

  //Contact Email
  contactEmail: "stacyanne01@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "Tawala", //Project Title - Add Your Project Title Here
      para:
        "An E-Commerce site built with Laravel and Vue JS. ", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://raw.githubusercontent.com/stacytonui/stacy/main/tawala.png",
      //Project URL - Add Your Project Url Here
      url: "https://stacychebet.com",
    },
    {
      title: "Auctioneer", //Project Title - Add Your Project Title Here
      para:
        "A simple items auctioning site built using Laravel ", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://raw.githubusercontent.com/stacytonui/stacy/main/auctioneer.png",
      //Project URL - Add Your Project Url Here
      url: "https://stacychebet.com",
    },



    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "I'm a software engineer who is passionate about all things web development. My experience includes building Web Applications and Web APIs using programming languages such as JavaScript, Laravel and CodeIgniter..",
  aboutParaTwo:
    "",
  aboutParaThree:
    "",
  aboutImage:
    "",

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: htmlIcon,
      para:
        "HTML",
    },
    {
      img: cssIcon,
      para:
        "CSS",
    },
    {
      img: jsIcon,
      para:
        "JS",
    },
    {
      img: reactIcon,
      para:
        "ReactJS",
    },
    {
      img: laravelIcon,
      para:
        "Laravel",
    },
    {
      img: codeigniterIcon,
      para:
        "CodeIgniter",
    },
  ],

  // End Skills Section --------------------------


  //   Contact Section --------------

  contactSubHeading: "Let's create your next experience together",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/stacytonui" },

  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
