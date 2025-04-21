const { Schema, model } = require("mongoose");

const plateSchema = new Schema({
  plateId: { type: String, required: true, unique: true },
  type: { type: String, required: true },
  targetUrl: { type: String, required: true },
  isConfigured: { type: Boolean, default: false },
  metadata: {
    createdAt: { type: Date, default: Date.now },
  },
});

const Plate = model("Plate", plateSchema);

module.exports = Plate;
