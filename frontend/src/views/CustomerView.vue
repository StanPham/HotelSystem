<template>
  <NavbarComponent />
  <div id="container">
  <v-card
    
    max-width="50%"
  >
    <v-card-text>
      <p class="text-h2 text--primary">
        
        You're Ready to Check In!
      </p>
      <p style="margin-top: 10px;font-size:2em; margin-bottom: 10px;text-decoration: underline solid #000;">Rooms</p>
      <div style="font-size:1.5em;" class="text--primary">
        #212<br>
        #213<br>
        #214
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn
        variant="text"
        color="teal-accent-4"
        @click="reveal = true"
      >
      <v-icon
          start
          icon="mdi-map-marker-check"
        ></v-icon>
        Check-In
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <v-card
        v-if="reveal"
        class="v-card--reveal"
        style="height: 100%;"
      >
        <v-card-text class="pb-0">
          <p class="text-h4 text--primary">
            You are Checked In!
          </p>
          
        </v-card-text>
        <v-card-actions>
          <v-dialog
      v-model="dialog"
      width="auto"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          v-bind="props"
        >
        <v-icon
          start
          icon="mdi-eye"
        ></v-icon>
          Reveal QR Code
        </v-btn>
      </template>

      <v-card>
        <v-card-text>
          <v-img
            :width="500"
            aspect-ratio="1"
            cover
            src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Rickrolling_QR_code.png"
          ></v-img>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="dialog = false">Hide QR Code</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>

  <v-card
  class="Res"
  >
    <v-card-text>
      <p class="text-h2">
      Make A Reservation:
      </p>
      <v-form
      style="margin-top:30px">
      <label for="checkin" class="text-h4" style="text-decoration: underline solid #000;">Check-in Date:</label>
          <input type="date" id="checkin" name="checkin" class="text-h4" required>

          <label for="checkout" class="text-h4" style="text-decoration: underline solid #000;">Check-out  Date:</label>
          <input type="date" id="checkout" name="checkout" class="text-h4" required>
      <v-btn icon="mdi-magnify" size="large" :to="{ name: 'create'}" type="submit"></v-btn>
    </v-form>
    </v-card-text>
  </v-card>
  <v-sheet
  v-if="reveal1"
  elevation="2"
  rounded="lg">
  <div id="upcomming">
    <h1 class="text-h2">
      Upcoming Reservations:
    </h1>
    <v-card
    v-if="reveal1"
    style="margin-top:30px"
    max-width="50%"
  >
    <v-card-text>
      <p class="text-h3 text--primary">
        May 30, 2023 - June 12, 2023
      </p>
      <p style="margin-top: 10px;font-size:2em; margin-bottom: 10px;text-decoration: underline solid #000;">Rooms</p>
      <div style="font-size:1.5em;" class="text--primary">
        #1013<br>
        #2015<br>
        #2023
      </div>
    </v-card-text>
    <v-card-actions>
      <v-dialog
      v-model="dialog1"
      width="auto"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="red"
          v-bind="props"
        >
        <v-icon
          start
          icon="mdi-close"
        ></v-icon>
        Cancel Reservation
        </v-btn>
      </template>

      <v-card>
        <v-card-text>
          <p>
            Are You Sure You Want To Cancel Your Reservation?
          </p>
        </v-card-text>
        <v-card-actions>
          <v-btn color="red" @click="dialog1 = false">No</v-btn>
          <v-btn color="teal-accent-4" @click="dialog1 = false;reveal1 = false">Yes</v-btn>
          
        </v-card-actions>
      </v-card>
    </v-dialog>
    </v-card-actions>
    </v-card>

    <v-card
    v-if="reveal2"
    style="margin-top:30px"
    max-width="50%"
  >
    <v-card-text>
      <p class="text-h3 text--primary">
        July 20, 2023 - July 30, 2023
      </p>
      <p style="margin-top: 10px;font-size:2em; margin-bottom: 10px;text-decoration: underline solid #000;">Rooms</p>
      <div style="font-size:1.5em;" class="text--primary">
        #105<br>
      </div>
    </v-card-text>
    <v-card-actions>
      <v-dialog
      v-model="dialog2"
      width="auto"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="red"
          v-bind="props"
        >
        <v-icon
          start
          icon="mdi-close"
        ></v-icon>
        Cancel Reservation
        </v-btn>
      </template>

      <v-card>
        <v-card-text>
          <p>
            Are you sure you want to Cancel Your Reservation?
          </p>
        </v-card-text>
        <v-card-actions>
          <v-btn color="red" @click="dialog2 = false">No</v-btn>
          <v-btn color="teal-accent-4" @click="dialog2 = false;reveal2 = false">Yes</v-btn>
          
        </v-card-actions>
      </v-card>
    </v-dialog>
    </v-card-actions>
    </v-card>
  </div>
</v-sheet>
  </div>
</template>

<style>
input[type="date"] {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid gray;
  width: 20%;
  margin-bottom: 20px;
  margin-right: 20px;
  margin-left: 20px;
}
#upcomming{
  margin-top: 30px;
  padding: 20px;
  background-color: #fffbf4;
  border-radius: 10px;
}
.Res{
  margin-top: 30px;
}
#container{
  width:80%;
  margin: 0 auto;
  margin-top: 2%;
}
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
<script>
import NavbarComponent from '../components/NavbarComponent.vue';


  export default {
    data: () => ({
      dialog1: false,
      reveal1: true,
      dialog2: false,
      reveal2: true,
      dialog: false,
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
      reveal: false,
      items: [
        {
          title: 'Wow This is a List',
          value: 1,
        },
        {
          title: 'Woah a Second Item',
          value: 2,
        },
        {
          title: '3rd item',
          value: 3,
        },
      ],
      cards: [
        { title: 'King Suite #212',
          src: 'https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg', 
          flex: 12,
          reveal: false,
          show: false },
        { title: 'King Suite #213', 
          src: 'https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg', 
          flex: 6,
          reveal: false,
          show: false },
        { title: 'King Suite #214', 
          src: 'https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg', 
          flex: 6,
          reveal: false,
          show: false },
        { title: 'King Suite #215', 
          src: 'https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg', 
          flex: 6,
          reveal: false,
          show: false },
        { title: 'King Suite #216', 
          src: 'https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg', 
          flex: 6,
          reveal: false,
          show: false },
        { title: 'King Suite #217', 
          src: 'https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg', 
          flex: 6,
          reveal: false,
          show: false },
        { title: 'King Suite #218', 
          src: 'https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg', 
          flex: 6,
          reveal: false,
          show: false },
        { title: 'King Suite #219', 
          src: 'https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg', 
          flex: 6,
          reveal: false,
          show: false },
        { title: 'King Suite #220', 
          src: 'https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg', 
          flex: 6,
          reveal: false,
          show: false },
      ],
    }),
    components:{
      NavbarComponent
    }
  }
</script>


