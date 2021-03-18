# mongodb_textsearch_samples

This sample uses the [atlas search](https://docs.atlas.mongodb.com/atlas-search/)


## Using mongoDB shell

To test search using mongodb console, refer [this tutorial](https://docs.atlas.mongodb.com/reference/atlas-search/tutorial/). Then execute the query as below. It is assumed that the database `sample_airbnb.listingsAndReviews` is used.

```
db.listingsAndReviews.aggregate([{$search: {"text": {"query": "House","path": "property_type"}}}, {$limit: 5}, {$project: {"_id": 0, "name": 1, "property_type": 1}}])
```

## Using nodejs

This example allows you to search for an building type (e.g. house, apartment) and it autocompletes with rental buildings available. On selection, it returns some attributes of the building

- Install deps using `npm install mongodb express body-parser cors --save`
- Run connection to db using `DEBUG=express:* node mongo.js`
- If testing on postman, call `GET http://localhost:3000/search?query=House`
- To run on Browser, run `npx serve` on another terminal and browse `http://localhost:5000` 