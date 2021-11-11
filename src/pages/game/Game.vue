<template>
  <div class="game">
    <div class="sidebar">
      <div class="sidebar__links">
        <router-link to="/" tag="button">
          <img src="images/home.png" alt="Home">
        </router-link>
        <router-link to="/game" tag="button">
          <img src="images/retry.png" alt="Retry">
        </router-link>
      </div>
      <div class="sidebar__params">
        <p>Параметри:</p>
        <div class="sidebar__icons">
          <div class="sidebar__icons-box">
            <img src="images/sad-icon.png" alt="Sad icon" class="sidebar__icons-item">
          </div>
          <div class="sidebar__icons-box">
            <img src="images/happy-icon.png" alt="Happy icon" class="sidebar__icons-item">
          </div>
          <div class="sidebar__icons-box">
            <img src="images/heart-icon.png" alt="Heart icon" class="sidebar__icons-item">
          </div>
        </div>
      </div>
    </div>
    <div class="field">
      Hello gamer
    </div>
  </div>
</template>

<script>

export default {
  name: 'Game',
}
</script>

<style lang="scss">
  .game {
    height: 100%;
  }

  .sidebar {
    height: 100%;
    width: 470px;

    &__icons-item {
      width: 60px;
      height: 60px;
      background-size: cover;
    }
  }
</style>
