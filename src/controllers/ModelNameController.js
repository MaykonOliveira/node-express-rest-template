const mongoose = require('mongoose');

const ModelName = mongoose.model('ModelName');

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const model = await ModelName.paginate({}, { page, limit: 10 });
    return res.json(model);
  },
  async store(req, res) {
    const model = await ModelName.create(req.body);
    return res.json(model);
  },
  async show(req, res) {
    const model = await ModelName.findById(req.params.id);
    return res.json(model);
  },
  async update(req, res) {
    const model = await ModelName.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      useFindAndModify: false,
    });
    return res.json(model);
  },
  async destroy(req, res) {
    await ModelName.findByIdAndRemove(req.params.id, { useFindAndModify: false });
    return res.send();
  },
};
