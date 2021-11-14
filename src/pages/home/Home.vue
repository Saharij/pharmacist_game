<template>
  <div class="home">
    <div class="home__wrapper">
      <div class="home__info-block">
        <div class="home__info-text">
          <p class="home__subhead">
            Добро пожаловать в игру
          </p>
          <h1 class="home__title">
            Помоги
            <span class="home__title--uppercase">
              Фармацевту
            </span>
          </h1>
        </div>
        <div class="home__button">
          <router-link
            :to="{ name: 'game' }"
            tag="button"
            class="btn home__button-start"
          >
            Начать
          </router-link>
        </div>
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
  $indent-left: 1px;

  .home {
    position: relative;
    height: 100%;
    background-image: url(../../assets/images/backgrounds/main-background.jpg);
    background-size: cover;
    background-position: center;

    &__wrapper {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      left: 7.6%;
      width: 100%;
      height: 100%;
      max-width: 860px;
      max-height: 830px;
      background-image: url(../../assets/images/backgrounds/ellipse-background.png);
      background-position: center;
    }

    &__info-block {
      display: flex;
      flex-direction: column;
      margin-top: 77px;
      max-width: 580px;
    }

    &__info-text {
      padding-left: 40px;
    }

    &__subhead {
      color: #fff;
      font-size: 35px;
      font-weight: 200;
      line-height: 41px;
      letter-spacing: 0.2px;
      margin-bottom: 29px;
      text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    }

    &__title {
      color: white;
      font-size: 60px;
      font-weight: 700;
      letter-spacing: 0.2px;

      &--uppercase {
        text-transform: uppercase;
      }
    }

    &__button {
      margin: 110px auto 0;

      &-start {
        font-size: 36px;
        font-weight: 700;
        text-align: center;
        color: #8e9ad5;
        width: 391px;
        height: 90px;
        border-radius: 100px;
        border-color: transparent;
        font-family: 'Montserrat', sans-serif;

        &:hover {
          cursor: pointer;
        }
      }
    }
  }
</style>
