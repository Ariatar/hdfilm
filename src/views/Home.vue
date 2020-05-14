<template>
   <div>
      <film-list />
   </div>
</template>

<script>
import FilmList from "../components/FilmList";
export default {
   components: {
      FilmList,
   },
};
</script>

<style lang="scss">
@media (max-width: 555px) {
}
.film-list {
   img {
      max-width: 555px !important;
      max-height: 700px !important;
   }
}
.film-list {
   img {
      max-width: 195px;
      max-height: 311px;
   }
}
.left-column {
   ul {
      padding: 0;
      margin: 0;
      padding-top: 2px;
      li {
         padding: 0;
         padding-top: 8px;
      }
   }
}
.news-films {
   &:hover p {
      color: yellow;
   }
   background: rgb(27, 24, 24);
   width: 254.71px;
   border-radius: 5px;
   p {
      margin: 0;
      &:first-child {
         text-align: start;
         font-size: 14px;
         padding-left: 10px;
      }
      &:last-child {
         text-align: end;
         padding-right: 10px;
         padding-top: 2px;
         font-size: 14px;
      }
   }
}
.card-title {
   margin-bottom: 4px !important;
}
.card-body {
   h4,
   h6 {
      margin-left: 8px;
   }
   h4 {
      color: white;
      font-size: 16px;
   }
   h6 {
      color: grey;
      font-size: 16px;
   }
}

.col-9 {
   .card-body {
      padding: 0;
   }
}
.card {
   border: 0;
}
.col {
   h2 {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 15px;
      width: 268.71px;
      height: 56.4px;
      font-size: 20px;
      color: white;
      margin-top: 4px;
      background: black;
      margin-left: -15px;
   }
   ul {
      li {
         display: block;
      }
   }
}

@media (max-width: 450px) {
   .app-bar-home {
      &:after,
      &:before {
         content: "";
         width: 0 !important;
         height: 0 !important;
      }
      button {
         position: relative;
         display: block;
         width: 100%;
         &:last-child:before {
            position: absolute;
            content: "";
            background: rgb(231, 88, 88);
            width: 100%;
            height: 4px;
            left: 0;
            top: 100%;
         }
         &:after {
            position: absolute;
            content: "";
            background: rgb(231, 88, 88);
            width: 100%;
            height: 4px;
            left: 0;
            top: 0;
         }
      }
   }
}

.app-bar-home {
   position: relative;
   &:before {
      content: "";
      position: absolute;
      min-width: 100%;
      max-width: 100%;
      background: rgb(114, 11, 11);
      height: 6px;
   }
   &:after {
      content: "";
      position: absolute;
      min-width: 100%;
      max-width: 100%;
      left: 0;
      top: 50px;
      background: rgb(114, 11, 11);
      height: 6px;
   }
   padding-inline-start: 0;
   button {
      padding-left: 14px;
      border-right: 1px solid black !important;
      color: aliceblue;
      height: 50px;
      background: transparent;
      outline: none;
      border: 0;

      &:first-child {
         border: 0;
      }
      &:hover {
         background: rgb(114, 11, 11);
      }
   }

   margin-right: -15px !important;
   margin-left: -15px !important;
   padding: 0rem;
   margin: 0;
}

ul li {
   display: inline;
   padding: 15px;
   cursor: pointer;
   color: white;
}
.next {
   width: 70px !important;
   position: relative;
   height: 70px !important;
   right: px;
   left: 93%;
   z-index: 10000;
   border: 1px solid black;
   border-radius: 100%;
   display: flex;
   background: black;
   justify-content: center;
   &:hover {
      background: rgb(114, 11, 11);
      opacity: 1 !important;
      border: 0;
   }
   span {
      color: white;
   }
}
.prev {
   width: 70px !important;
   height: 70px !important;
   position: relative;

   z-index: 10000;
   border: 1px solid black;
   border-radius: 100%;
   display: flex;
   background: black;
   justify-content: center;
   &:hover {
      background: rgb(114, 11, 11);
      opacity: 1 !important;
      border: 0;
   }
   span {
      color: white;
   }
}
.carousel-3d-container {
   height: 190px !important;
   .carousel-3d-slide {
      padding: 10px;
      border: 0;
      background: transparent;
      .card {
         cursor: pointer;
         .card-img-overlay {
            top: auto !important;
         }
         .card-body {
            padding: 0;
            div {
               display: none !important;
               height: 1px !important;
            }
         }
         border: 4px solid rgb(20, 19, 19);
         &:hover {
            transition: all 0.1s !important;
            border: 7px solid rgb(114, 11, 11);

            .card-body {
               padding: 0;

               div {
                  display: inline-block !important;
                  opacity: 0.7;
                  background: black;
                  font-size: 16px;
                  display: flex;
                  justify-content: center;
                  text-align: center;
                  width: 120px;
                  height: 35px !important;
                  transition: 0.9s;
                  align-items: center;
               }
            }
         }
      }

      .title {
         font-size: 22px;
      }
   }
}
.carousel-3d-slide {
   border-width: 1px !important;
   width: 150px !important;
   height: 200px !important;
}
.carousel-3d-slider {
   border-width: 1px !important;
   width: 150px !important;
   height: 200px !important;
}
@media (min-width: 1200px) {
   #example,
   .container,
   .container-sm,
   .container-md,
   .container-lg,
   .container-xl {
      max-width: 1200px;
   }
}
.container {
   background: #2e2b2b;
   margin-top: 200px;
   border-top-left-radius: 10px;
   border-top-right-radius: 10px;
}
</style>
