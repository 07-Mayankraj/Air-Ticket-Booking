
# Air Ticket Booking

## objects 

## User Model

```
{
  _id: ObjectId,
  name: String,
  email: String,
  password: String
}

```
## Flight Model

```
{
  _id: ObjectId,
  airline: String,
  flightNo: String,
  departure: String,
  arrival: String,
  departureTime: Date,
  arrivalTime: Date,
  seats: Number,
  price: Number
}

```


## User Model

```
{
	 _id: ObjectId,
	 user : { type: ObjectId, ref: 'User' },
	 flight : { type: ObjectId, ref: 'Flight' }
}

```
## User endpoints 
| METHOD | ENDPOINT | DESCRIPTION | STATUS CODE | REQ.BODY |
| --- | --- | --- | --- | --- |
| POST | /api/register | This endpoint should allow users to register. | 201 |body : {"name": "chikkuuu","email": "chikkuuu@gmail.com","password": "1234"}  |
| POST | /api/login | This endpoint should allow users to login. | 201 |body : {"email": "chikkuuu@gmail.com","password": "1234"}  |
| GET | /api/flights | This endpoint should return a list of all available flights. | 200 | Body not required |
| GET | /api/flights/:id | This endpoint should return the details of a specific flight identified by its ID. | 200 | flight id should be passed in params |
| POST | /api/flights | This endpoint should allow users to add new flights to the system. | 201 | body : {"airline": "chikkuuu airline","flightNo": "1212","departure": "12:00","arrival": "11:00","departureTime": 2002-12-09","arrivalTime": "2002-12-09","seats": 2,"price": 12000} |
| PUT / PATCH | /api/flights/:id | This endpoint should allow users to update the details of a specific flight identified by its ID. | 204 | flight id should be passed in params and new data in req.body : {"airline": "chikkuuu airline","flightNo": "176712","departure": "1:00","arrival": "3:00","departureTime": 2023-12-09","arrivalTime": "2002-12-09","seats": 2,"price": 12000} |
| DELETE | /api/flights/:id | This endpoint should allow users to delete a specific flight identified by its ID. | 202 |flight id should be passed in params|
| POST | /api/booking | This endpoint should allow the user to book flights. | 201 | flight id should be passed in params |
| GET | /api/dashboard | This point should list all the bookings so far with the user and flight details. | 200 | No data required. | 



 

<br/>

# req.body while performing actions 

## adding flight to system
 ```{
    "airline": "chikkuuu airline",
    "flightNo": "1212",
    "departure": "12:00",
    "arrival": "11:00",
    "departureTime": "2002-12-09T00:00:00.000Z",
    "arrivalTime": "2002-12-09T00:00:00.000Z",
    "seats": 2,
    "price": 12000,
    "__v": 0
  }
```



## user signup
<!-- creating user -->
```
 {
  "name": "chikkuuu",
  "email": "chikkuuu@gmail.com",
  "password": "1234"
 } 
```

## user login
<!-- creating user -->
```
 {
  "email": "chikkuuu@gmail.com",
  "password": "1234"
 } 
```
## booking flight 
<!-- creating user -->
```
 {
   "flight":"6447808b4f7c16d91b090001"
 }
```
