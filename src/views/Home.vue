<template>
  <NavBar> </NavBar>
  <div @click="menu = false">
  <div id="frontpage" class="firstpage">
    <div class="bg-text">
      <h1>Hi! I'm <span class="name">Surya Sonar</span></h1>
      <h2>And I'm a <span class="cs">Computer Science student.</span></h2>
      <div>
        <button class="button" v-on:click="downloadresume()">
          Resume
        </button>
      </div>
    </div>
  </div>

  <div class="aboutme">
    <div class="aboutmecontainer">
      <div class="profilepicture">
        <img src="../assets/dp.jpg" alt="picture of me" />
      </div>
      <div  id="aboutsection" class="aboutmewrapper">
        <p class="aboutmetitle">About Me</p>
        <p>
          &emsp; Since my childhood, I used to dream of using a computer. That
          dream kept me around computer science and technology.
        </p>
        <p>
          &emsp; Once I passed out of high school I got admitted for bachelor's.
          It opened me to an endless resources and like-minded peoples. Out of
          curiosity I learned a lot about WHY and HOW of computer science.
        </p>
        <blockquote>
          Curiocity keeps me running.
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
          <p class="projecttitle">{{ project.title }}</p>
          <article>
            <p class="build-with">
              {{ project.build_info }}
            </p>
            <p>{{ project.description }}</p>
          </article>
          <div>
            <button class="button" v-on:click="source_code(project.source_code)">
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
          Please, use the form below or <br />
          send an email to 
          <a class="mail_to" href="https://mail.google.com/mail/?view=cm&fs=1&to=iamsuryasonar@gmail.com">
          iamsuryasonar@gmail.com
          </a>.
        </p>
      </div>
    </div>
  </div>
  <div class="footer">
    <p>Made with <span class="heart"> &hearts;</span> by Surya Sonar</p>
  </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import linkshareimg from "@/assets/project1.jpg";
import cryptorankimg from "@/assets/project2.jpg";
import notebookimg from "@/assets/project3.jpg";
import portfolioimg from "@/assets/project4.jpg";


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
          ],
          id: "linkshare",
          image: linkshareimg,
          source_code: "https://github.com/iamsuryasonar/linkshare.git",
          build_info:
            "Built using NodeJs, Firebase Database, Vuetify, VueJs, Vue Router and Vuex.",
          title: "LinkShare",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A,obcaecati provident perferendis repellat natus quibusdam incidunt expedita quisquam dolore necessitatibus corporis iure distinctio nihil vel quidem deserunt est id quaerat.",
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
          source_code: "https://www.instagram.com/CryptoRank.git",
          build_info: "Built using Java, XML, Volley library and Coincap Api.",
          title: "CryptoRank",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A,obcaecati provident perferendis repellat natus quibusdam incidunt expedita quisquam dolore necessitatibus corporis iure distinctio nihil vel quidem deserunt est id quaerat.",
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
          source_code: "https://www.github.com/NoteBook.git",
          build_info: "Built using Java, XML and Firebase Database.",
          title: "NoteBook",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A,obcaecati provident perferendis repellat natus quibusdam incidunt expedita quisquam dolore necessitatibus corporis iure distinctio nihil vel quidem deserunt est id quaerat.",
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
          build_info:
            "Built using NodeJs, CSS, VueJs.",
          title: "Portfolio",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A,obcaecati provident perferendis repellat natus quibusdam incidunt expedita quisquam dolore necessitatibus corporis iure distinctio nihil vel quidem deserunt est id quaerat.",
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

    downloadresume(){
      console.log("resume in making")
    }
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
  background-color: aquamarine;
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
  height: 100vh;
}

/* <--------first page--------> */

.firstpage {
  z-index: 0;
  position: relative;
  height: 115vh;
  background-image: url("../assets/firstpagebackground.jpg");
  background-size: cover;
  background-attachment: fixed;
}
.bg-text {
  position: absolute;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.514);
  color: white;
  font-weight: bold;
  border: 3px solid #f1f1f1;
  width: 60%;
  padding: 1rem 0;
  text-align: center;
}

.bg-text .name {
  font-family: "Architects Daughter", cursive;
  color: yellow;
  font-size: 2.8rem;
}
.bg-text .cs {
  border-bottom: 2px solid yellow;
}

/* <--------about me section--------> */

.aboutme {
  height: auto;
  position: relative;
  z-index: 1;
  background-color: hsl(355, 73%, 48%);
  clip-path: polygon(0 5vw, 100% 0, 100% 100%, 0% 100%);
  margin-top: -5vw;
  margin-bottom: -5vw;
}
.aboutmecontainer {
  margin: 20% auto;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: #f1f1f1;
}
.aboutmetitle{
  margin-top: 3.5rem;
}
.aboutmewrapper {
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
p {
  font-size: 1.5rem;
  margin: 2rem auto;
  text-align: justify;
}
blockquote {
  font-size: 1.2rem;
}
.aboutmetitle {
  font-family: "Short Stack", cursive;
  font-size: 3rem;
  border-bottom: 2px solid yellow;
}
.profilepicture img {
  margin-top: 8rem;
  padding: 1rem;
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  box-shadow: 5px 15px 30px -20px rgb(3, 1, 0);
}

/* <--------project section--------> */
.third {
  height: auto;
  position: relative;
  z-index: 1;
  clip-path: polygon(0 5vw, 100% 0, 100% 100%, 0% 100%);
  margin-top: -5vw;
  background-color: #1bf5f0;
}
.projectcontainer {
  width: 90%;
  margin: 8rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.projectcontainer header p {
  margin-top: 3.5rem;
  font-family: "Short Stack", cursive;
  font-size: 3rem;
  border-bottom: 2px solid yellow;
}

.projectwrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 2rem auto;
  width: 100%;
}
.projectimages {
  padding: 1rem;
  width: 17rem;
  height: 17rem;
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
.button {
  font-size: 20px;
  color: aliceblue;
  text-decoration: none;
  padding: 8px 12px;
  color: #252934;
  margin: auto;
  margin-top: 1rem;
  background-color: yellow;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  border: none;

  outline: 2px solid rgb(0, 31, 31);
  outline-offset: -.15em;
}

.projecticons {
  font-size: 30px;
  margin-top: 2rem;
  /* flex is not working */
  display: flex;
  flex-direction: row;
}
.projecticons i {
  margin: 1rem 1rem;
}

.projecttitle {
  font-size: 2rem;
  margin: 0;
}

.build-with {
  font-size: 20px;
}

/* <--------contact section--------> */
.forth {
  width: auto;
  min-height: 115vh;
  position: relative;
  z-index: 2;
  clip-path: polygon(0 5vw, 100% 0, 100% 100%, 0% 100%);
  margin-top: -5vw;
  background-color: #252934;
}

.contactcontainer {
  margin: 8rem auto;
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.contact-icons {
  margin-top: 10%;
  display: flex;
  flex-direction: row;
  font-size: 30px;
  margin-left: auto;
}

.contact-icons i {
  margin: 0 1rem;
  color: white;
  cursor: pointer;
}

.contact-icons i:hover {
  color: cyan;
}

.contactme {
  color: aliceblue;
}
.contactp {
  font-size: 3rem;
  border-bottom: 1px solid yellow;
}
.emailp {
  word-wrap: break-word;
  margin-top: 7rem;
  text-align: left;
  font-size: 1.5rem;
}
.mail_to{
  font-size: 2rem;
  text-decoration: none;
  color: yellow;
}

.mail_to:hover {
  border-bottom: 1px solid yellow;
}

/* <--------footer--------> */

.footer {
  width: 100%;
  height: auto;
  background-color: #252934;
  outline: none;
  margin-top: -2px;
}
.footer p {
  text-align: center;
  margin: 0px;
  font-size: 1.5rem;
  color: aliceblue;
}
.footer .heart {
  color: red;
}

/* 1020px and below */
@media screen and (max-width: 1020px) {
  /* <------firstpage------> */
  .bg-text {
    width: 80%;
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

  /* <------projectpage------> */
  .projectcontainer {
    width: 90%;
    align-items: center;
  }
  .projectwrapper {
    flex-wrap: wrap;
    justify-content: center;
  }
  .profilepicture img {
    margin-top: 2rem;
  }
  .icon-title-button-wrapper {
    margin-left: 0;
  }
}

/* 700px and below */
@media screen and (max-width: 700px) {
  /* <------firstpage------> */
  .bg-text {
    width: 95%;
  }

  /* <------aboutmepage------> */
  .profilepicture img {
    margin-top: 2rem;
  }
  .aboutmecontainer {
    flex-wrap: wrap;
    justify-content: center;
  }

  /* <------projectpage------> */
  .projectcontainer {
    width: 90%;
    align-items: center;
  }
  .icon-title-button-wrapper {
    margin-left: 0;
  }
}
</style>
