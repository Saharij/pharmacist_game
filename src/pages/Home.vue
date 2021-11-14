<template>
  <div class="home">
    <div class="home__wrapper">
      <div class="home__info-block">
        <div class="home__info-text">
          <p class="home__prehead">
            Добро пожаловать в игру
          </p>
          <h1 class="home__title">
            Помоги
            <span class="home__title--uppercase">
              Фармацевту
            </span>
          </h1>
        </div>

        <router-link
          :to="{ name: 'game' }"
          tag="button"
          class="btn home__start-btn"
        >
          Начать
        </router-link>
      </div>
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
    background-image: url(../assets/images/backgrounds/main-background.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    &__wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      max-width: 860px;
      height: 100%;
      max-height: 830px;
      background-image: url(../assets/images/backgrounds/ellipse-background.png);
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      @media (min-width: 992px) {
        margin-left: 7.6%;
      }
    }

    &__info-block {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 76px;
      max-width: 580px;
    }

    &__info-text {
      padding-left: 40px;
    }

    &__prehead {
      margin-bottom: 28px;
      color: $white;
      font-size: 35px;
      font-weight: 200;
      line-height: 41px;
      letter-spacing: 0.2px;
      text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    }

    &__title {
      margin-bottom: 110px;
      color: $white;
      font-size: 60px;
      font-weight: 700;

      &--uppercase {
        letter-spacing: 5px;
        text-transform: uppercase;
      }
    }

    &__start-btn {
      width: 100%;
      max-width: 391px;
      height: 90px;
      color: #8e9ad5;
      font-size: 36px;
      font-family: 'Montserrat', sans-serif;
    }
  }
</style>
