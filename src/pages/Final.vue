<template>
  <div class="final">
    <router-link
      :to="{ name: 'home' }"
      tag="button"
      class="final__button-home"
    >
      <img
        src="@/assets/images/icons/home-icon-white.png"
        alt="Home"
        class="final__button-home-icon"
      >
    </router-link>

    <div class="final__content">
      <div class="final__content-text">
        <div class="final__percent-box">
          <div class="final__percent-item">
            <p class="final__percent-number">
              {{ percentageOf(counter.sad) }} %
            </p>
            <p class="final__percent-text">
              Препарат 1
            </p>
          </div>
          <div class="final__percent-item">
            <p class="final__percent-number">
              {{ percentageOf(counter.happy) }} %
            </p>
            <p class="final__percent-text">
              Препарат 2
            </p>
          </div>
          <div class="final__percent-item">
            <p class="final__percent-number">
              {{ percentageOf(counter.heart) }} %
            </p>
            <p class="final__percent-text">
              Препарат 3
            </p>
          </div>
        </div>

        <div class="final__info">
          <h3 class="final__info-title">
            Ваш результат:
            <p class="final__info-title-bold">
              «Что я здесь делаю?»
            </p>
          </h3>
          <p class="final__info-subtitle">
            Это тестовое задание, так что не будем углубляться в глубины проблем фармацевтов.
          </p>
        </div>
      </div>

      <div class="final__corner-image">
        <img src="@/assets/images/backgrounds/final-background.jpg" alt="Corner image">
      </div>
    </div>

    <div class="final__button-bottom">
      <router-link
        :to="{ name: 'game' }"
        tag="button"
        class="btn final__button-retry"
      >
        Попробовать еще
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Final',
  data() {
    return {
      counter: this.$route.params.counter || {},
    };
  },
  created() {
    if (!this.$route.params.counter) {
      this.$router.push({
        name: 'game',
      });
    }
  },
  methods: {
    percentageOf(value) {
      const { sad, happy, heart } = this.counter;
      const total = sad + happy + heart;

      return Math.round((value * 100) / total);
    }
  },
}
</script>

<style lang="scss">
  .final {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;

    &__button-home {
      position: absolute;
      left: 50px;
      top: 70px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 70px;
      height: 70px;
      border-radius: 50%;
      border-color: transparent;
      background: linear-gradient(90deg, rgba(45,133,80,1) 0%, rgba(94,110,194,1) 100%);
    }

    &__corner-image {
      max-width: 710px;
      width: 100%;
      height: 100%;
      max-height: 760px;
      margin-left: auto;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &__content {
      flex-grow: 1;
      display: flex;
      flex-direction: column-reverse;
      @media (min-width: 1200px) {
        flex-direction: row;
      }

      &-text {
        align-self: center;
        flex-grow: 1;
        max-width: 600px;
        @media (min-width: 1200px) {
          margin-left: 9%;
        }
      }
    }

    &__percent-box {
      display: flex;
      justify-content: space-around;
    }

    &__percent-item {
      color: $teva-dark-gray;
      text-align: center;
    }

    &__percent-number {
      font-size: 48px;
      font-weight: 300;
      line-height: 59px;
      margin-bottom: 15px;
    }

    &__percent-text {
      font-size: 16px;
      font-weight: 600;
      line-height: 20px;
    }

    &__info {
      &::before {
        display: block;
        content: "";
        width: 100%;
        max-width: 580px;
        border-bottom: 2px solid #d9d9d9;
        margin-top: 50px;
        margin-bottom: 40px;
      }

      &-title {
        margin: unset;
        color: $not-so-dark;
        font-size: 40px;
        font-weight: 600;
        line-height: 44px;

        &-bold {
          font-weight: 900;
        }
      }

      &-subtitle {
        max-width: 550px;
        margin-top: 20px;
        color: $teva-dark-gray;
        font-weight: 300;
        font-size: 24px;
        line-height: 29px;
      }
    }

    &__button-bottom {
      padding: 20px 130px 84px;
    }

    &__button-retry {
      width: 100%;
      max-width: 270px;
      height: 60px;
      font-size: 24px;
      letter-spacing: 0.6px;
      white-space: nowrap;
      background: linear-gradient(90deg, rgba(217,217,217,1) 0%, rgba(161,161,161,1) 100%);
    }
  }
</style>
