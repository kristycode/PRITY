const Color = require("../models/user-color");
//The functionality for the db - i.e looking for data , create etc. -

captureColor = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "not working",
    });
  }

  const color = new Color(body);

  if (!color) {
    return res.status(400).json({ success: false, error: err });
  }
  color
    .save()

    .then(() => {
      return res.status(200).json({
        success: true,
        message: "controller color works",
      });
    });
};

module.exports = {
  captureColor,
};
