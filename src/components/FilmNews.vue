<template>
   <b-col class="left-column" align-self="stretch">
      <h2>Обновление сериалов</h2>
      <ul>
         <li v-for="(newfilm, i) in news" :key="i">
            <div class="news-films">
               <p>{{ newfilm.slidertitle }}</p>
               <p>3 сезон 6 серия</p>
            </div>
         </li>
      </ul>
      <div class="mt-5">
         <h2 style="display: inline">Последние комментарии</h2>
      </div>
   </b-col>
</template>

<script>
export default {
   data() {
      return {
         news: [
            {
               slidertitle: "Магия зверя",
            },
            {
               slidertitle: "Вражеские линии",
            },
            {
               slidertitle: "Время охоты",
            },
            {
               slidertitle: "Обожание",
            },
            {
               slidertitle: "Магия зверя",
            },
            {
               slidertitle: "Вражеские линии",
            },
            {
               slidertitle: "Время охоты",
            },
            {
               slidertitle: "Обожание",
            },
            {
               slidertitle: "Магия зверя",
            },
            {
               slidertitle: "Вражеские линии",
            },
            {
               slidertitle: "Время охоты",
            },
            {
               slidertitle: "Обожание",
            },
         ],
      };
   },
};
</script>

<style lang="scss" scoped></style>
