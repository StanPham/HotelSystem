<template>
  <div class="home">
    <div class="header">
      <h1 class="title">Dardanelle Lake Inn</h1>
    </div>
    <img class="background" src="./1hotel.jpg" alt="Background">
    <div class="login">

      <h2>Login</h2>
      <form @submit.prevent="handleLogin">
        <label for="username">Username:</label>
        <input type="text" v-model="username" id="username" name="username" required>
        <br>
        <label for="password">Password:</label>
        <input type="password" v-model="password" id="password" name="password" required>
        <br><br>
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<style>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #fff;
  background-image: url('1hotel.jpg');
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
  max-width: 400px;
  width: 50%;
  margin: 0 auto;
}

.login h2 {
  font-size: 2rem;
  margin-bottom: 15px;
 
 
}

.login form {
  display: flex;
  flex-direction: column;
}

.login label {
  font-size: 1.2rem;
  
}

.login input {
  padding: 8px;
  font-size: 1.2rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  
}

.login button[type="submit"] {
  background-color: #007aff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 1.2rem;
  transition: background-color 0.3s ease;
}

.login button[type="submit"]:hover {
  background-color: #0056b3;
  cursor: pointer;
}

</style>


<script>
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'HomeView',
  setup() {
    const router = useRouter();

    const handleLogin = () => {
      // Check login credentials and navigate to desired page
      
        router.push('/customer');
      
    };

    return { handleLogin };
  },
});
</script>

