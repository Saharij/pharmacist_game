<template>
  <div class="game">
    <div class="game__aside aside">
      <header class="aside__header">
        <router-link
          :to="{ name: 'home' }"
          tag="button"
          class="aside__header-link"
        >
          <img
            src="@/assets/images/icons/home-icon-purple.png"
            alt="Home"
            class="aside__header-icon-home"
          >
        </router-link>
        <button
          class="aside__header-link"
          @click="resetGame"
        >
          <img
            src="@/assets/images/icons/retry-icon.png"
            alt="Retry"
            class="aside__header-icon-retry"
          >
        </button>
      </header>
      <div class="aside__params">
        <p class="aside__params-text">Параметри:</p>
        <div class="aside__icons">
          <div class="aside__icons-box">
            <img
              src="@/assets/images/icons/sad-icon.png"
              alt="Sad icon"
              class="aside__icons-item"
            >
            <span class="aside__params-number">
              {{counter.sad}}
            </span>
          </div>
          <div class="aside__icons-box">
            <img
              src="@/assets/images/icons/happy-icon.png"
              alt="Happy icon"
              class="aside__icons-item"
            >
            <span class="aside__params-number">
              {{counter.happy}}
            </span>
          </div>
          <div class="aside__icons-box">
            <img
              src="@/assets/images/icons/heart-icon.png"
              alt="Heart icon"
              class="aside__icons-item"
            >
            <span class="aside__params-number">
              {{counter.heart}}
            </span>
          </div>
        </div>
      </div>
      <div class="aside__footer">
        <p class="aside__turns-counter">
          <span class="aside__turns-counter--desktop">Осталось в очереди:</span>
          <span class="aside__turns-counter--mobile">В очереди:</span>
        </p>
        <p>
          <span class="aside__turns-step">
            {{step}}
          </span>
          /
          <span class="aside__turns-length">
            {{users.length}}
          </span>
        </p>
      </div>
    </div>

    <div class="game__main">
      <Loading v-if="loading" />
      <div
        v-if="!loading"
        :class="[{ [`swipe-${direction}`]: direction }, 'game__main-card']"
      >
        <Error
          v-if="error"
          :onReload="fetchUsers"
        />
        <Card
          v-if="users.length"
          :user="users[step - 1]"
          v-hammer:swipe="handleSwipe"
        />
      </div>
      <div v-if="!loading && !error" class="game__main-buttons">
        <button
          @click="handleCounterChange('sad')"
          class="btn game__main-buttons-item game__main-buttons-lilac"
        >
          Препарат 1
        </button>
        <button
          @click="handleCounterChange('happy')"
          class="btn game__main-buttons-item game__main-buttons-blue"
        >
          Препарат 2
        </button>
        <button
          @click="handleCounterChange('heart')"
          class="btn game__main-buttons-item game__main-buttons-yellow"
        >
          Препарат 3
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import Card from '../components/Card.vue';
  import Error from '../components/Error.vue';
  import Loading from '../components/Loading.vue';
  import { callApi } from '../api';

  export default {
    name: 'Game',
    components: {
      Card,
      Loading,
      Error,
    },
    data() {
      return {
        step: 1,
        users: [],
        counter: {
          sad: 0,
          happy: 0,
          heart: 0,
        },
        direction: null,
        loading: true,
        error: false,
      };
    },
    created() {
      this.fetchUsers();
    },
    methods: {
      fetchUsers() {
        this.loading = true;

        callApi('users')
          .then(response => {
            this.users = response;
            this.loading = false;
            this.error = false;
          })
          .catch(() => {
            this.loading = false;
            this.error = true;
          })
      },
      handleCounterChange(counterType) {
        this.counter[counterType] += 1;

        if (this.step < this.users.length) {
          this.step += 1;
        } else {
          this.$router.push({
            name: "final",
            params: {
              counter: this.counter,
            },
          })
        }
      },
      handleSwipe({ offsetDirection }) {
        const direction = {
          2: 'left',
          4: 'right',
          8: 'top',
          16: 'bottom',
        }[offsetDirection];

        const sentiments = {
          top: 'happy',
          left: 'sad',
          right: 'heart',
        }

        switch(direction) {
          case 'top':
          case 'left':
          case 'right':
            this.direction = direction;
            setTimeout(() => {
              this.handleCounterChange(sentiments[direction]);
              this.direction = null;
            }, 750)
            break;
          default:
            return;
        }
      },
      resetGame() {
        this.counter.sad = 0;
        this.counter.happy = 0;
        this.counter.heart = 0;
        this.step = 1;
      }
    }
  }
</script>

<style lang="scss">
  .game {
    display: flex;
    height: 100%;

    &__aside {
      position: relative;
      height: 100%;
      width: 100%;
      max-width: 284px;
      display: flex;
      flex-direction: column;
      flex-shrink: 0;
      background-image: url(../assets/images/backgrounds/aside-background.png);
      z-index: 10;
      @media (min-width: 1200px) {
        max-width: 470px;
      }
    }

    &__main {
      position: relative;
      height: 100%;
      flex-grow: 1;
      display: flex;
      overflow: hidden;
      flex-direction: column;

      &-card {
        flex-grow: 1;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      &-buttons {
        display: flex;
        justify-content: center;
        padding: 20px 20px 64px;

        &-item {
          width: 100%;
          max-width: 280px;
          height: 90px;
          font-size: 28px;

          &:not(:last-child) {
            margin-right: 10px;
            @media (min-width: 1200px) {
              margin-right: 40px;
            }
          }

        }

        &-lilac {
          background: linear-gradient(266.19deg, #8049C7 0%, #CA57FD 100%);
        }

        &-blue {
          background: linear-gradient(266.19deg, #169AE4 0%, #0CC4FA 100%);
        }

        &-yellow {
          background: linear-gradient(90deg, #FFD748 0.02%, rgba(195, 199, 11, 0.96) 99.97%, #CAC6AB 99.98%, #D3E9E1 99.99%);
        }
      }
    }
  }

  .aside {
    &__header {
      padding: 70px 50px 100px;
      display: flex;

      &-link {
        width: 70px;
        height: 70px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        border-radius: 50%;
        border: none;
        background-color: $white;
        &:not(:last-child) {
          margin-right: 38px;
        }
      }

      &-icon-home {
        width: 36px;
        height: 32px;
      }

      &-icon-retry {
        width: 48px;
        height: 38px;
      }
    }


    &__params {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 40px;
      padding-right: 3px;

      &-text {
        color: $white;
        font-size: 36px;
        font-weight: 600;
        line-height: 44px;
      }

      &-number {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 100%;
        color: $teva-dark-gray;
        font-size: 48px;
        font-weight: 700;
        line-height: 59px;
      }
    }

    &__icons {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      width: 100%;
      margin-top: 30px;
      margin-left: -10px;
      margin-right: -10px;

      &-box {
        position: relative;
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 80px;
        width: 190px;
        margin-right: 10px;
        margin-left: 10px;
        border-radius: 40px;
        background-color: $white;
        box-shadow: 0px 0px 50px rgba(131, 42, 64, 0.4);
        &:not(:last-child) {
          margin-bottom: 40px;
        }
      }

      &-item {
        width: 60px;
        height: 60px;
        background-size: cover;
      }
    }

    &__footer {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 134px;
      font-size: 36px;
      color: $white;
      background-color: #ffffff15;
    }

    &__turns {
      &-counter {
        font-weight: 200;
        &--desktop {
          display: none;
          @media (min-width: 1200px) {
            display: block;
          }
        }
        &--mobile {
          display: block;
          @media (min-width: 1200px) {
            display: none;
          }
        }
      }

      &-step {
        font-weight: 700;
      }

      &-length {
        font-weight: 300;
      }
    }
  }

  .swipe {
    &-left {
      animation: slide-left-out 750ms ease-in-out 1 forwards;
    }

    &-right {
      animation: slide-right-out 750ms ease-in-out 1 forwards;
    }

    &-top {
      animation: slide-top-out 750ms ease-in-out 1 forwards;
    }
  }

  @keyframes slide-left-out {
    from {
      transform: translate(0, 0) rotate(0);
    }

    to {
      transform: translate(-100%, 0) rotate(-25deg);
    }
  }

  @keyframes slide-right-out {
    from {
      transform: translate(0, 0) rotate(0);
    }

    to {
      transform: translate(100%, 0) rotate(25deg);
    }
  }

  @keyframes slide-top-out {
    from {
      transform: translate(0, 0) rotate(0);
    }

    to {
      transform: translate(0, -100%) rotate(-25deg);
    }
  }
</style>
