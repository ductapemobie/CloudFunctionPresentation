const { Storage } = require("@google-cloud/storage");
const storage = new Storage();
const cors = require('cors')();

exports.helloHttp = async (req, res) => {
cors (req,res, async () => {
        const body = req.body;
        const bucket = storage.bucket("example-negate-bucket");
        const buffer = Buffer.from(body.content, "base64");
        const file = bucket.file(`${body.name}.${body.extension}`);
        await file.save(buffer); // takes time so we must await
        await file.makePublic();
        console.log(file.publicUrl());
        res.send({ photoLink: file.publicUrl() });
    })
};