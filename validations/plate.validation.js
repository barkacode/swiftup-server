const Joi = require("joi");

const activationSchema = Joi.object({
    type: Joi.string().valid("instagram", "google", "snapchat").required(),
    targetUrl: Joi.string().uri().required(),
});

exports.validateActivation = (req, res, next) => {
    const { error } = activationSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });
    next();
};
