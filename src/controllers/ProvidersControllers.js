import Providers from '../models/providers';

export default {
    async index(req, res) {
        const listProviders = await Providers.find();
        return res.json(listProviders);
    },
    async store(req, res) {
        const {
            name,
            cellfone,
            service,
            obs_service,
            address,
            neighborhood,
            city,
            fulltime,
        } = req.body;

        const existProvider = await Providers.findOne({ cellfone });
        const existProviderName = await Providers.findOne({ name });

        if (!existProvider && !existProviderName) {
            const inProvider = await Providers.create({
                name,
                cellfone,
                service,
                obs_service,
                address,
                neighborhood,
                city,
                fulltime,
            });
            res.json(inProvider);
        } else {
            res.json({
                existProvider: 'true',
                response:
                    'Estas informações já foram cadastradas em nossa base de dados!',
            });
        }
    },
};

// console.log(req.body);
// res.json({
//     Token: 'a*ssist*1',
//     email: req.body.email,
// });
