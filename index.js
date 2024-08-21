const express = require('express');
const db = require("./Database/database");
const Product = require('./models/product.model');
const productRoute = require("./routes/product.route");
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

app.get('/', (req, res) => {
    res.send("Hello from node API Server"); 
});


db.then(() => {
    console.log("Connected to the database");
    app.listen(3000, () => {
        console.log('server running on 3000');
        
    });
})
.catch(() => {
    console.log("Connection failed!");

});
