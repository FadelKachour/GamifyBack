module.exports = mongoose=>{

    const Quest = mongoose.model (
        "quest",
        mongoose.Schema(
            {
                name: String,
                description: String,
                status:String,
                credit:Number
                
            },
          
        )
    );
    return Quest;
};