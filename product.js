const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/shopApp', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log('connection OK')
})
.catch(err => {
    console.log('connection ERROR')
    console.log(err)
})

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required : true
    },
    price: {
        type: Number,
        required : true
    },
    onSale: {
        type: Boolean,
        default: false,
        categories: [String],

        inStore: {
            type:Number,
            default: 0
        }
    },        
    qty: {
        type: Number,
        default: 0
    }
})

const Product = mongoose.model('Product', productSchema)

const bike = new Product({
    name: 'mountRRR',
    price: 568,
    categories: ['mount', 'tuna'],
    qty: 21
})

bike.save()
.then(data => {
    console.log('success!!!')
    console.log(data)
}).catch(err => {
    console.log('error')
    console.log(err.errors.name.properties.message)
})