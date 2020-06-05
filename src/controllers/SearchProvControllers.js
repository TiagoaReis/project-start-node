import Providers from '../models/providers';

export default {
    async index(req, res) {
        const { city } = req.query;
        const list = await Providers.find({
            city: {
                $in: city,
            },
        });
        return res.json(list);
        // filtrar por cidade
    },
};
