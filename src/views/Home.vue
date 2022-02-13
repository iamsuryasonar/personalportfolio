<template>
  <NavBar> </NavBar>

  <div id="frontpage" class="firstpage">
    <div class="bg-text">
      <p>
        Hi! I'm <br />
        <span class="name"> Surya Sonar </span>
      </p>
      <p>I'm a <span class="cs">Computer Science student.</span></p>
      <div>
        <a
          href="https://drive.google.com/file/d/1gxK7V-ZJGTqqkMiUic3nxMe4_cfjbkAe/view?usp=sharing"
        >
          <button class="button">
            Resume
          </button>
        </a>
      </div>
    </div>
  </div>

  <div class="aboutme">
    <div class="aboutmecontainer">
      <div class="profilepicture">
        <img src="../assets/dp.jpg" alt="picture of me" />
      </div>
      <div id="aboutsection" class="aboutmewrapper">
        <p class="aboutmetitle">About Me</p>
        <p>
          &emsp; Since my childhood, I dreamt of using a computer. That dream
          kept me around computer science and technology.
        </p>
        <p>
          &emsp; Once I passed out of high school I got admitted for bachelor's
          degree in computer application. It opened me to an endless world of
          possibilities where I encountered many like-minded peoples with
          similar dreams. Out of curiosity I learned a lot about WHY's and HOW's
          of computer science.
        </p>
        <blockquote>
          Curiosity kept me running.
        </blockquote>
        <p>
          &emsp; Currently pursuing Master of Computer Application at Cotton
          University and improving data structure as well as problem solving
          skills on competitive platforms and implementing those knowledge on
          developing real life applications.
        </p>
      </div>
    </div>
  </div>
  <div class="third">
    <div id="projectsection" class="projectcontainer">
      <header><p>My Projects</p></header>
      <div class="projectwrapper" v-for="(project, id) in projects" :key="id">
        <img class="projectimages" v-bind:src="project.image" alt="" />
        <div class="icon-title-button-wrapper">
          <div class="projecticons">
            <div v-for="(i, id) in project.icons" :key="id">
              <i :class="i.icon"></i>
            </div>
          </div>
          <a :href="project.url" class="projecttitle">{{ project.title }}</a>
          <article>
            <p class="build-with">
              {{ project.build_info }}
            </p>
            <p class="description">{{ project.description }}</p>
          </article>
          <div>
            <button
              class="button"
              v-on:click="source_code(project.source_code)"
            >
              View Source Code
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="forth">
    <div id="contactsection" class="contactcontainer">
      <div class="contact-icons">
        <a class="iconcontact" :href="linkedin">
          <i class="fab fa-linkedin"></i>
        </a>
        <a class="iconcontact" :href="instagram">
          <i class="fab fa-instagram"></i>
        </a>
        <a class="iconcontact" :href="github">
          <i class="fab fa-github"></i>
        </a>
      </div>
      <div class="contactme">
        <p class="contactp">Contact me?</p>
        <p class="emailp">
          Email me at:
          <a
            class="mail_to"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=iamsuryasonar@gmail.com"
          >
            iamsuryasonar@gmail.com </a
          >.
        </p>
      </div>
    </div>
  </div>
  <div class="footer">
    <p>Made with <span class="heart"> &hearts;</span> by Surya Sonar</p>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import linkshareimg from "@/assets/urlshare.png";
import cryptorankimg from "@/assets/cryptorank.png";
import notebookimg from "@/assets/project3.jpg";
import portfolioimg from "@/assets/portfolio.jpeg";
import tempmessageimg from "@/assets/tempmessage.png";
export default {
  name: "Home",
  components: {
    NavBar,
  },

  data() {
    return {
      projects: [
        {
          icons: [
            {
              icon: "fab fa-js",
            },
            {
              icon: "fab fa-vuejs",
            },
            {
              icon: "fab fa-node-js",
            },
            {
              icon: "fab fa-css3-alt",
            },
          ],
          id: "URLshare",
          image: linkshareimg,
          source_code: "https://github.com/iamsuryasonar/URLshare.git",
          build_info:
            "Built with NodeJs, Firebase Database, VueJs, Vue Router, Vuex and CSS",
          title: "URLshare",
          url: "https://urlshare.netlify.app",
          description:
            "URLshare is a URL sharing platform, which enables users to share all of their URL's with a single URL. For example 'www.urlshare.com/username'.",
        },
        {
          id: "cryptorank",
          icons: [
            {
              icon: "fab fa-java",
            },
            {
              icon: "fab fa-android",
            },
          ],
          image: cryptorankimg,
          source_code: "https://github.com/iamsuryasonar/CryptoRank.git",
          build_info: "Built with Java, XML, Volley library and Coincap Api.",
          title: "CryptoRank",
          description:
            "CryptoRank is a cryptocurrency ranking app, using the CoinCap REST API, I enabled all cryptocurrencies to be displayed rankwise with its current value in US dolars and change percentage of  it in 24 hours. I used the VOLLEY library to fetch data from CoinCap API.",
        },
        {
          id: "notebook",
          icons: [
            {
              icon: "fab fa-java",
            },
            {
              icon: "fab fa-android",
            },
          ],
          image: notebookimg,
          source_code: "https://www.github.com/iamsuryasonar/NoteBook.git",
          build_info: "Built with Java, XML and Firebase Database.",
          title: "NoteBook",
          description:
            "An android app to take important notes, I used firebase database for authentication, authorisation and storage of user data.",
        },
        {
          icons: [
            {
              icon: "fab fa-js",
            },
            {
              icon: "fab fa-vuejs",
            },
            {
              icon: "fab fa-css3-alt",
            },
            {
              icon: "fab fa-node-js",
            },
          ],
          id: "portfolio",
          image: portfolioimg,
          source_code: "https://github.com/iamsuryasonar/personalportfolio.git",
          build_info: "Built with NodeJs, HTML, CSS, VueJs.",
          title: "Portfolio",
          url: "https://iamsuryasonar.netlify.app",
          description:
            "It is a responsive portfolio website to showcase my beliefs, skills, qualifications and experiences.",
        },
        {
          icons: [
            {
              icon: "fab fa-js",
            },
            {
              icon: "fab fa-css3-alt",
            },
            {
              icon: "fab fa-node-js",
            },
          ],
          id: "tempmessage",
          image: tempmessageimg,
          source_code: "https://github.com/iamsuryasonar/tempmessage.git",
          build_info: "Built with NodeJs, ExpressJs, EJS, CSS and MongoDB",
          title: "Temp Message",
          url: "https://tempmessage.herokuapp.com",
          description:
            "Temp message is a self destructing link(url) generated by authenticated user contains an image and a caption, when visited expires in 4 minutes or 30 minutes otherwise.",
        },
      ],

      linkedin: "https://www.linkedin.com/in/iamsuryasonar",
      instagram: "https://www.instagram.com/iamsuryasonar",
      github: "https://www.github.com/iamsuryasonar",
    };
  },
  methods: {
    source_code(source_code) {
      window.open(source_code);
    },

    downloadresume() {
      console.log("resume in making");
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  overflow-x: hidden;
}

.aboutme,
.firstpage,
.third,
.forth {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

/* <--------first page--------> */

.firstpage {
  min-height: calc(100vh + 5vw);
  background-color: #414141fd;
  background-image: url("../assets/firstpagebackground.jpg");
  background-size: cover;
  background-attachment: scroll;
  position: relative;
  z-index: 3;
  transform: scale(1.1);
  clip-path: polygon(0 0, 100% 0%, 100% calc(100% - 5vw), 0 100%);
  margin-bottom: -5vw;
}
.bg-text {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.514);
  color: white;
  font-weight: bold;
  border: 3px solid #f1f1f1;
  width: 60%;
  padding: 1.6rem 0;
  text-align: center;
}
.bg-text p {
  font-size: 1.6rem;
}

.bg-text .name {
  font-size: 3rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 100;
  color: #e4e403;
}

.bg-text .cs {
  font-size: 2.4rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  border-bottom: 2px solid #e4e403;
}

.bg-text button {
  font-size: 1.4rem;
  text-decoration: none;
  color: #252934;
  background-color: #e4e403;
  padding: 14px 120px;
  margin: auto;
  margin-top: 1.8rem;
  border: none;
  outline: 2px solid rgb(0, 31, 31);
  outline-offset: -0.2em;
  cursor: pointer;
  transition: all 0.3s ease 0s;
}
.bg-text button:hover {
  background-color: #a93800;
  color: white;
  outline-color: white;
}
/* <--------about me section--------> */

.aboutme {
  height: auto;
  position: relative;
  z-index: 2;
  background-color: #ffd68d;
  clip-path: polygon(0 0, 100% 0%, 100% calc(100% - 5vw), 0 100%);
  margin-bottom: -5vw;
}
.aboutmecontainer {
  margin: 20% auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
}
.profilepicture img {
  margin-top: 8rem;
  padding: 1rem;
  width: 450px;
  height: 450px;
  border-radius: 50%;
  box-shadow: 5px 15px 30px -20px rgb(3, 1, 0);
}

.aboutmewrapper {
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.aboutmewrapper p {
  font-size: 1.8rem;
  margin: 2rem auto;
  text-align: justify;
}
.aboutmewrapper .aboutmetitle {
  font-size: 2.5rem;
  font-family: "Montserrat", sans-serif;
  margin-top: 4rem;
  border-bottom: 2px solid #e4e403;
}
blockquote {
  font-size: 1.6rem;
}

/* <--------project section--------> */
.third {
  height: auto;
  position: relative;
  z-index: 1;
  margin-bottom: -5vw;
  background-color: #5bbdbc;
  /* #1bf5f0; */
  clip-path: polygon(0 0, 100% 0%, 100% calc(100% - 5vw), 0 100%);
}
.projectcontainer {
  width: 60%;
  margin: 8rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.projectcontainer header p {
  font-size: 2.8rem;
  font-family: "Montserrat", sans-serif;
  margin-top: 4rem;
  border-bottom: 2px solid #e4e403;
}

.projectwrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem auto;
  width: 100%;
}
.projectimages {
  padding: 1rem;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  box-shadow: 5px 15px 30px -20px;
}
.icon-title-button-wrapper {
  margin: auto;
  margin-left: 2rem;
}
.icon-title-button-wrapper p {
  text-align: justify;
}
.icon-title-button-wrapper .description {
  font-size: 24px;
}
.projecticons {
  font-size: 3rem;
  margin-top: 2rem;
  /* flex is not working */
  display: flex;
  flex-direction: row;
}
.projecticons i {
  margin: 1rem 1rem;
}

.projecttitle {
  font-size: 3rem;
  margin: 0;
  transition: all 0s ease 0.1s;
}
.projecttitle:hover {
  color: #ffd68d;
}

.build-with {
  font-size: 2rem;
}
.icon-title-button-wrapper button {
  font-size: 1.8rem;
  text-decoration: none;
  color: #252934;
  background-color: #e4e403;
  padding: 8px 12px;
  margin: auto;
  margin-top: 1rem;
  border: none;
  outline: 2px solid rgb(0, 31, 31);
  outline-offset: -0.15em;
  cursor: pointer;
}
.icon-title-button-wrapper button:hover {
  background-color: #a93800;
  color: white;
  outline-color: white;
}
.icon-title-button-wrapper a {
  text-decoration-line: none;
  color: black;
}
/* <--------contact section--------> */
.forth {
  width: auto;
  min-height: 105vh;
  position: relative;
  background-color: #252934;
  z-index: 0;
}

.contactcontainer {
  width: 90%;
  height: 100%;
  margin: 8rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.contact-icons {
  font-size: 2rem;
  margin-top: 15%;
  margin-left: auto;
  display: flex;
  flex-direction: row;
}

.contact-icons i {
  margin: 0 1rem;
  color: white;
  cursor: pointer;
}

.contact-icons i:hover {
  color: #5bbdbc;
}

.contactme {
  color: white;
}
.contactp {
  font-size: 2.5rem;
  border-bottom: 1px solid #e4e403;
}
.emailp {
  font-size: 1.5rem;
  word-wrap: break-word;
  margin-top: 7rem;
  text-align: left;
}
.mail_to {
  font-size: 2rem;
  text-decoration: none;
  color: #e4e403;
}

.mail_to:hover {
  border-bottom: 1px solid #e4e403;
}

/* <--------footer--------> */

.footer {
  width: 100%;
  height: auto;
  background-color: #252934;
  outline: none;
  padding: 10px 10px;
}
.footer p {
  font-size: 1.5rem;
  text-align: center;
  margin: 0px;
  color: white;
}
.footer .heart {
  color: red;
}

/* 1400px and below */
@media screen and (max-width: 1400px) {
  /* <------firstpage------> */
  .firstpage {
    height: 100vh;
  }

  .bg-text {
    width: 70%;
  }
  .bg-text p {
    font-size: 1.2rem;
  }
  .bg-text .name {
    font-size: 2.4rem;
  }
  .bg-text .cs {
    font-size: 1.4rem;
  }

  .bg-text button {
    font-size: 1rem;
  }

  /* <------aboutmepage------> */
  .aboutmecontainer {
    flex-wrap: wrap;
    justify-content: center;
  }
  .aboutmewrapper {
    margin-left: 0;
    flex-wrap: wrap;
    justify-content: center;
  }
  .aboutmewrapper .aboutmetitle {
    font-size: 2.3rem;
  }
  .aboutmewrapper p {
    font-size: 1.2rem;
  }
  .aboutmewrapper blockquote {
    font-size: 1.1rem;
  }

  /* <------projectpage------> */
  .projectcontainer {
    width: 70%;
    align-items: center;
  }
  .projectwrapper {
    flex-wrap: wrap;
    justify-content: center;
  }

  .profilepicture img {
    margin-top: 2rem;
  }
  .projectimages {
    width: 350px;
    height: 350px;
  }
  .projectcontainer p {
    font-size: 2.3rem;
  }
  .icon-title-button-wrapper {
    margin-left: 0;
  }

  .icon-title-button-wrapper .projecticons,
  .icon-title-button-wrapper .projecttitle {
    font-size: 40px;
  }
  .icon-title-button-wrapper .build-with {
    font-size: 1.8rem;
  }
  .icon-title-button-wrapper .description {
    font-size: 1.5rem;
  }
  .icon-title-button-wrapper button {
    font-size: 1.5rem;
  }

  /* <------contactpage------> */

  .contact-icons {
    font-size: 1.8rem;
  }
  .contactp {
    font-size: 2.3rem;
  }
  .emailp {
    font-size: 1.5rem;
  }
  .mail_to {
    font-size: 2rem;
  }

  /* <------footersection------> */

  .footer p {
    font-size: 1.2rem;
  }
}

/* 700px and below */
@media screen and (max-width: 700px) {
  /* <------firstpage------> */
  .bg-text {
    width: 80%;
  }
  .bg-text p {
    font-size: 1.2rem;
  }

  .bg-text .name {
    font-size: 2rem;
  }
  .bg-text .cs {
    font-size: 1.2rem;
  }
  .bg-text button {
    font-size: 1rem;
    padding: 14px 60px;
  }
  /* <------aboutmepage------> */
  .profilepicture img {
    margin-top: 2rem;
    width: 300px;
    height: 300px;
  }
  .aboutmecontainer {
    flex-wrap: wrap;
    justify-content: center;
  }
  .aboutmewrapper .aboutmetitle {
    font-size: 2rem;
  }
  .aboutmewrapper p {
    font-size: 1.2rem;
  }
  .aboutmewrapper blockquote {
    font-size: 1rem;
  }

  /* <------projectpage------> */
  .projectcontainer {
    width: 90%;
    align-items: center;
  }
  .icon-title-button-wrapper {
    margin-left: 0;
  }
  .projectcontainer p {
    font-size: 2rem;
  }
  .icon-title-button-wrapper .projecticons,
  .icon-title-button-wrapper .projecttitle {
    font-size: 1.5rem;
  }
  .icon-title-button-wrapper .build-with {
    font-size: 1.2rem;
  }
  .icon-title-button-wrapper .description {
    font-size: 1rem;
  }
  .icon-title-button-wrapper button {
    font-size: 1rem;
  }

  /* <------contactpage------> */

  .contact-icons {
    font-size: 1.5rem;
  }
  .contactp {
    font-size: 1.8rem;
  }
  .emailp {
    font-size: 1.4rem;
  }
  .mail_to {
    font-size: 1.8rem;
  }

  /* <------projectsection------> */
  .projectimages {
    width: 300px;
    height: 300px;
  }
  /* <------footersection------> */

  .footer p {
    font-size: 1rem;
  }
}
</style>
