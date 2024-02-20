const ProductModel = require('../model/Products')

// C = Create
exports.CreateProduct = (req,res)=>{
    let reqBody = req.body;
    ProductModel.create(reqBody,(error,data)=>{
        if (error){
            res.status(400).json({status:'Fail',data:error});
        }else {
            res.status(200).json({status:'Success',data:data});
        }
    })
}

// R = Read
exports.ReadProduct = (req,res)=>{
    let query = {}
    let projection = "ProductName ProductCode Img UnitPrice Quantity TotalPrice CreatedData";
    ProductModel.find(query,projection,(error,data)=>{
        if (error){
            res.status(400).json({status:'Fail',data:error});
        }else {
            res.status(200).json({status:'Success',data:data});
        }
    });
}