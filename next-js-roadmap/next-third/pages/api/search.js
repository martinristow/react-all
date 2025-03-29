

// api/search?query=Martin
import {searchProductByQuery} from "@/services/productService";

export default async function handler(req, res){
    console.log(req, res)
    // req - request -> podatoci koj gi prakjame koga doagjame na stranicata
    // res - response -> odgovor koj go davame
    if(!req.query.prebaruvanje){
        res.status(400).json({message:"Nemate vneseno nikakvi parametri za prebaruvanje"})
    }

    const data = await searchProductByQuery(req.query.prebaruvanje);
    console.log(data);

    res.status(200).json(data);
}