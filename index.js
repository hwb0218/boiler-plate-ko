const express = require('express');
const app = express();
const port = 5001;
//mongoose는 Node.js와 MongoDB를 위한 library이다.
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://woobeen:abcd1234@boilerplate.fc499.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser : true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));