<template>
   <div id="app">
      <b-navbar toggleable="md" class="appBar" type="dark" variant="dark">
         <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
         <b-collapse id="nav-collapse" is-nav>
            <div class="search-wrap justify-content-around">
               <div class="d-flex">
                  <router-link to="/">
                     <img src="./assets/images/navbar-img.png" alt=""
                  /></router-link>

                  <form id="quicksearch" method="post">
                     <input type="hidden" name="do" value="search" />
                     <input type="hidden" name="subaction" value="search" />
                     <div class="search-box ">
                        <input
                           :style="styleInput"
                           id="story"
                           name="story"
                           placeholder="Поиск фильмов..."
                           type="text"
                           autocomplete="off"
                        />
                        <button type="submit" title="Найти">
                           <span
                              ><img src="./assets/images/magnify.svg" alt=""
                           /></span>
                        </button>
                     </div>
                  </form>
               </div>
               <div class="d-flex auhtorazation">
                  <button @click.prevent="confirm">
                     Регистрация</button
                  ><button>Авторизация</button>
               </div>
            </div>
         </b-collapse>
      </b-navbar>
      <div class="container">
         <carousel-3d
            :disable3d="true"
            :space="150"
            :clickable="false"
            :controls-visible="true"
            :display="7"
         >
            <slide v-for="(slide, i) in slides" :index="i" :key="i">
               <b-card
                  overlay
                  :img-src="slide.sliderimage"
                  img-alt="Card Image"
                  text-variant="white"
               >
                  <div>{{ slide.slidertitle }}</div>
               </b-card>
            </slide>
         </carousel-3d>
         <div class="app-bar-home mt-5 ">
            <button>Главная</button>
            <button>Жанры</button>
            <button>Фильмы</button>
            <button>Сериалы</button>
            <button>Мультфильмы</button>
            <button>
               Аниме
            </button>
            <button>
               Книги
            </button>
         </div>
         <b-row>
            <film-news />
            <b-col
               class="mt-1 mob"
               style="box-shadow: -2em 1em 2rem black;"
               cols="9"
            >
               <router-view />
            </b-col>
         </b-row>
      </div>
   </div>
</template>

<script>
import FilmNews from "./components/FilmNews";

export default {
   components: {
      FilmNews,
   },
   data() {
      return {
         slides: 15,
         slides: [
            {
               sliderimage:
                  "https://jk.hdfilm.ws/uploads/posts/2020-05/1588424012-1324477029.jpg",
               slidertitle: "Магия зверя",
            },
            {
               sliderimage:
                  "https://jk.hdfilm.ws/uploads/posts/2020-05/1589284347-1697035818.jpg",
               slidertitle: "Магия зверя",
            },
            {
               sliderimage:
                  "https://jk.hdfilm.ws/uploads/posts/2020-05/1588424042-1804768109.jpg",
               slidertitle: "Время охоты",
            },
            {
               sliderimage:
                  "https://jk.hdfilm.ws/uploads/posts/2020-05/1588423983-437861353.jpg",

               slidertitle: "Обожание",
            },
            {
               sliderimage:
                  "https://jk.hdfilm.ws/uploads/posts/2020-05/1588423993-1836488033.jpg",
               slidertitle: "Обожание",
            },
            {
               sliderimage:
                  "https://jk.hdfilm.ws/uploads/posts/2020-05/1588423976-513961094.jpg",
               slidertitle: "Обожание",
            },
            {
               sliderimage:
                  "https://jk.hdfilm.ws/uploads/posts/2020-05/1588423998-1974349528.jpg",
               slidertitle: "Обожание",
            },
            {
               sliderimage:
                  "https://jk.hdfilm.ws/uploads/posts/2020-05/1588423970-954610377.jpg",
               slidertitle: "Обожание",
            },
            {
               sliderimage:
                  "https://jk.hdfilm.ws/uploads/posts/2020-05/1588423975-809174196.jpg",
               slidertitle: "Обожание",
            },
            {
               sliderimage:
                  "https://jk.hdfilm.ws/uploads/posts/2020-05/1588423993-409642847.jpg",
               slidertitle: "Обожание",
            },
            {
               sliderimage:
                  "https://jk.hdfilm.ws/uploads/posts/2020-05/1588424016-1864251295.jpg",
               slidertitle: "Обожание",
            },
            {
               sliderimage:
                  "https://jk.hdfilm.ws/uploads/posts/2020-03/1584195521-764991777.jpg",
               slidertitle: "Обожание",
            },
            {
               sliderimage:
                  "https://jk.hdfilm.ws/uploads/posts/2020-05/1588535590-1327277733.jpg",
               slidertitle: "Обожание",
            },
            {
               sliderimage:
                  "https://jk.hdfilm.ws/uploads/posts/2020-04/1587218436-266537754.jpg",
               slidertitle: "Обожание",
            },
         ],
         styleInput: {
            outline: "none",
            background: "transparent",
            border: 0,
         },
      };
   },
   methods: {
      confirm() {
         this.$router.push("/confirm");
      },
   },
};
</script>

<style lang="scss">
@import "node_modules/bootstrap/scss/bootstrap";
@import "node_modules/bootstrap-vue/src/index.scss";
@media (max-width: 769px) {
   .search-wrap {
      display: contents !important;
   }
}
@media (max-width: 1025px) {
   .left-column {
      display: none !important;
   }
}
@media (max-width: 500px) {
   .search-box {
      display: none !important;
   }
}

.auhtorazation {
   button:first-child {
      border: 0;
      background: transparent;
      color: white;
      outline: none;
      &:hover {
         color: rgb(226, 226, 39);
      }
   }
   button:last-child {
      display: inline-block;
      vertical-align: middle;
      cursor: pointer;
      color: #000;
      border: 0;
      background-color: #ffc100 !important;
      padding: 10px;
      height: 50px;
      margin-top: 10px;
      margin-left: 10px;
      border-radius: 20px;
      outline: none;
   }
}
.appBar {
   background: #1a2025 !important;
   padding: 2.6rem 0rem;
   &:before {
      content: "";
      position: absolute;
      background: rgb(114, 11, 11);
      width: 100%;
      bottom: 0;
      height: 6px;
   }
}
input {
   color: white;
}
.search-box {
   display: flex;
   justify-content: space-between;
   width: 100%;
   margin-top: 10px;
   padding: 10px;
   background-color: #444;
   box-shadow: none;
   color: #fff;
   border-radius: 20px;
   button {
      width: 40px;
      border: 0;
      padding: 0 !important;
      background-color: transparent !important;
      color: #ccc !important;
   }
}

.search-wrap {
   margin: 0;
   padding: 0;
   outline: none;
   display: flex;
   box-sizing: border-box;
   width: 100%;
   position: absolute;
}
body {
   background: #3a6186; /* fallback for old browsers */
   background: -webkit-linear-gradient(
      to right,
      #89253e,
      #3a6186
   ); /* Chrome 10-25, Safari 5.1-6 */
   background: linear-gradient(
      to right,
      #89253e,
      #3a6186
   ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
