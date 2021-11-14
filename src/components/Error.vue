<template>
  <div class="error">
    <p class="error__text">
      Oops! Something went wrong.
    </p>
    <button
      @click="onReload"
      class="btn error__button"
    >
      Try again
    </button>
  </div>
</template>

<script>
  export default {
    name: 'Error',
    props: {
      onReload: {
        type: Function,
        required: true,
      }
    }
  }
</script>

<style lang="scss">
  .error {
    background-color: #ffacaf1c;
    padding: 24px 48px;
    border-radius: 4px;
    border: 1px solid #fc9cb9;
    text-align: center;

    &__text {
      font-size: 18px;
      margin-bottom: 24px;
      color: #8e9ad3;
    }

    &__button {
      width: 160px;
      height: 60px;
      background-color: #ff000050;
    }
  }
</style>
