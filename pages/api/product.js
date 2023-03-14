const { client } = require("../../lib/client");



const handler = async(req, res)=> {
    try {
        data = await client.fetch('*[_type == "post"]');
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({error: "Something went wrong"})
    }
}

export default handler;