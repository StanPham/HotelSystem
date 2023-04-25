<template>
  <div class="button-wrap">
    <button class="review-btn" @click="showReviewForm">Leave a Review</button>
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
          <div class="submit-close">
            <button class="submit" type="submit">Submit</button>
            <button type="button" @click="closeReviewForm">Close</button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <div class="reviews-container">
    <div class="reviews-row" v-for="(row, index) in reviews" :key="index">
      <div class="review" v-for="(review, index) in row" :key="index">
        <h3>{{ review.name }}</h3>
        <div>Rating: {{ review.rating }}/5</div>
        <div>{{ review.comment }}</div>
      </div>
    </div>
  </div>
</template>

<style>
.button-wrap {
  font-family: Arial, sans-serif;
  text-align: center;
  margin-top: 50px;
}

.submit-close {
  text-align: center;
}

.submit {
  margin-right: 15px;
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
  min-height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}

.review-form {
  background-color: #fff;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 80%;
  max-width: 600px;
  height: auto;
  max-height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}


form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

label {
  font-weight: bold;
}

input[type="text"],
select,
textarea {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid black;
  font-size: 14px;
}

select#rating {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding: 8px 30px 8px 12px;
  border-radius: 5px;
  border: 1.5px solid black;
  font-size: 16px;
  background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 10.586L4.707 7.293C4.316 6.902 3.684 6.902 3.293 7.293C2.902 7.684 2.902 8.316 3.293 8.707L7.293 12.707C7.488 12.902 7.744 13 8 13C8.256 13 8.512 12.902 8.707 12.707L12.707 8.707C13.098 8.316 13.098 7.684 12.707 7.293C12.316 6.902 11.684 6.902 11.293 7.293L8 10.586Z' fill='%23008CBA'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 12px;
  color: #333;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
}
select#rating:hover, select#rating:focus {
  border-color: #32abd4;
  outline: none;
}




button[type="submit"] {
  background-color: #00BFFF;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;
}

textarea#comment {
  height: 100px;
  resize: none;
  padding: 10px;
  border: 1px solid black;
}

.reviews-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
}

.reviews-row {
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 50px;
}

.review {
  width: 30%;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;
}

.review h3 {
  margin: 0;
}

.review div {
  margin-bottom: 10px;
}
</style>

<script>
export default {
  data() {
    return {
      showForm: false,
      review: {
        name: '',
        rating: '5',
        comment: '',
      },
      reviews: [
        [
          { name: 'John', rating: 5, comment: 'Great product!' },
          { name: 'Jane', rating: 4, comment: 'Good value for the price.' },
          { name: 'Mike', rating: 3, comment: 'Average product.' }
        ],
        [
          { name: 'Sara', rating: 5, comment: 'I love it!' },
          { name: 'Tom', rating: 2, comment: 'Not satisfied with the quality.' },
          { name: 'Emily', rating: 4, comment: 'Works well for my needs.' }
        ]
      ]  
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


