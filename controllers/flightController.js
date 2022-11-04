let {Flights} = require('../models/Flight')
const { v4: uuidv4 } = require('uuid');
exports.example = (req, res) => {
    console.log("example")
    res.send("Flight example")
}
//get all flights
exports.Getflights= (req,res)=>{
    if(Flights.length === 0){
   return res.json({
        message: "No flights now add flights"
    })}else if(Flights.length === 1){
        return res.json({
            message: "This is the flight",
            Flights
        })
    }
    else{
        return res.json({
            message: "These are the flights",
            Flights
        })
    }
}
//create flight
exports.CreateFlight= async (req,res)=>{
    try{
        const bookFlight = await req.body
        const userId = uuidv4()
        const flightID = {...bookFlight, id: userId}
        Flights.push(flightID)
        res.status(201).json({
            message: "flight created",
            bookFlight
        })
    }catch (err){
        res.status(500).json({message:err.message})   
    }
}
// get single flight
exports.Getflight = (req,res)=>{
    try {
        const {id} = req.params
        const foundFlight = Flights.find((flight)=> flight.id === id)
        res.send(foundFlight)
    } catch (err) {
        res.status(500).json({message:err.message})   
    }
}
/*
exports.Deleteflight = (req,res)=>{
    try {
        const {id} = req.params
        Flights = Flights.filter((flight)=> flight.id !== id)
        res.send(`flight with ${id} has been deleted`)
       /* const id = req.params
        const Flight = Flights.find((flight)=> flight.id === id)
        Flights.splice(Flights.indexOf(Flight), 1)
        res.json({
            message: 'flight deleted',
            Flight
        })
    } catch (err) {
        res.status(500).json({message:err.message})   
    }
}*/
// delete flight
exports.Deleteflight = (req,res)=>{
    let {id} = req.params
    Flights = Flights.filter((flight)=> flight.id !== id)
   res.send(`user with ${id} deleted`)
}
//Update flight
exports.Updateflight = (req, res)=>{
    const {id} = req.params
    const {title, date, price, time}= req.body
    const flight = Flights.find((flight)=> flight.id === id)
    if(title) flight.title = title
    if(date) flight.date = date
    if(price) flight.price = price
    if(time) flight.time = time
    

    res.send(`user with id ${id} has been updated`)
 }