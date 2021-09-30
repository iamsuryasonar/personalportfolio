<template>
  <nav id="navbar">
    <div class="nav-wrapper">
      <div>
        <p class="name">
          Surya Sonar
        </p>
      </div>

      <div class="about-project-contact">
        <a href="#aboutsection"><p class="about">About</p></a>
        <a href="#projectsection">
          <p class="projects">
            Projects
          </p>
        </a>
        <a href="#contactsection">
          <p class="contacts">
            Contacts
          </p>
        </a>
      </div>
      <div class="menuiconwrapper" @click="menu = !menu">
        <div class="barsicon" v-if="!menu">
          <i id="menuopenbutton" class="fas fa-bars"></i>
        </div>
        <div class="barsicon" v-if="menu">
          <i id="menuclosebutton" class="fas fa-times"></i>
        </div>
      </div>
    </div>
  </nav>
  <div class="menuoverlay" v-if="menu">
    <div class="menuoverlaywrapper">
      <div class="menucontents">
        <a href="#aboutsection">
          <p @click="menu = !menu" id="about">About</p>
        </a>
        <a href="#projectsection">
          <p @click="menu = !menu">
            Projects
          </p>
        </a>
        <a href="#contactsection">
          <p @click="menu = !menu">
            Contacts
          </p>
        </a>
      </div>
      <div class="menusocialicons">
        <a :href="linkedin">
          <i @click="menu = !menu" class="fab fa-linkedin"></i
        ></a>
        <a :href="instagram">
          <i @click="menu = !menu" class="fab fa-instagram"></i
        ></a>
        <a :href="github">
          <i @click="menu = !menu" class="fab fa-github"></i
        ></a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavBar",
  component: {},

  data() {
    return {
      menu: false,
      linkedin: "https://www.linkedin.com/in/iamsuryasonar",
      instagram: "https://www.instagram.com/iamsuryasonar",
      github: "https://www.github.com/iamsuryasonar",
    };
  },
  methods: {},
};
</script>
<style scoped>
/* <----title (name) font don't delete-----> */
@import url("https://fonts.googleapis.com/css2?family=Amarante&display=swap");

#navbar {
  background-color: #0000001f;
  position: fixed;
  width: 100%;
  z-index: 222;
}
#navbar .nav-wrapper {
  height: 40px;
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 2rem;
}

#navbar p {
  font-size: 1.5rem;
  color: #ffffff;
  cursor: default;
}

#navbar .name {
  font-family: "Amarante", cursive;
  font-size: 2.5rem;
  color: #ffffff;
  cursor: default;
}

/* <-----------menu button and overlay--------------> */
.menuiconwrapper {
  display: none;
}
#menuclosebutton,
#menuopenbutton {
  font-size: 2.5rem;
  color: #ffffff;
}

.menuoverlay {
  position: fixed;
  height: 400px;
  width: 100vw;
  background-color: black;
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.menuoverlaywrapper {
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.menucontents a,
.menusocialicons a {
  text-decoration: none;
  color: white;
}

.menucontents p {
  margin: 1rem auto;
  text-align: center;
}

.menucontents p:hover {
  border-bottom: 1px solid yellow;
}

.menucontents,
.menusocialicons {
  font-size: 2rem;
  color: white;
}
.menusocialicons i {
  margin: 1rem 1rem;
}
/* <----------------------------------------------------> */

.about-project-contact {
  width: 40%;
  margin-right: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.about-project-contact a {
  text-decoration: none;
}
.about-project-contact p:hover {
  border-bottom: 1px solid yellow;
}
/* 700px and above */
@media screen and (min-width: 700px) {
  .menuoverlay {
    display: none;
  }
}
/* 1020px and below */
@media screen and (max-width: 1020px) {
  .about-project-contact {
    width: 50%;
  }
}
/* 700px and below */
@media screen and (max-width: 700px) {
  .menuiconwrapper {
    display: block;
  }
  #navbar .name {
    font-size: 2rem;
  }
  .about-project-contact {
    display: none;
  }
}
</style>
