const User = require("../models/user");
const Campsite = require("../models/campsite");

const add = async (req, res) => {
  try {
    const campsite = new Campsite({ ...req.body, addedBy: req.userId });
    let response = await campsite.save();
    res
      .status(201)
      .json({ message: "Campsite registered successfully", data: response });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Campsite addition failed", data: [] });
  }
};

const list = async (req, res) => {
  try {
    const campsite = await Campsite.find({});

    res.status(201).json({ data: campsite });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Fetch failed", data: [] });
  }
};

module.exports = { add, list };
