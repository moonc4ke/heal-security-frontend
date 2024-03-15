<template>
  <div class="card" @click="$emit('cardClick', restaurant.id)">
    <div class="card_image">
      <img :src="restaurant?.image ? 'http://localhost:3000/' + restaurant?.image : ''" :alt="restaurant?.name" />
    </div>
    <div class="card_content">
      <h2 class="card_title">{{ restaurant?.name }}</h2>
      <star-rating
        :rating="restaurant?.rating"
        :read-only="true"
        class="star-rating"
        :star-size="20"
        :show-rating="false"
      />
      <p class="card_text">{{ restaurant?.type }}</p>
      <p class="card_text">{{ restaurant?.description }}</p>

      <div class="review_box">
        <p class="review_text card_text">"{{ restaurant?.review }}"</p>
        <p class="reviewer_name card_text">{{ restaurant?.reviewer_name }}</p>
      </div>

      <button class="btn card_btn">Book Now</button>
    </div>
  </div>
</template>

<script>
import StarRating from 'vue-star-rating';

export default {
  components: {
    StarRating,
  },
  props: {
    restaurant: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.card_title {
  margin-bottom: 10px;
}
.star-rating {
  height: 20px;
}
.review_box {
  padding: 5px;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.12);
  margin-bottom: 10px;

  .card_text {
    margin-top: 0;
    margin-bottom: 0;
  }

  .review_text {
    font-style: italic;
  }

  .reviewer_name {
    font-weight: bold;
    margin-top: 5px;
  }
}
</style>
