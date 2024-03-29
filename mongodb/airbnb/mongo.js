const { MongoClient, ObjectID } = require("mongodb");
const Express = require("express");
const Cors = require("cors");
//const BodyParser = require("body-parser");
//const { request } = require("express");

const client = new MongoClient("mongodb+srv://testuser:wo54Wy8MrsXJyMbT@cluster0.vct1o.mongodb.net/sample_airbnb?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true });
const server = Express();

//server.use(BodyParser.json());
//server.use(BodyParser.urlencoded({ extended: true }));
server.use(Cors());

var collection;

//server.get("/search", async (request, response) => {});
//server.get("/get/:id", async (request, response) => {});

server.listen("3000", async () => {
    try {
        await client.connect();
        collection = client.db("sample_airbnb").collection("listingsAndReviews");
        console.log("Connected to DB and collection")
    } catch (e) {
        console.error(e);
    }
});

server.get("/search", async (request, response) => {
    try {
        let result = await collection.aggregate([
            {
                "$search": {
                    "autocomplete": {
                        "query": `${request.query.query}`,
                        "path": "property_type",
                        "fuzzy": {
                            "maxEdits": 2,
                            "prefixLength": 3
                        }
                    }
                },
            },
            {$limit: 5}
        ]).toArray();
        response.send(result);
    } catch (e) {
        response.status(500).send({ message: e.message });
    }
});

server.get("/get/:id", async (request, response) => {
    try {
        let result = await collection.findOne({ "_id": ObjectID(request.params.id) });
        response.send(result);
    } catch (e) {
    	response.status(500).send({ message: e.message });
    }
});
