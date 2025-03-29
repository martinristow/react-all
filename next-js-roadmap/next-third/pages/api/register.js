//api/register

import {addProduct} from "@/services/productService";

export default async function handler(req, res) {
    addProduct(req.body.title, req.body.description, req.body.price);
    res.status(200).json({message: "success"});
}