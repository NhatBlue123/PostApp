const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());
const db = require('./models');

//post routes
const postRoutes = require('./routes/Posts');
app.use("/posts", postRoutes);

//comment routes
const commentRoutes = require('./routes/Comments');
app.use("/comments", commentRoutes);

//user routes
const userRoutes = require('./routes/Users');
app.use("/auth", userRoutes);

//sync database
db.sequelize.sync().then(() => {
    app.listen(3001,() => {
        console.log("Server started on port 3001");
    });
});