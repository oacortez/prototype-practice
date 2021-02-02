const express = require ('express');
const authRouter = require('./routes/auth');
const server = express();

server.use("/auth", authRouter);
server.apply("/", (req,res) => {
    res.send("Index");
})
server.listen(3000);