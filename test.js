const mongoose = require('mongoose');

// ネストされたスキーマ定義
const onSaleSchema = new mongoose.Schema({
    isActive: {
        type: Boolean,
        default: false
    },
    categories: {
        type: [String],
        default: []
    },
    inStore: {
        type: Number,
        default: 0
    }
});

// 新しいbikeオブジェクトのスキーマ定義
const bikeSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    isElectric: {
        type: Boolean,
        default: false
    }
});

// メインスキーマにネストされたスキーマを追加
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    onSale: {
        type: onSaleSchema, // ネストスキーマを参照
        default: {}
    },
    bike: {
        type: bikeSchema, // 新しいbikeスキーマを参照
        default: null
    },
    qty: {
        type: Number,
        default: 0
    }
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;


const newProduct = new Product({
    name: 'Mountain Bike',
    price: 1200,
    bike: {
        brand: 'Specialized',
        model: 'Stumpjumper',
        year: 2021,
        isElectric: false
    },
    qty: 5
});

newProduct.save()
    .then(() => console.log('Product saved!'))
    .catch(err => console.error(err));
