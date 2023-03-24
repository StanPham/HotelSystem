<template>
  <NavbarComponent />
  <div>
    <h1 style="text-align:center;">Select Your Rooms:</h1>
  </div>
  
  <div class="rooms" style="margin:5px;margin-top: 1%;margin-left:5%; margin-right:5%">
    
    <v-flex xs12 sm6 md4>
    <v-menu
        v-model="menu2"
        :close-on-content-click="false"
        :nudge-right="40"
        lazy
        transition="scale-transition"
        offset-y
        full-width
        min-width="290px"
    >
      <template v-slot:activator="{ on }"> <!-- V-date-picker currently doesnt work currently-->
        <v-text-field
          v-model="date"
          label="Picker without buttons"
          prepend-icon="event"
          readonly
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
    </v-menu>
    </v-flex>

    
    <v-row>
      <v-col col="1" xs="12" lg="2"
        v-for="card in cards"
        :key="card.title"
      >
        <v-card
          class="mx-auto"
          :color="'#FFFFFF'"
        >
          <v-img
            src="https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg"
            height="200px"
            cover
          ></v-img>

          <v-card-title v-text="card.title" :color='primary'></v-card-title>

          <v-card-subtitle>
            Joke About Royality
          </v-card-subtitle>

          <v-card-actions>
            <v-btn
              color="teal"
              variant="text"
              @click= "card.reveal = true;card.show = false"
            >
              Click to Add
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn
              :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              @click="card.show = !card.show"
            ></v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="card.show">
              <v-divider></v-divider>
              <v-card-text>
                Actual List of Amenities.
                <v-list  
                  :items="items" 
                  density="compact"
                  :bg-color="'#FFFFFF'"
                ></v-list>
              </v-card-text>
            </div>
          </v-expand-transition>
          
          <v-expand-transition>
            <v-card
              v-if="card.reveal"
              class="v-card--reveal"
              style="height: 100%;border-width:0px 0px 5px 0px;border-color:#258F67;"
              
            >
              <v-img
                src="https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg"
                height="200px"
                cover
              ></v-img>
              <v-card-text class="pb-0">
                <p class="text-h4 text--primary">
                  Added
                <v-icon icon="mdi-check-circle-outline" style="color:#258F67" class="text-h4 text--primary"/>
                </p>
              </v-card-text>
              <v-card-subtitle v-text="card.title"></v-card-subtitle>
              <v-card-actions class="pt-0">
                <v-btn
                 color="#FC5768"
                 @click="card.reveal = false"
                >
                  Click to Remove
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-expand-transition>
        </v-card>

      </v-col>
    </v-row>
  </div>
</template>

<script>
import NavbarComponent from '../components/NavbarComponent.vue';


  export default {
    data: () => ({
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
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

<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
