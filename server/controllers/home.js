const controller = {
  render(req, res) {
    res.sendFile("index.html");
  },
};

module.exports = controller;
