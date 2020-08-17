class Player {
     constructor(){
       this.index = null;
       this.distance = 0;
       this.name = null;
     }
   getcount(){
 var playerCountRef = database.ref('playerCount');
playerCountRef.on("value",function(data){ playercount = data.val(); 
        }
)
 }
  updatecount(count){ 
database.ref('/').update({ playercount: count }); 
     } 
update(){ 
var playerIndex = "players/player" +this.index 
 database.ref(playerIndex).set({ name:this.name,distance:this.distance }); 
} 
static getplayerinfo(){
  var playerinforef = database.ref("players");
  playerinforef.on("value",(data)=>{allplayers =data.val()}) 
}
}