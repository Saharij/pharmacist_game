<template>
  <div class="home">
    <div class="home__intro-block">
      <p>
        Добро пожаловать в игру
      </p>
      <h1>
        Помоги
        <span>
          Фармацевту
        </span>
      </h1>
      <button
        type="button"
      >
        <router-link to="/game">
          Начать
        </router-link>
      </button>
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
    background-image: url(../images/Group.jpg);
    background-size: cover;
    background-position: center;

    &__intro-block {
      position: absolute;
      width: 100%;
      height: 100%;
      max-width: 860px;
      max-height: 860px;
      background-image: url(../images/Ellipse.svg);
      background-position: center;
    }
  }
</style>