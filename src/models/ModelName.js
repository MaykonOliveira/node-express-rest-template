const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ModelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

ModelSchema.plugin(mongoosePaginate);

mongoose.model('ModelName', ModelSchema);
