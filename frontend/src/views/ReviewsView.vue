<template>
  <div class="hello-world">
    <button class="review-btn" @click="showReviewForm">Leave a Review</button>
    <h1>{{ message }}</h1>
    <div class="review-form-modal" v-if="showForm">
      <div class="review-form">
        <h2>Leave a Review</h2>
        <form @submit.prevent="submitReview">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="review.name" required>
          <br>
          <label for="rating">Rating:</label>
          <select id="rating" v-model="review.rating" required>
            <option value="5">5 stars</option>
            <option value="4">4 stars</option>
            <option value="3">3 stars</option>
            <option value="2">2 stars</option>
            <option value="1">1 star</option>
          </select>
          <br>
          <label for="comment">Comment:</label>
          <textarea id="comment" v-model="review.comment"></textarea>
          <br>
          <button type="submit">Submit</button>
          <button type="button" @click="closeReviewForm">Close</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style>
.hello-world {
  font-family: Arial, sans-serif;
  text-align: center;
  margin-top: 50px;
}
.review-btn {
  background-color: #008CBA;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 5px;
  margin-bottom: 20px;
}
.review-form-modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.review-form {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
label {
  font-weight: bold;
  margin-right: 10px;
}
input, select, textarea {
  margin-bottom: 10px;
}
button[type="submit"], button[type="button"] {
  background-color: #008CBA;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 5px;
  margin-top: 10px;
}
</style>

<script>
export default {
  data() {
    return {
      message: 'Hello, World!',
      showForm: false,
      review: {
        name: '',
        rating: '5',
        comment: ''
      }
    }
  },
  methods: {
    showReviewForm() {
      this.showForm = true;
    },
    closeReviewForm() {
      this.showForm = false;
    },
    submitReview() {
      // submit review logic here
    }
  }
}
</script>
