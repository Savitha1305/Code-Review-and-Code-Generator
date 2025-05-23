const aiService = require("../services/ai.service")

module.exports.generateCode = async (req, res) => {
    try {
        const code = req.body.code;

        if (!code || typeof code !== 'string') {
            return res.status(400).json("Valid code prompt is required");
        }

        const response = await aiService(code);
        
        // Send response directly as string
        return res.status(200).send(response);
    } catch (error) {
        return res.status(500).send("Error generating code: " + error.message);
    }
};