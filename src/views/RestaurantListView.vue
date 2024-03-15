<template>
  <div class="main">
    <ul class="cards">
      <li class="cards_item" v-for="restaurant in restaurants">
        <RestaurantCard
          :key="restaurant.id"
          :restaurant="restaurant"
          @cardClick="showRestaurant"
          class="restaurant-card"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import RestaurantCard from '../components/RestaurantCard.vue';
import axios from 'axios';

export default {
  components: {
    RestaurantCard,
  },
  data() {
    return {
      restaurants: [],
    };
  },
  methods: {
    showRestaurant(restaurantId) {
      this.$router.push({ name: 'RestaurantDetail', params: { id: restaurantId } });
    },
  },
  created() {
    axios
      .get(`${import.meta.env.VITE_RAILS_API_ENDPOINT}/restaurants`)
      .then((response) => {
        this.restaurants = response.data;
      })
      .catch((error) => {
        console.error('There was an error fetching the restaurants: ', error);
      });
  },
};
</script>
