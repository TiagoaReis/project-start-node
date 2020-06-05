import mongoose from 'mongoose';

const providers = new mongoose.Schema({
    name: String,
    cellfone: String,
    service: String,
    obs_service: String,
    address: String,
    neighborhood: String,
    city: String,
    fulltime: Boolean,
});

export default mongoose.model('providers', providers);
