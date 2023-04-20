<template>
  <NavbarComponent
  
   />
  
  <v-data-table
    :headers="headers"
    :items="rooms"
    :sort-by="[{ key: 'roomNum', order: 'asc' }]"
    class="elevation table-border"
   
   
    
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
                      :items="['Dirty', 'Clean']"
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
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this room?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue-darken-1" variant="text" @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue-darken-1" variant="text" @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
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
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
    <template v-slot:[`editedItem.condition`]="{ editedItem }">
      <v-select
        
        v-model="editedItem.condition"
        
      
        :items="['Dirty', 'Clean']"
      
      ></v-select>
</template>
  </v-data-table>

</template>

<style scoped>
.v-table{
  
  margin-top: 50px;
  margin-left:auto;
  margin-right:auto;
  max-width: 700px;
  
}
.table-border {
  border-collapse: collapse;
  border: none;
  border-spacing: 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

</style>


<script>
import NavbarComponent from '../components/NavbarComponent.vue';
export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
    { title: 'Room #', key: 'roomNum', width: '8%' },
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
          roomNum: '01',
          type: 'Queen',
          
          res: 'yes',
          condition: "Dirty",
          
        },
        {
          roomNum: '01',
          type: 'Queen',
          
          res: 'yes',
          condition: "Dirty",
          
        },
        {
          roomNum: '01',
          type: 'Queen',
          
          res: 'yes',
          condition: "Dirty",
          
        },
        {
          roomNum: '01',
          type: 'Queen',
          
          res: 'yes',
          condition: "Dirty",
          
        },
        {
          roomNum: '01',
          type: 'Queen',
          
          res: 'yes',
          condition: "Dirty",
          
        },
        {
          roomNum: '01',
          type: 'Queen',
          
          res: 'yes',
          condition: "Dirty",
          
        },
        {
          roomNum: '01',
          type: 'Queen',
          
          res: 'yes',
          condition: "Dirty",
          
        },
        {
          roomNum: '01',
          type: 'Queen',
          
          res: 'yes',
          condition: "Dirty",
          
        },
        {
          roomNum: '01',
          type: 'Queen',
          
          res: 'yes',
          condition: "Dirty",
          
        },
        {
          roomNum: '01',
          type: 'Queen',
          
          res: 'yes',
          condition: "Dirty",
          
        },
        {
          roomNum: '01',
          type: 'Queen',
          
          res: 'yes',
          condition: "Dirty",
          
        },
        {
          roomNum: '01',
          type: 'Queen',
          
          res: 'yes',
          condition: "Dirty",
          
        },
        {
          roomNum: '01',
          type: 'Queen',
          
          res: 'yes',
          condition: "Dirty",
          
        },
        {
          roomNum: '01',
          type: 'Queen',
          
          res: 'yes',
          condition: "Dirty",
          
        },
        {
          roomNum: '01',
          type: 'Queen',
          
          res: 'yes',
          condition: "Dirty",
          
        },
        {
          roomNum: '01',
          type: 'Queen',
          
          res: 'yes',
          condition: "Dirty",
          
        },
        {
          roomNum: '01',
          type: 'Queen',
          
          res: 'yes',
          condition: "Dirty",
          
        },
        {
          roomNum: '01',
          type: 'Queen',
          
          res: 'yes',
          condition: "Dirty",
          
        },
        {
          roomNum: '01',
          type: 'Queen',
          
          res: 'yes',
          condition: "Dirty",
          
        },
        {
          roomNum: '01',
          type: 'Queen',
          
          res: 'yes',
          condition: "Dirty",
          
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