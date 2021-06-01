const controller = {
  temp(req, res) {
    const data = {
      status: "Rainy",
      temperature: 52,
      wind: 5,
      humidity: 100,
    };
    res.status(200).send(data);
  },
};

module.exports = controller;
