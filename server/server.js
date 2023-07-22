const express = require('express');
const path = require('path')
const app = express();
const PORT = 3000;
const controllers = require('./controllers');
const mongoose = require('mongoose');
const uri = "mongodb+srv://steveschlepphorst:gGrfVQnD8SPcvZRM@cluster0.zxa3m8f.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.once('open', ()=>{
    console.log('Connected to Database');
});

app.use(express.static(path.join(__dirname,'../client')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));



app.post('/journal/new', controllers.add, (req,res)=>{
    res.json("Successfully added!");
});
app.get('/journal/all', controllers.getAll, (req,res)=>{
    res.json(res.locals.journalList);
})
app.delete('/journal/:id', controllers.delete, (req,res)=>{
    res.json("Successfully deleted!");
})
app.put('/journal/:id', controllers.update, (req,res)=>{
    res.json("Successfully updated!");
})


app.use('*', (req,res)=>res.sendStatus(404));

app.use((err,req,res,next)=>{
    return res.status(400).send('Sorry, an error occured');
})

app.listen(PORT, ()=>{
    console.log('Listening to 3000');
})

module.exports = app;
