const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const ItemSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    Date: {
      type: Date,
      default: Date.now
    }
});

module.exports = Item = mongoose.model('item', ItemSchema);