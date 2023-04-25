<template>
  <NavbarComponent />
 
 
  <v-toolbar class="xd" color=white dark elevation="2">
      <v-toolbar-title class="mx-auto title-center">
        Select Your Rooms
      </v-toolbar-title>
      <v-spacer></v-spacer>

    <v-btn 
    variant="flat"
    elevation="15"
    color="green"
    
   
  
  
    @click="dialog = !dialog">
      Confirm Reservation
      
    </v-btn>
    
</v-toolbar>


<v-dialog
      v-model="dialog"
      
    >
<v-fade-transition hide-on-leave>
<v-card
        v-if="dialog"
        append-icon="$close"
        class="mx-auto"
        elevation="16"
        max-width="500"
        min-width="500"
        title="Reserve These Rooms?"
        
      
        
      >


      <template v-slot:append>
          <v-btn icon="$close" variant="text" @click="dialog = false"></v-btn>
        </template>

        <v-divider></v-divider>

      



<v-card-text>
  
<template v-for="card in cards"> 
  
  
  <li v-if="card.reveal" :key="card.title">
     {{ card.title }}
     
  </li> 
</template>
</v-card-text>    
    

        

      <v-divider></v-divider>

        
        <div class="pa-4 text-begin d-flex justify-space-between">
          <v-btn
            class="text-none"
            color="red"
            min-width="92"
            rounded
            variant="outlined"
            @click="dialog = false"
          >
            Cancel
          </v-btn>
          <v-btn
            class="text-none"
            color="green"
            min-width="92"
            rounded
            variant="outlined"
            @click="dialog = false"
          >
            Yes
          </v-btn>
          
          
         
          
        
      </div>
      
     
       
      

</v-card>

</v-fade-transition>
</v-dialog>


    
    
  
  <div class="rooms" style="margin:5px;margin-top: 1%;margin-left:5%; margin-right:5%">
    
    
    
   

    
    <v-row>
      <v-col col="1" xs="12" lg="3"
        v-for="card in cards"
        :key="card.title"
      >
        <v-card
          class="mx-auto card-border"
          :color="'#FFFFFF'"
        >
        <v-img
        src="https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg"
            height="200px"
            cover
          ></v-img>

          <v-card-title v-text="card.title" :color='primary'></v-card-title>

          

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
                Features
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
                height="180px"
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
      dialog: false,
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
      items: [
        {
          title: 'Free WiFi',
          value: 1,
        },
        {
          title: '36 inch TV',
          value: 2,
        },
        {
          title: 'Mini Fridge',
          value: 3,
        },
      ],
      cards: [
        { title: 'Double Queen Suite #1005',
          src: 'https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg', 
          flex: 12,
          reveal: false,
          show: false },
        { title: 'King Suite #1008', 
          src: 'https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg', 
          flex: 6,
          reveal: false,
          show: false },
        { title: 'King Suite #1012', 
          src: 'https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg', 
          flex: 6,
          reveal: false,
          show: false },
        { title: 'Double Queen Suite #1015', 
          src: 'https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg', 
          flex: 6,
          reveal: false,
          show: false },
        { title: 'King Suite #2012', 
          src: 'https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg', 
          flex: 6,
          reveal: false,
          show: false },
        { title: 'Double Queen Suite #2013', 
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

<style scoped>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}

.card-border{
  border-collapse: collapse;
  border: none;
  border-spacing: 0;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}
.title-center {
    text-align: center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 30px;
  }

li{
  font-size: 20px;
  margin:5%;
}



</style>
