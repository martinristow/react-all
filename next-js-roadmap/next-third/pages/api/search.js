

// api/search?query=Martin
export default function handler(req, res){
    console.log(req, res)
    // req - request -> podatoci koj gi prakjame koga doagjame na stranicata
    // res - response -> odgovor koj go davame
    if(!req.query.prebaruvanje){
        res.status(400).json({message:"Nemate vneseno nikakvi parametri za prebaruvanje"})
    }

    res.status(200).json({message: "Ovaj api raboti"})
}