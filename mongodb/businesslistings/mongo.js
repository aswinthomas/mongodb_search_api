const { MongoClient, ObjectID } = require("mongodb");
const Express = require("express");
const Cors = require("cors");
//const BodyParser = require("body-parser");
//const { request } = require("express");

const client = new MongoClient("mongodb+srv://testuser:wo54Wy8MrsXJyMbT@cluster0.vct1o.mongodb.net/business_listings?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true });
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
        collection = client.db("business_listings").collection("services");
        console.log("Connected to DB and collection")
    } catch (e) {
        console.error(e);
    }
});

server.get("/search", async (request, response) => {
    try {
        let result = await collection.aggregate([
            {
                $search: {
                    compound: {
                        should: [
                        {
                            autocomplete: {
                                query: `${request.query.query}`,
                                path: 'name',
                                fuzzy: {
                                    'maxEdits': 2,
                                    'prefixLength': 3
                                },
                                "score": { "boost": { "value": 1 } }
                            }
                        },
                        {
                            autocomplete: {
                                query: `${request.query.query}`,
                                path: 'primary_service',
                                fuzzy: {
                                    'maxEdits': 2,
                                    'prefixLength': 3
                                },
                                "score": { "boost": { "value": 3 } }
                            }
                        },
                        {
                            autocomplete: {
                                query: `${request.query.query}`,
                                path: 'description',
                                fuzzy: {
                                    'maxEdits': 2,
                                    'prefixLength': 3
                                },
                                "score": { "boost": { "value": 1 } }
                            }
                        }]
                    },
                    // highlight: {
                    //     path: 'primary_service'
                    // }
                }
            },
            {
                $limit: 5
            },
            {
                $project: {
                    _id: 0,
                    name: 1,
                    description: 1,
                    category: 1,
                    primary_service: 1,
                    secondary_service: 1,
                    tertiary_service: 1,
                    score: {
                        $meta: 'searchScore'
                    },
                    // highlight: {
                    //     $meta: 'searchHighlights'
                    // }
                }
            }
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
