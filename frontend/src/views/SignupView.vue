<template>
    <NavbarComponent />
    <div class="home">
      <div class="header">
        <h1 class="title">Dardanelle Lake Inn</h1>
      </div>
      <img class="background" src="./assets/1hotel.jpg" alt="Background">
  
      <div class="login">
        <h2>Sign Up</h2>
        <div class="form-container">
          <div class="form-column">
            <label for="fname">First Name:</label>
            <input type="text" v-model="fname" id="fname" name="fname" required>
            <br>
            <label for="lname">Last Name:</label>
            <input type="text" v-model="lname" id="lname" name="lname" required>
            <br>
            <label for="username">Username:</label>
            <input type="text" v-model="username" id="username" name="username" required>
            <br>
            <label for="password">Password:</label>
            <input type="password" v-model="password" id="password" name="password" required>
          </div>
          <div class="form-column">
            <label for="address">Address:</label>
            <input type="text" v-model="address" id="address" name="address" required>
            <br>
            <label for="zipcode">Zip Code:</label>
            <input type="text" v-model="zipcode" id="zipcode" name="zipcode" required>
            <br>
            <label for="phonenumber">Phone Number:</label>
            <input type="text" v-model="phonenumber" id="phonenumber" name="phonenumber" required>
            <br>
            <label for="creditcardnumber">Email:</label>
            <input type="text" v-model="creditcardnumber" id="creditcardnumber" name="creditcardnumber" required>
          </div>
        </div>
        <input type="submit" value="Submit" @click.prevent="handleLogin">
      </div>
  
    </div>
  </template>
  
  
  <style scoped>
  .home {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #fff;
    background-image: url('../assets/1hotel.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  
  .header {
    text-align: center;
    height: 300px;
  }
  
  .title {
    font-family: cursive;
    font-size: 100px;
    color: white;
  }
  
  .background {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
  
  .login {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .4);
    padding: 20px;
    text-align: center;
    max-width: 800px;
    width: 80%;
    margin: 0 auto;
    margin-bottom: 100px;
  }
  
  .login h2 {
    font-size: 2rem;
    margin-bottom: 15px;
  }
  
  .form-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 10px;
  margin-top: 20px;
  
}
.form-column {
  display: flex;
  flex-direction: column;
}
label {
  font-size: 1.2rem;
  margin-bottom: 5px;
}
input[type="text"], input[type="password"] {
  border-radius: 5px;
  border: none;
  padding: 8px;
  font-size: 1.2rem;
  margin-bottom: 10px;
}
input[type="submit"] {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1.2rem;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;
}
</style>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue';
import { useRouter } from 'vue-router';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'SignupView',
  data() {
    return {
      fname: '',
      lname: '',
      username: '',
      password: '',
      address: '',
      zipcode: '',
      phonenumber: '',
      creditcardnumber: ''
    };
  },
  setup() {
    const router = useRouter();
    const handleLogin = () => {
      // Check login credentials and navigate to desired page
      router.push('/customer');
    };
    return { handleLogin };
  },
  components: {
    NavbarComponent
  },
});
</script>

  
   
  
*/methods: {
    handleSubmit() {
      // handle form submission here
      console.log('Form submitted!');
    }
  },  