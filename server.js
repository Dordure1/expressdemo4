const express = require('express')
const app = express()
const PORT = 9000


//// Config du moteur de vue
//- Quel moteur utiliser  !!Moteur de vue doit etre installé!! 
app.set('view engine','ejs')
/// config du répéretroire ou seront stockée les vues
app.set("views","views")



/// Routing 
app.get('/', (req,res)=>{
    res.send("<h1>Home</h1>")
})



app.listen(PORT, ()=>{
    console.log(`serveur connecté au port:  ${PORT}`);
})