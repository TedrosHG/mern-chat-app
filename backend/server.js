const express = require('express');
const { chats } = require("./data/data");
const dotenv = require('dotenv').config();

const app= express();

app.get('/', (req, res)=>{
    res.send("API is Running");
});

app.get('/api/chat', (req,res)=>{
    res.send(chats);
});

app.get('/api/chat/:id', (req, res)=>{
    const singleChat = chats.find((c)=> c._id===req.params.id);
    res.send(singleChat);
})

const port = process.env.PORT || 4000;
app.listen(port,console.log(`server started on port ${port}`))