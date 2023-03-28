<template>
  <NavbarComponent />
  <body>
    <h1>Make A Reservation</h1>
    <div class="date-inputs-container">
      <form>
        <div class="date-inputs">
          <label for="checkin">Check-in</label>
          <input type="date" id="checkin" name="checkin" required>

          <label for="checkout">Check-out</label>
          <input type="date" id="checkout" name="checkout" required>
        </div>

        <router-link to="/test">
          <input type="submit" value="Choose Rooms">
        </router-link>
      </form>
    </div>
  </body>
</template>


<style scoped>
body {
  font-family: Georgia, 'Times New Roman', Times, serif;
  text-align: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  margin: 0;
  display: inline-block;
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 50px;
  font-family: Georgia, 'Times New Roman', Times, serif;
}

.date-inputs-container {
  text-align: center;
}

form {
  text-align: left;
  padding: 50px;
  background-color: #F5F3E8;
  border-radius: 10px;
  margin: 0 auto;
}

.date-inputs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-right: 10px;
}

label {
  margin-top: 10px;
  display: block;
  margin-right: 20px;
  font-weight: bold;
  font-size: 25px;
}

input[type="date"] {
  padding: 10px;
  font-size: 25px;
  border-radius: 5px;
  border: 1px solid gray;
  width: 200px;
  margin-bottom: 20px;
  margin-right: 20px;
}

input[type="submit"] {
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
  margin-top: 40px;
 
 
}


</style>




<script>
import NavbarComponent from '../components/NavbarComponent.vue';

  import { defineComponent } from 'vue';
  
  
  export default defineComponent({
  name: 'CustomerView',
  components:{
      NavbarComponent
    }
  })
</script>












  

  
    

  

  
  
  
  
  