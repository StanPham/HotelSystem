<template>
  <NavbarComponent
  
   />
   
   <div class="container">
  <v-data-table
    :headers="headers"
    :items="rooms"
    :sort-by="[{ key: 'roomNum', order: 'asc' }]"
    :search="search"
    class="elevation my-table table-border"
  >
  
    <template v-slot:top>
      <v-toolbar
        flat
      >
      
        <v-toolbar-title>Room Management</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
       
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ props }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="props"
            >
              New Room
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              
                
                   
                 
                    <v-text-field
                      v-model="editedItem.type"
                      label="Type"
                    ></v-text-field>
                  
                    <v-text-field
                      v-model="editedItem.roomNum"
                      label="Room #"
                    ></v-text-field>
                  
                    <v-text-field
                      v-model="editedItem.res"
                      label="Res Status"
                    ></v-text-field>
                  
                    <v-select
                      v-model="editedItem.condition"
                      
                      label="Condition"
                      :items="['Dirty', 'Ready','Occupied','Maintenence']"
                    ></v-select>
                
             
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue-darken-1"
                variant="text"
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue-darken-1"
                variant="text"
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="220px">
          <v-card class="card-border" title="Delete Room?" min-height="140px">
            
            <v-divider></v-divider>
            <v-card-text></v-card-text>
            
              
              <div class="pa-4 text-begin d-flex justify-space-between">
              <v-btn color="blue-darken-1" min-width="92" variant="text" @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue-darken-1" mid-width="92" variant="text" @click="deleteItemConfirm">OK</v-btn>
            </div>
              
            
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon
        size="small"
        class="me-2"
        @click="editItem(item.raw)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        size="small"
        @click="deleteItem(item.raw)"
      >
        mdi-delete
      </v-icon>
    </template>
    
    <template v-slot:[`editedItem.condition`]="{ editedItem }">
      <v-select
        
        v-model="editedItem.condition"
        
      
        :items="['Dirty', 'Clean']"
      
      ></v-select>
</template>
  </v-data-table>
  
</div>
</template>


<style scoped>
.v-table{
  
  margin-top: 40px;
  margin-left:auto;
  margin-right:auto;
  max-width: 800px;
  
  
}
.table-border {
  border-collapse: collapse;
  border: none;
  border-spacing: 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.container {
  background-color: rgb(237, 240, 233);
  
  background-size: cover;
  padding:20px;
}


.card-border{
  border-collapse: collapse;
  border: none;
  border-spacing: 0;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}
</style>


<script>
import NavbarComponent from '../components/NavbarComponent.vue';
export default {
  data: () => ({
    search: '',
    dialog: false,
    dialogDelete: false,
    headers: [
    { title: 'Room #', key: 'roomNum', width: '10%' },
      { title: 'Type', key: 'type', width: '8%' },
      
      { title: 'Reservation Status', key: 'res', width: '8%' },
      
      { title: 'Condition', key: 'condition', width: '10%' },
      
      { title: 'Actions', key: 'actions', sortable: false, width: '10%' },
    ],
    rooms: [],
    editedIndex: -1,
    editedItem: {
      
      type: '',
      roomNum: '',
      res: '',
      condition: '',
      
      
    },
    defaultItem: {
      
      type: '',
      roomNum: '',
      res: '',
      condition: '',
      
      
    },
  }),
  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    },
  },
  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    },
  },
  created () {
    this.initialize()
  },
  methods: {
    initialize () {
      this.rooms = [
        {
          roomNum: '1001',
          type: 'DQ',
          
          res: '4/27-4/29',
          condition: "Occupied",
          
        },
        {
          roomNum: '1002',
          type: 'DQ',
          
          res: '4/27-4/30',
          condition: "Occupied",
          
        },
        {
          roomNum: '1003',
          type: 'DQ',
          
          res: '4/27-4/30',
          condition: "Occupied",
          
        },
        {
          roomNum: '1004',
          type: 'K',
          
          res: '4/27-5/2',
          condition: "Occupied",
          
        },
        


        {
          roomNum: '1005',
          type: 'DQ',
          
          res: '4/28-4/29',
          condition: "Ready",
          
        },
        {
          roomNum: '1006',
          type: 'DQ',
          
          res: '4/27-4/30',
          condition: "Occupied",
          
        },
        {
          roomNum: '1007',
          type: 'DQ',
          
          res: '4/29-5/5',
          condition: "Ready",
          
        },
        {
          roomNum: '1008',
          type: 'K',
          
          res: '4/27-4/28',
          condition: "Dirty",
          
        },


        {
          roomNum: '1009',
          type: 'DQ',
          
          res: '4/27-4/28',
          condition: "Occupied",
          
        },
        {
          roomNum: '1010',
          type: 'DQ',
          
          res: '5/27-5/30',
          condition: "Maintenence",
          
        },
        {
          roomNum: '1011',
          type: 'DQ',
          
          res: '4/27-4/30',
          condition: "Occupied",
          
        },
        {
          roomNum: '1012',
          type: 'K',
          
          res: '4/27-4/30',
          condition: "Occupied",
          
        },


        {
          roomNum: '1013',
          type: 'DQ',
          
          res: '4/27-4/29',
          condition: "Occupied",
          
        },
        {
          roomNum: '1014',
          type: 'DQ',
          
          res: '4/27-4/28',
          condition: "Occupied",
          
        },
        {
          roomNum: '1015',
          type: 'DQ',
          
          res: '4/27-4/28',
          condition: "Dirty",
          
        },
        {
          roomNum: '1016',
          type: 'K',
          
          res: '4/27-5/1',
          condition: "Occupied",
          
        },


        {
          roomNum: '1017',
          type: 'DQ',
          
          res: '4/27-4/29',
          condition: "Occupied",
          
        },
        {
          roomNum: '1018',
          type: 'DQ',
          
          res: '4/27-4/30',
          condition: "Occupied",
          
        },
        {
          roomNum: '1019',
          type: 'DQ',
          
          res: '4/27-4/30',
          condition: "Occupied",
          
        },
        {
          roomNum: '1020',
          type: 'K',
          
          res: '4/27-4/30',
          condition: "Occupied",
          
        },


        {
          roomNum: '2001',
          type: 'DQ',
          
          res: '4/27-4/29',
          condition: "Occupied",
          
        },
        {
          roomNum: '2002',
          type: 'DQ',
          
          res: '4/27-4/30',
          condition: "Occupied",
          
        },
        {
          roomNum: '2003',
          type: 'DQ',
          
          res: '4/27-4/30',
          condition: "Occupied",
          
        },
        {
          roomNum: '2004',
          type: 'K',
          
          res: '4/27-4/28',
          condition: "Dirty",
          
        },


        {
          roomNum: '2005',
          type: 'DQ',
          
          res: '6/3-6/8',
          condition: "Maintenence",
          
        },
        {
          roomNum: '2006',
          type: 'DQ',
          
          res: '4/27-4/30',
          condition: "Occupied",
          
        },
        {
          roomNum: '2007',
          type: 'DQ',
          
          res: '4/27-4/28',
          condition: "Occupied",
          
        },
        {
          roomNum: '2008',
          type: 'K',
          
          res: '4/28-4/30',
          condition: "Ready",
          
        },


        {
          roomNum: '2009',
          type: 'DQ',
          
          res: '4/29-4/30',
          condition: "Ready",
          
        },
        {
          roomNum: '2010',
          type: 'DQ',
          
          res: '4/27-4/30',
          condition: "Occupied",
          
        },
        {
          roomNum: '2011',
          type: 'DQ',
          
          res: '4/27-4/28',
          condition: "Occupied",
          
        },
        {
          roomNum: '2012',
          type: 'K',
          
          res: '4/27-4/30',
          condition: "Dirty",
          
        },


        {
          roomNum: '2013',
          type: 'DQ',
          
          res: '4/27-4/29',
          condition: "Occupied",
          
        },
        {
          roomNum: '2014',
          type: 'DQ',
          
          res: '4/27-5/2',
          condition: "Occupied",
          
        },
        {
          roomNum: '2015',
          type: 'DQ',
          
          res: '4/27-4/30',
          condition: "Occupied",
          
        },
        {
          roomNum: '2016',
          type: 'K',
          
          res: '4/28-4/30',
          condition: "Ready",
          
        },


        {
          roomNum: '2017',
          type: 'DQ',
          
          res: '4/27-4/29',
          condition: "Occupied",
          
        },
        {
          roomNum: '2018',
          type: 'DQ',
          
          res: '4/27-4/28',
          condition: "Occupied",
          
        },
        {
          roomNum: '2019',
          type: 'DQ',
          
          res: '4/27-4/29',
          condition: "Occupied",
          
        },
        {
          roomNum: '2020',
          type: 'K',
          
          res: '4/27-4/29',
          condition: "Occupied",
          
        },


       

      
        
        
       
       
        
        
      ]
    },
    editItem (item) {
      this.editedIndex = this.rooms.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },
    deleteItem (item) {
      this.editedIndex = this.rooms.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },
    deleteItemConfirm () {
      this.rooms.splice(this.editedIndex, 1)
      this.closeDelete()
    },
    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.rooms[this.editedIndex], this.editedItem)
      } else {
        this.rooms.push(this.editedItem)
      }
      this.close()
    },
  },
  components:{
      NavbarComponent
    }
}
</script>