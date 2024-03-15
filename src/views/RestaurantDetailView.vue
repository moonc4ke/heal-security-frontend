<template>
  <div class="detail-view">
    <RestaurantCard :restaurant="restaurant" />
  </div>
</template>

<script>
import RestaurantCard from '../components/RestaurantCard.vue';
import axios from 'axios';

export default {
  components: {
    RestaurantCard
  },
  data() {
    return {
      restaurant: {}
    }
  },
  created() {
    const id = this.$route.params.id;
    axios.get(`http://localhost:3000/restaurants/${id}`)
      .then(response => {
        this.restaurant = response.data;
      })
      .catch(error => {
        console.error("There was an error fetching the restaurant: ", error);
      });
  }
}
</script>

<style scoped>
.detail-view {
  margin: 0 auto;
  width: 500px;
}
</style>