import aliensSchema from "../models/aliensSchema.js";

export const createAlien = async (req, res) => {
  try {
    const { name, tech, sub } = req.body;
    const aliens = await aliensSchema.create({
      name,
      tech,
      sub,
    });
    if (aliens) {
      res.json({
        status: 200,
        success: true,
        message: "Alien created Successfully",
      });
    }
  } catch (err) {
    console.log(err);
    res.json({
      status: 400,
      success: false,
      message: "Failed to create Alien",
    });
  }
};

export const getAll = async (req, res) => {
  try {
    const aliens = await aliensSchema.find({});
    if (aliens) {
      res.json({
        status: 200,
        success: true,
        message: "Alien Fetched Successfully",
        aliens,
      });
    }
  } catch (err) {
    res.json({
      status: 400,
      success: false,
      message: "Failed to fetch aliens",
    });
  }
};

export const getById = async (req, res) => {
  try {
    const aliens = await aliensSchema.findById(req.params.id);
    if (aliens) {
      res.json({
        status: 200,
        success: true,
        message: "Alien fetched successfully",
        aliens,
      });
    }
  } catch (err) {
    console.log(err);
    res.json({
      status: 400,
      success: false,
      message: "Failed to fetch alien",
    });
  }
};

export const updateAlien = async (req, res) => {
  try {
    const { name, tech, sub } = req.body;
    const aliens = await aliensSchema.findById(req.params.id);
    if (aliens) {
      aliens.name = name;
      aliens.tech = tech;
      aliens.sub = sub;
      await aliens.save();
      res.json({
        status: 200,
        success: true,
        message: "Alien updated Successfully",
        aliens,
      });
    }
  } catch (err) {
    console.log(err);
    res.json({
      status: 400,
      success: false,
      message: "Failed to update Alien",
    });
  }
};

export const deleteAlien = async (req, res) => {
  try {
    const aliens = await aliensSchema.findByIdAndDelete(req.params.id);
    if (aliens) {
      res.json({
        status: 200,
        success: true,
        message: "Alien deleted successfully",
      });
    }
  } catch (err) {
    console.log(err);
    res.json({
      status: 400,
      success: true,
      message: "Failed to delete Alien",
    });
  }
};
