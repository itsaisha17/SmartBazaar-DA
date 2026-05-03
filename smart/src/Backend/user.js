import mongoose from 'mongoose';

const PendingSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  select: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  }
});
const PendingModel = mongoose.model('Ort', PendingSchema);
export default PendingModel