const express = require('express')
const { dbconnection } = require('./configs/db');
const { userRouter } = require('./routes/user.route');
const { flightRouter } = require('./routes/flight.route');
const { bookingRouter } = require('./routes/booking.route');
const { auth } = require('./middleware/auth.middlware');
const app = express()
const port = process.env.port;
console.log(port);


// middleware
app.use(express.json())
// routers
app.use("/users", userRouter)
app.use(auth)
app.use('/',bookingRouter)
app.use("/flights", flightRouter)

app.listen(port ,()=>{
    try {
        dbconnection
        console.log('server listening on port ' + port,);
    } catch (error) {
        console.log(error.message);
    }
})
