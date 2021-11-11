<template>
  <div class="final">
    <div class="final__icon-box">
    </div>
    <router-link :to="{ name: 'home' }" tag="button">
      <img src="@/assets/images/icons/home-icon-white.png" alt="Home">
    </router-link>
    <div class="percent">
      <p>
        {{ percentageOf(counter.sad) }} %
      </p>
      <p>
        Препарат 1
      </p>
    </div>
    <div class="percent">
      <p>
        {{ percentageOf(counter.happy) }} %
      </p>
      <p>
        Препарат 2
      </p>
    </div>
    <div class="percent">
      <p>
        {{ percentageOf(counter.heart) }} %
      </p>
      <p>
        Препарат 3
      </p>
    </div>
    <router-link :to="{ name: 'game' }" tag="button">
      Попробовать еще
    </router-link>
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
      
      return (value * 100) / total;
    }
  },
}
</script>

<style lang="scss">

</style>
