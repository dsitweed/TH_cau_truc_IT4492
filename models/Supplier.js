import mongoose from "mongoose";

const SupplierSchema = new mongoose.Schema({
    // id mongoose auto generate
    name: {
        type: String,
        required:true,
        unique: true
    },
    address: {
        type: String
    },
    cperson: {
        type: String
    },
    cperson_phone: {
        type: String
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
    }
}, { timestamps:true });

export const SupplierModel = mongoose.model('Supplier_IT4492', SupplierSchema);