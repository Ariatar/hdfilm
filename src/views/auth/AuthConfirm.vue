<template>
   <div style="max-height: 1200px; display: contents" class="auth-confirm mt-5">
      <h2>Общие правила на сайте</h2>
      <h4 class="mt-4">Общие правила на сайте:</h4>
      <p>
         Общие правила поведения на сайте: Начнем с того, что на сайте общаются
         сотни людей, разных религий и взглядов, и все они являются
         полноправными посетителями нашего сайта, поэтому если мы хотим чтобы
         это сообщество людей функционировало нам и необходимы правила. Мы
         настоятельно рекомендуем прочитать настоящие правила, это займет у вас
         всего минут пять, но сбережет нам и вам время и поможет сделать сайт
         более интересным и организованным.
      </p>
      <p>
         Начнем с того, что на нашем сайте нужно вести себя уважительно ко всем
         посетителям сайта. Не надо оскорблений по отношению к участникам, это
         всегда лишнее. Если есть претензии - обращайтесь к Админам или
         Модераторам (воспользуйтесь личными сообщениями). Оскорбление других
         посетителей считается у нас одним из самых тяжких нарушений и строго
         наказывается администрацией. У нас строго запрещен расизм, религиозные
         и политические высказывания. Заранее благодарим вас за понимание и за
         желание сделать наш сайт более вежливым и дружелюбным.
      </p>
      <h4>На сайте строго запрещено:</h4>
      <p>
         - сообщения, не относящиеся к содержанию статьи или к контексту
         обсуждения - оскорбление и угрозы в адрес посетителей сайта - в
         комментариях запрещаются выражения, содержащие ненормативную лексику,
         унижающие человеческое достоинство, разжигающие межнациональную рознь -
         спам, а также реклама любых товаров и услуг, иных ресурсов, СМИ или
         событий, не относящихся к контексту обсуждения статьи
      </p>
      <p>
         Давайте будем уважать друг друга и сайт, на который Вы и другие
         читатели приходят пообщаться и высказать свои мысли. Администрация
         сайта оставляет за собой право удалять комментарии или часть
         комментариев, если они не соответствуют данным требованиям. При
         нарушении правил вам может быть дано предупреждение. В некоторых
         случаях может быть дан бан без предупреждений. По вопросам снятия бана
         писать администратору. Оскорбление администраторов или модераторов
         также караются баном - уважайте чужой труд.
      </p>
      <div class="mt-5">
         <router-link to="/register"><button>Принимаю</button></router-link>
         <router-link to="/"><button>Не принимаю</button></router-link>
      </div>
   </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.auth-confirm {
   div {
      display: flex;
      justify-content: center;
      button {
         outline: none;
         background: rgb(114, 11, 11);
         padding: 0;
         margin: 4px;
         margin-top: 1px;
         font-size: 15px;
         height: 80%;
         min-width: 150px;
         color: wheat;
         border: 0;
         &:hover {
            background: rgb(197, 12, 12);
            transition: all 0.8s;
         }
      }
   }
   p {
      color: white;
   }
   h2,
   h4 {
      color: white;
   }
}
</style>
