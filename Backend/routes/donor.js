const express = require("express");
const { createDonor, getAlldonors, updateDonor, getOneDonor, deleteDonor, getDonorsStats } = require("../controllers/donor");
const router = express.Router();

//add donor
router.post("/",createDonor);

//get all donors
router.get("/",getAlldonors);

//update donor
router.put("/:id",updateDonor);

//get one donor

router.get("/find/:id",getOneDonor);

//delete donor

router.delete("/:id",deleteDonor);

//donor stats

router.get("/stats",getDonorsStats);




module.exports=router