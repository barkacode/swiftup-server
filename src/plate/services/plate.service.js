const Plate = require("../models/plate.model");

exports.findPlateById = async (id) => {
  return await Plate.findOne({ plateId: id });
};

exports.activateOrUpdatePlate = async (plateId, type, targetUrl) => {
  let plate = await Plate.findOne({ plateId });
  if (!plate) {
    plate = new Plate({
      plateId,
      type,
      targetUrl,
      isConfigured: true,
      metadata: {
        createdAt: Date.now(),
      },
    });
  } else {
    plate.type = type;
    plate.targetUrl = targetUrl;
    plate.isConfigured = true;
    plate.metadata.lastScan = Date.now();
  }
  return await plate.save();
};
