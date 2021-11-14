<template>
  <div class="game">
    <div class="game__aside">
      <router-link
        :to="{ name: 'home' }"
        tag="button"
        class="game__aside-link game__aside-link-home"
      >
        <img
          src="@/assets/images/icons/home-icon-purple.png"
          alt="Home"
          class="game__aside-link-home-icon"
        >
      </router-link>
      <button
        class="game__aside-link game__aside-link-retry"
        @click="resetGame"
      >
        <img
          src="@/assets/images/icons/retry-icon.png"
          alt="Retry"
          class="game__aside-link-retry-icon"
        >
      </button>
      <div class="game__aside-params">
        <p class="game__aside-params-text">Параметри:</p>
        <div class="game__aside-icons">
          <div class="game__aside-icons-box">
            <img
              src="@/assets/images/icons/sad-icon.png"
              alt="Sad icon"
              class="game__aside-icons-item"
            >
            <span class="game__aside-params-number">
              {{counter.sad}}
            </span>
          </div>
          <div class="game__aside-icons-box">
            <img
              src="@/assets/images/icons/happy-icon.png"
              alt="Happy icon"
              class="game__aside-icons-item"
            >
            <span class="game__aside-params-number">
              {{counter.happy}}
            </span>
          </div>
          <div class="game__aside-icons-box">
            <img
              src="@/assets/images/icons/heart-icon.png"
              alt="Heart icon"
              class="game__aside-icons-item"
            >
            <span class="game__aside-params-number">
              {{counter.heart}}
            </span>
          </div>
        </div>
      </div>
      <div class="game__aside-footer">
        <p class="game__aside-turns-counter">
          Осталось в очереди:
        </p>
        <p>
          <span class="game__aside-turns-step">
            {{step}}
          </span>
          /
          <span class="game__aside-turns-length">
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
      <div class="game__main-buttons">
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
  import { callApi } from '../../api';
  import Card from '../../components/Card.vue';
  import Loading from '../../components/Loading.vue';
  import Error from '../../components/Error.vue';

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
      width: 470px;
      margin-right: unset;
      background-image: url(../../assets/images/backgrounds/aside-background.png);
      z-index: 1;

      &-link {
        position: absolute;
        width: 70px;
        height: 70px;
        border-radius: 50%;
        border-color: transparent;
        background-color: white;

        &-home {
          top: 70px;
          left: 50px;

          &-icon {
            width: 32px;
            height: 35px;
          }
        }

        &-retry {
          top: 70px;
          left: 158px;

          &-icon {
            width: 42px;
            height: 42px;
            transform: scale(5);
          }
        }
      }

      &-params {
        position: absolute;
        top: 430px;
        left: 40px;

        &-text {
          font-size: 36px;
          color: #fff;
          font-weight: 600;
          line-height: 44px;
        }

        &-number {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100px;
          height: 80px;
          color: #424242;
          font-size: 48px;
          font-weight: 700;
          line-height: 59px;
        }
      }

      &-icons {
        display: flex;
        flex-wrap: wrap;
        max-width: 420px;
        margin-top: 30px;

        &-box {
          position: relative;
          display: flex;
          justify-content: space-around;
          align-items: center;
          height: 80px;
          width: 190px;
          border-radius: 40px;
          margin-right: 20px;
          margin-bottom: 40px;
          background-color: #fff;

          &:last-child {
            margin-right: auto;
            margin-left: auto;
          }
        }

        &-item {
          width: 60px;
          height: 60px;
          background-size: cover;
        }
      }

      &-footer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 134px;
        font-size: 36px;
        color: #fff;
        background-color: #ffffff15;
      }

      &-turns-counter {
        font-weight: 200;
      }

      &-turns-step {
        font-weight: 700;
      }

      &-turns-length {
        font-weight: 300;
      }
    }

    &__main {
      position: relative;
      height: 100%;
      flex-grow: 1;
      display: flex;
      flex-direction: column;



      &-card {
        flex-grow: 1;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      &-buttons {
        display: flex;
        padding: 20px 20px 64px;

        &-item {
          width: 280px;
          height: 90px;
          border-color: transparent;
          font-size: 28px;
          font-weight: 700;
          cursor: pointer;
          margin-right: 40px;
          border-radius: 100px;

          &:last-child {
            margin-right: unset;
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

  .swipe-left {
    animation: slide-left-out 750ms ease-in-out 1 forwards;
  }

  .swipe-right {
    animation: slide-right-out 750ms ease-in-out 1 forwards;
  }

  .swipe-top {
    animation: slide-top-out 750ms ease-in-out 1 forwards;
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
