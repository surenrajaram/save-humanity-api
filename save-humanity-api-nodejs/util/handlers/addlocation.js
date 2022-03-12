const { admin, db } = require("../admin");

exports.addlocation = async(req, res) => {
    
    const locRefs = db.collection('Locations');
    try{
        locRefs.add({"id":"2","Long":"34.23","Phone":"543","Lat":"65.34"}).then(() =>
        {
            return res.status(201).json('success');
        });

    } catch (error) {
        return res
        .status(500)
        .json({ general: "Something went  in adding, please try again"});          
    }
}