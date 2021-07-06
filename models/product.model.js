module.exports = mongoose=>{

    const Product = mongoose.model (
        "product",
        mongoose.Schema(
            {
                name: String,
                description: String,
                price:Number
                
            },
          
        )
    );
    return Product;
};