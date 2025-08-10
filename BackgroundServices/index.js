const express = require("express");
const app = express();
const dbConnection = require("./utils/db");
const dotenv = require("dotenv");
const cron = require('node-cron');
const { sendDonorDetailsEmail } = require("./EmailServices/sendDonorDetailsEmail.js");
const { sendDetailsProspectEmail }= require("./EmailServices/sendDetailsProspect");
const { sendBloodDonationReminder } = require("./EmailServices/sendBloodDonationReminder.js");
const { sendEligibilityEmail } = require("./EmailServices/sendEligibilityEmail.js");
dotenv.config();

//server

const PORT = process.env.PORT ;

const run =() =>{
    cron.schedule('* * * * *',()=> {
        console.log('running a task every second');
         sendDetailsProspectEmail();
         sendDonorDetailsEmail();
         sendBloodDonationReminder();
         sendEligibilityEmail();
         
    });
}
run();




app.listen(8001, () =>{
    console.log(`Backgroundservices is running on 8001`);
    dbConnection();
})