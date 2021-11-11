<template>
  <div class="game__main-card">
    <img
      src="@/assets/images/people/person-1.jpg"
      alt="Person one"
      class="game__main-card-image"
    >
    <p>
      {{user.name}}, 19 років
      Бабуся приймає брендовий препарат від болю в суглобах, він допомагає,
      але занадто дорогий. У Вас є якісний аналог з нижчою ціною? Якщо ні — давайте бренд.
    </p>
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
  }
}
</script>
