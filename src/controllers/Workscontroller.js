const WorksModel = require('../models/WorksModel');

exports.create = async (req, res) => {
  try {
    const reqBody = req.body;
    const email = req.headers.email;
    reqBody.email = email;

    const result = await WorksModel.create(reqBody);
    res.status(200).json({ status: "success", data: result });
  } catch (e) {
    res.status(500).json({ status: "fail", data: e.toString() });
  }
};

// Read
exports.read = async (req, res) => {
  try {
    const works = await WorksModel.find();
    res.status(200).json({ status: "success", data: works });
  } catch (e) {
    res.status(500).json({ status: "fail", data: e.toString() });
  }
};


// exports.update = async (req, res) => {
//   try {
//     const id = req.params.id;
//     const reqBody = req.body;
//     const email = req.headers.email;
    
//     const work = await WorksModel.findOne({ _id: id, email });

//     if (!work) {
//       return res.status(404).json({ status: "fail", data: "Work not found" });
//     }

//     const result = await WorksModel.updateOne({ _id: id }, reqBody);
//     res.status(200).json({ status: "success", data: result });
//   } catch (e) {
//     res.status(500).json({ status: "fail", data: e.toString() });
//   }
// };


// Update a work by ID
exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const reqBody = req.body;
    // Verify the token using the middleware
    const email = req.headers.email;

    // Find the work by ID
    const work = await WorksModel.findOne({ _id: id });

    if (!work) {
      return res.status(404).json({ status: "fail", data: "Work not found" });
    }

    // Check if the owner's email matches the email in the work
    if (work.email !== email) {
      return res.status(401).json({ status: "fail", data: "Unauthorized" });
    }

    // Update the work
    const result = await WorksModel.updateOne({ _id: id }, reqBody);
    res.status(200).json({ status: "success", data: result });
  } catch (e) {
    res.status(500).json({ status: "fail", data: e.toString() });
  }
};

exports.delete = async (req, res) => {
  try {
    const id = req.params.id;
    const email = req.headers.email;

    const work = await WorksModel.findOne({ _id: id, email });

    if (!work) {
      return res.status(404).json({ status: "fail", data: "Work not found" });
    }

    const result = await WorksModel.deleteOne({ _id: id });
    res.status(200).json({ status: "success", data: result });
  } catch (e) {
    res.status(500).json({ status: "fail", data: e.toString() });
  }
};
