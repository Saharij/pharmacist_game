<template>
  <div class="game">
    <div class="game__aside">
      <div class="game__aside-links">
        <router-link :to="{ name: 'home' }" tag="button" class="game__aside-links-box">
          <img src="@/assets/images/icons/home-icon-purple.png" alt="Home" class="game__aside-links-home">
        </router-link>
        <button class="game__aside-links-box" @click="resetGame"> 
          <img src="@/assets/images/icons/retry-icon.png" alt="Retry" class="game__aside-links-retry">
        </button>
      </div>
      <div class="game__aside-params">
        <p>Параметри:</p>
        <div class="game__aside-icons">
          <div class="game__aside-icons-box">
            <img src="@/assets/images/icons/sad-icon.png" alt="Sad icon" class="game__aside-icons-item">
            {{counter.sad}}
          </div>
          <div class="game__aside-icons-box">
            <img src="@/assets/images/icons/happy-icon.png" alt="Happy icon" class="game__aside-icons-item">
            {{counter.happy}}
          </div>
          <div class="game__aside-icons-box">
            <img src="@/assets/images/icons/heart-icon.png" alt="Heart icon" class="game__aside-icons-item">
            {{counter.heart}}
          </div>
        </div>
      </div>
      <div class="game__aside-footer">
        <p class="game__aside-turns-counter">
          Осталось в очереди:
          <span>
            {{step}}/{{users.length}}
          </span>
        </p>
      </div>
    </div>

    <div class="game__main">
      <div class="game__main-body">
        <Card
          v-if="users.length"
          :user="users[step - 1]"
        />
      </div>
      <div class="game__main-buttons">
        <button @click="handleCounterChange('sad')" class="game__main-buttons-item game__main-buttons-lilac">
          Препарат 1
        </button>
        <button @click="handleCounterChange('happy')" class="game__main-buttons-item game__main-buttons-blue">
          Препарат 2
        </button>
        <button @click="handleCounterChange('heart')" class="game__main-buttons-item game__main-buttons-yellow">
          Препарат 3
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import { callApi } from '../../api';
  import Card from '../../components/card/Card.vue';

  export default {
    name: 'Game',
    components: {
      Card,
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
      };
    },
    created() {
      callApi('users')
        .then(response => {
          this.users = response;
        })
    },
    methods: {
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
    height: 100%;
    display: flex;

    &__aside {
      height: 100%;
      width: 470px;
      margin-right: unset;
      background-image: url(../../assets/images/backgrounds/aside-background.png);

      &-links {
        &-box {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          border-color: transparent;
          background-color: white;
        }

        &-home {
          width: 32px;
          height: 35px;
        }

        &-retry {
          width: 42px;
          height: 32px;
        }
      }

      &-icons-item {
        width: 60px;
        height: 60px;
        background-size: cover;
      }
    }

    &__main {
      display: flex;
      justify-content: center;
      margin-right: auto;
      margin-left: auto;
      flex-direction: column;

      &-card {
        width: 540px;
        height: 590px;
        background-color: red;
        border-radius: 40px;
        margin-bottom: 150px;
      }

      &-buttons-item {
        width: 280px;
        height: 90px;
        border-color: transparent;
        margin-right: 40px;
        border-radius: 100px;

        &:last-child {
          margin-right: unset;
        }
      }

      &-buttons-lilac {
        background-image: linear-gradient(#CA57FD, #8049C7);
      }

      &-buttons-blue {
        background-image: linear-gradient(#0CC4FA, #169AE4);
      }

      &-buttons-yellow {
        background-image: linear-gradient(#FFD748, #C3C70B, #CAC6AB, #D3E9E1);
      }
    }
  }
</style>
