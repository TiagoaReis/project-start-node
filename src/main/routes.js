import { Router } from 'express';
import ProvidersControllers from '../controllers/ProvidersControllers';
import SearchProvControllers from '../controllers/SearchProvControllers';
import UsersControllers from '../controllers/UsersControllers';

const routes = Router();

routes.get('/', (req, res) => res.json({ Sistem: 'API - Assist24hs' }));
routes.get('/providers', ProvidersControllers.index);
routes.post('/providers', ProvidersControllers.store);
routes.get('/search', SearchProvControllers.index);
routes.get('/users', UsersControllers.index)
routes.post('/users', UsersControllers.store)
export default routes;
