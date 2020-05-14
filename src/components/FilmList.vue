<template>
   <div>
      <h4 class="text-start pt-4 pb-3 pl-1" style="color: white">
         <span style="color: yellow">Новые</span> фильмы онлайн
      </h4>
      <b-row cols="1" cols-md="3" cols-sm="3" cols-lg="4">
         <b-col v-for="(film, i) in films" :key="i">
            <b-card
               class="film-list"
               style="background: transparent"
               :img-src="film.imgsrc"
               img-alt="Card Image"
               text-variant="white"
               :title="film.title"
               :sub-title="film.genre"
            >
            </b-card>
            ></b-col
         >
      </b-row>
   </div>
</template>

<script>
export default {
   data() {
      return {
         films: [
            {
               title: "Вражеские линии",
               genre: "2020, военный, история",
               rating: "*****",
               imgsrc:
                  "https://jk.hdfilm.ws/uploads/posts/2020-05/1588424012-1324477029.jpg",
            },
            {
               title: "Магия зверя ",
               genre: "2020, триллер, драма",
               rating: "*****",
               imgsrc:
                  "https://jk.hdfilm.ws/uploads/posts/2020-05/1589284347-1697035818.jpg",
            },
            {
               title: "Время охоты ",
               genre: "2020, боевик, криминал",
               rating: "*****",
               imgsrc:
                  "https://jk.hdfilm.ws/uploads/posts/2020-05/1588424042-1804768109.jpg",
            },
            {
               title: "Обожание  ",
               genre: "2019, мелодрама",
               rating: "*****",
               imgsrc:
                  "https://jk.hdfilm.ws/uploads/posts/2020-05/1588424025-1424776523.jpg",
            },
            {
               title: "Вражеские линии",
               genre: "2020, военный, история",
               rating: "*****",
               imgsrc:
                  "https://jk.hdfilm.ws/uploads/posts/2020-05/1588423983-437861353.jpg",
            },
            {
               title: "Магия зверя ",
               genre: "2020, триллер, драма",
               rating: "*****",
               imgsrc:
                  "https://jk.hdfilm.ws/uploads/posts/2020-05/1588423993-1836488033.jpg",
            },
            {
               title: "Время охоты ",
               genre: "2020, боевик, криминал",
               rating: "*****",
               imgsrc:
                  "https://jk.hdfilm.ws/uploads/posts/2020-05/1588423976-513961094.jpg",
            },
            {
               title: "Обожание  ",
               genre: "2019, мелодрама",
               rating: "*****",
               imgsrc:
                  "https://jk.hdfilm.ws/uploads/posts/2020-05/1588423998-1974349528.jpg",
            },
            {
               title: "Вражеские линии",
               genre: "2020, военный, история",
               rating: "*****",
               imgsrc:
                  "https://jk.hdfilm.ws/uploads/posts/2020-05/1588423970-954610377.jpg",
            },
            {
               title: "Магия зверя ",
               genre: "2020, триллер, драма",
               rating: "*****",
               imgsrc:
                  "https://jk.hdfilm.ws/uploads/posts/2020-05/1588423975-809174196.jpg",
            },
            {
               title: "Время охоты ",
               genre: "2020, боевик, криминал",
               rating: "*****",
               imgsrc:
                  "https://jk.hdfilm.ws/uploads/posts/2020-05/1588423993-409642847.jpg",
            },
            {
               title: "Обожание  ",
               genre: "2019, мелодрама",
               rating: "*****",
               imgsrc:
                  "https://jk.hdfilm.ws/uploads/posts/2020-05/1588424016-1864251295.jpg",
            },
            {
               title: "Вражеские линии",
               genre: "2020, военный, история",
               rating: "*****",
               imgsrc:
                  "https://jk.hdfilm.ws/uploads/posts/2020-03/1584195521-764991777.jpg",
            },
            {
               title: "Магия зверя ",
               genre: "2020, триллер, драма",
               rating: "*****",
               imgsrc:
                  "https://jk.hdfilm.ws/uploads/posts/2020-05/1588535590-1327277733.jpg",
            },
            {
               title: "Время охоты ",
               genre: "2020, боевик, криминал",
               rating: "*****",
               imgsrc:
                  "https://jk.hdfilm.ws/uploads/posts/2020-04/1587218436-266537754.jpg",
            },
            {
               title: "Обожание  ",
               genre: "2019, мелодрама",
               rating: "*****",
               imgsrc:
                  "https://jk.hdfilm.ws/uploads/posts/2020-04/1587218408-1906001127.jpg",
            },
         ],
      };
   },
};
</script>

<style lang="scss"></style>
