<template>
  <div class="home">
    <div class="home__intro-block">
      <p class="home__text">
        Добро пожаловать в игру
      </p>
      <h1 class="home__title">
        Помоги
        <span class="home__title--uppercase">
          Фармацевту
        </span>
      </h1>
      <router-link :to="{ name: 'game' }" class="home__button" tag="button">
        Начать
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
}
</script>

<style lang="scss">
  .home {
    position: relative;
    height: 100%;
    background-image: url(../../assets/images/backgrounds/main-background.jpg);
    background-size: cover;
    background-position: center;

    &__intro-block {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 100%;
      height: 100%;
      max-width: 860px;
      max-height: 830px;
      background-image: url(../../assets/images/backgrounds/ellipse-background.png);
      background-position: center;
    }

    &__text {
      font-size: 35px;
      line-height: 41px;
      letter-spacing: 2%;
      color: #fff;
      box-shadow: #000 25%;
    }

    &__title {
      color: white;
      text-align: left;
      font-size: 60px;
      max-width: 580px;

      &--uppercase {
        text-transform: uppercase;
      }
    }

    &__button {
      font-family: 'Montserrat', sans-serif;
      font-size: 36px;
      color: #8e9ad5;
      width: 391px;
      height: 90px;
      border-radius: 100px;
      border-color: transparent;
      margin-top: 120px;

      &:hover {
        cursor: pointer;
      }
    }
  }
</style>