const express=require('express');

const app=express();
const port=8000;

app.listen(port, function(err) {
    if (err) {
        return console.log('something bad happened', err);
    }
    console.log(`server is listening on ${port}`);
});