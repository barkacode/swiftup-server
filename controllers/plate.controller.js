const plateService = require("../services/plate.service");

exports.handleScan = async (req, res, next) => {
    try {
        const id = req.params.id;
        const plate = await plateService.findPlateById(id);
        console.log(id, plate);
        if (!plate) return res.redirect(`/plates/activate/${id}`);

        return res.redirect(plate.targetUrl);
    } catch (err) {
        next(err);
    }
};

exports.handleActivation = async (req, res, next) => {
    try {
        const { type, targetUrl } = req.body;
        const id = req.params.id;

        const plate = await plateService.activateOrUpdatePlate(
            id,
            type,
            targetUrl
        );
        res.status(200).json({ message: "Plate activée avec succès", plate });
    } catch (err) {
        next(err);
    }
};
