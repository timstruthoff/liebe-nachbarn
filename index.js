const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('<a href="/help">Ich möchte helfen</a><br><a href="/ask-for-help">Ich brauche Hilfe</a>')
})

app.get('/help', function (req, res) {
    res.send('<h1>Aktuelle Hilfesuchen</h1>')
  })


  app.get('/ask-for-help', function (req, res) {
    res.send(`
    
    <h1>Hilfe erfragen</h1>
    <form>
        <label for="kind">Art der Hilfe:</label>
        <br>
        <input type="text" id="kind" name="kind">
        <br>
        <label for="place">Ort:</label>
        <br>
        <input type="text" id="place" name="place">
        <br>
        <label for="timeframe">Zeitraum:</label>
        <br>
        <input type="text" id="timeframe" name="timeframe">
        <br>
        <label for="email">E-Mail Adresse:</label>
        <br>
        <input type="email" id="email" name="email">
        <br>
        <input type="submit" value="Veröffentlichen">
    </form>
    
    `)
  })
 
app.listen(3000)
console.log("Running")