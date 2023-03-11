//Worked with tutor, reffering back to past modules and applying to code
const express = require('express');
const { writeFile, readFile } = require('node:fs/promises');
const path = require("path")
const PORT = 3001;
const app = express();

// Middleware for parsing application/json and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.get("/api/notes", (req,res)=> {
    console.log("Pinking api!")
    const notes = await readFile()
  


})

// Create Express.js routes for default '/', '/send' and '/routes' endpoints
app.get('/notes', (req, res) =>
res.sendFile(path.join(__dirname, 'public/notes.html'))
);




app.get('*', (req, res) =>
res.sendFile(path.join(__dirname, 'public/index.html'))
);


app.listen(PORT, () =>
  console.log(`Serving static asset routes on port ${PORT}!`)
);