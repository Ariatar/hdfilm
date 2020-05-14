<template>
   <div class="register">
      <div class="route pt-4">
         <ul>
            <li>Главная</li>
            <span style="color: white"> # </span>
            <li>Регистрация посетителя</li>
         </ul>
      </div>
      <h1>Регистрация</h1>
      <p>
         <span>Здравствуйте, уважаемый посетитель нашего сайта!</span> <br />
         Регистрация на нашем сайте позволит Вам быть его полноценным
         участником. Вы сможете оставлять свои комментарии, добавлять
         фильмы/сериалы в закладки и многое другое. В случае возникновения
         проблем с регистрацией, обратитесь к
         <span class="active-span">администратору</span>
         сайта.
      </p>
      <div class="register-input mt-5">
         <div class="d-flex" style="position: relative">
            <span style="color: white; width: 20%">Логин *</span>
            <b-input-group class="mb-2" style="max-width: 72%">
               <b-form-input
                  aria-label="Text input with checkbox"
               ></b-form-input>
            </b-input-group>

            <button class="check-login">
               Проверить Логин
            </button>
         </div>
         <div class="d-flex">
            <span style="color: white; width: 20%">Пароль *</span>
            <b-input-group class="mb-2 w-80" style="max-width: 72%">
               <b-form-input
                  aria-label="Text input with checkbox"
               ></b-form-input>
            </b-input-group>
         </div>
         <div class="d-flex">
            <span style="color: white; width: 20%">Повторите Пароль *</span>
            <b-input-group class="mb-2 w-80" style="max-width: 72%">
               <b-form-input
                  aria-label="Text input with checkbox"
               ></b-form-input>
            </b-input-group>
         </div>
         <div class="d-flex">
            <span style="color: white; width: 20%"> Ваш E-mail *</span>
            <b-input-group class="mb-2 w-80" style="max-width: 72%">
               <b-form-input
                  aria-label="Text input with checkbox"
               ></b-form-input>
            </b-input-group>
         </div>
         <div class="d-flex">
            <span style="color: white; width: 20%"> Вы робот? *</span>
            <b-input-group class="mb-2 w-80" style="max-width: 72%">
               <b-form-input
                  aria-label="Text input with checkbox"
               ></b-form-input>
            </b-input-group>
         </div>
         <button class="p-2 mt-5 register-button">Отправить</button>
      </div>
   </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.button {
   outline: none;
   background: rgb(114, 11, 11);
   padding: 0;
   margin-top: 1px;
   font-size: 15px;
   height: 80%;
   min-width: 200px;
   color: wheat;
   border-radius: 25px;
   border: 0;
}
@media (max-width: 769px) {
   .check-login {
      top: 18px !important;
   }
}
.check-login {
   z-index: 100;
   position: absolute;
   top: 0;
   left: 80%;
   bottom: 0;
   margin-top: 1px;
   height: 80%;
   @extend .register-button;
}
.active-span {
   color: rgb(114, 11, 11) !important;
   text-decoration: underline;
   cursor: pointer;
   &:hover {
      color: rgb(167, 167, 29) !important;
      text-decoration: none;
   }
}
.register-button {
   outline: none;
   background: rgb(114, 11, 11);
   font-size: 15px;
   min-width: 200px;
   color: wheat;
   border-radius: 25px;
   border: 0;
   &:hover {
      background: rgb(197, 12, 12);
      transition: all 0.8s;
   }
}
.route {
   ul {
      padding: 0;
      li {
         padding: 0;
         &:last-child {
            padding-left: 5px;
         }
      }
   }
}
@media (max-width: 768px) {
   .register-input {
      .d-flex {
         display: block !important;
      }
   }
}

.register {
   h1 {
      color: white;
   }
   p {
      color: white;
      span {
         color: white;
         font-weight: bold;
      }
   }
}
</style>
