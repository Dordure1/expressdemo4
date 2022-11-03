const express = require('express')
const app = express()
const PORT = 9000

const lead = {firstName : "Dorian", age : 26}

const devs = [
    {firstName : "Pignouf1", age :33},
    {firstName : "Pignouf2", age :33},
    {firstName : "Pignouf3", age :33}
]

//// Config du moteur de vue
//- Quel moteur utiliser  !!Moteur de vue doit etre installé!! 
app.set('view engine','ejs')
/// config du répéretroire ou seront stockée les vues
app.set("views","views")


/// Routing 
app.get('/', (req,res)=>{
    const now = new Date().toLocaleTimeString()
    const message = "Hello all"
    res.render('home/index', {now, message})
})


app.get('/about', (req, res) => {
    res.render('home/about', { lead, devs })
})



app.listen(PORT, ()=>{
    console.log(`serveur connecté au port:  ${PORT}`);
})