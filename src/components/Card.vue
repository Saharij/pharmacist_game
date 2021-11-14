<template>
  <div class="card">
    <img
      :src="user.img_url"
      :alt="`Person ${user.id}`"
      draggable="false"
      class="card__image"
    >
    <div class="card__body">
      <p class="card__body-title">
          {{user.name}}, {{user.age_formatted}}
      </p>
      <p class="card__body-description">
        {{user.description}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    user: {
      type: Object,
      required: true,
    }
  },
}
</script>

<style lang="scss">
  .card {
    width: 540px;
    height: 590px;
    background-color: $white;
    border-radius: 40px;
    box-shadow: 0px 0px 40px rgba(127, 127, 127, 0.4);

    &__image {
      border-top-left-radius: 40px;
      border-top-right-radius: 40px;
      height: 350px;
    }

    &__body {
      padding: 15px 50px 30px;

      &-title {
        font-size: 32px;
        font-weight: 700;
        line-height: 39.2px;
        color: $not-so-dark;
      }

      &-description {
        color: $teva-dark-gray;
        font-size: 24px;
        font-weight: 200;
        line-height: 27px;
        margin-top: 7px;
      }
    }
  }
</style>
