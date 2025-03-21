const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const app = express();
const { ObjectId } = require("mongodb");
app.use(cors());
app.use(express.json()); // To parse JSON bodies
app.use(express.urlencoded({ extended: true })); // To parse URL-encoded bodies

const url = "mongodb+srv://dhineshkumaran2004:zi2ue7crKgwUm2nf@cluster0.ouabet2.mongodb.net/";

const client = new MongoClient(url);

async function Main() {
    try {
        await client.connect();
        console.log("Connected to MongoDB!");
    } catch (error) {
        console.log("Error connecting to MongoDB:", error);
    }
}
Main();

app.get("/getBarbers", async (req, res) => {
    try {
        const db = client.db("Parlour_Management");
        const collection = db.collection("barber_details");
        
        // Query to find available barbers
        const cursor = await collection.find({});
        const barbers = await cursor.toArray();
        
        console.log(barbers);  // Output the results to the console
        res.status(200).json(barbers);  // Send the array as JSON response
    } catch (error) {
        console.error("Error fetching barbers:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.get('/getoffers', async(req, res)=>{
    try {
        const db = client.db("Parlour_Management");
        const collection = db.collection("offers");

        const cursor = await collection.find({});
        const offers = await cursor.toArray();
        
        console.log(offers);
        res.status(200).json(offers);
    } catch (error) {
        console.error("Error fetching offers:", error);
        res.status(500).send("Internal Server Error");
    }
})

app.post('/login', async(req, res)=>{
    try {
        const db = client.db("Parlour_Management");
        const collection = db.collection("users");
    
        const email = req.body.email;
        const password = req.body.password;
        const user = await collection.findOne({email, password});
        if(!user){
            res.status(200).send("Login successful.");
        } else {
            throw new Error("User not found.");
        }
    } catch (error) {
        res.status(404).send(error);
    }
})

app.get('/getservices', async(req, res)=>{
    try {
        const db = client.db("Parlour_Management");
        const collection = db.collection("services");

        const cursor = await collection.find({});
        const services = await cursor.toArray();
        
        console.log(services);
        res.status(200).json(services);
    } catch (error) {
        console.error("Error fetching services:", error);
        res.status(500).send("Internal Server Error");
    }
})

app.get("/getappointments", async (req, res) => {
    try {
        const db = client.db("Parlour_Management");
        const collection = db.collection("customer_appointment");
        
        // Query to find available barbers
        const cursor = await collection.find({});
        const barbers = await cursor.toArray();
        
        console.log(barbers);  // Output the results to the console
        res.status(200).json(barbers);  // Send the array as JSON response
    } catch (error) {
        console.error("Error fetching appointments:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.post('/storeAppointment', async (req, res) => {
    const { name, email_address, phone, category, gender, date, time, paymentId, amount } = req.body;
  
    // Create an object with the appointment details
    const appointment = {
      name,
      email_address,
      phone,
      category,
      gender,
      date,
      time,
      paymentId,
      amount,
      isPaid: true
    };
  
    try {
      const db = client.db("Parlour_Management");
      await db.collection('customer_appointment').insertOne(appointment);
      res.status(200).json({ message: 'Appointment stored successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to store appointment', error });
    }
  });  

  app.patch("/updateStatus/:id", async (req, res) => {
      try {
          const db = client.db("Parlour_Management");
          const collection = db.collection("barber_details");
  
          const barberId = new ObjectId(req.params.id);  // Convert to ObjectId
          const { isAvailable } = req.body;  // Get isAvailable from the request body
  
          const result = await collection.updateOne({ "_id": barberId }, { $set: { isAvailable } });
  
          if (result.modifiedCount > 0) {
              res.status(200).json({ "message": "Status updated successfully!" });
          } else {
              res.status(404).json({ "message": "Barber not found!" });
          }
      } catch (error) {
          console.error("Error updating barber status:", error);
          res.status(500).send("Internal Server Error");
      }
  });  


app.listen(5000, () => {
    console.log("Server has started on port 5000!");
});
