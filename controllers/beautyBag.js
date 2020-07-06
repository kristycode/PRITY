const Color = require("../models/beauty-bag");
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
        id: color._id,
        message: "color saved to the db",
      }).catch(error => {
        return res.status(400).json({
          error,
          message: "Color not created"
        })
      });
    });
};

getColors = async (req, res) => {
  await Color.find({}, (err, colors) => {
      if (err) {
          return res.status(400).json({ success: false, error: err })
      }
      if (!colors.length) {
          return res
              .status(404)
              .json({ success: false, error: `Color not found` })
      }
      return res.status(200).json({ success: true, data: colors })
  }).catch(err => console.log(err))
}

module.exports = {
  captureColor,
  getColors
};
