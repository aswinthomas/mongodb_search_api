# mongodb_textsearch_samples

This sample uses the [atlas search](https://docs.atlas.mongodb.com/atlas-search/)


## Using mongoDB console

To test search using mongodb console, refer [this tutorial](https://docs.atlas.mongodb.com/reference/atlas-search/tutorial/). Then execute the query as below. It is assumed that the database `sample_airbnb.listingsAndReviews` is used.

```
db.listingsAndReviews.aggregate([{$search: {"text": {"query": "House","path": "property_type"}}}, {$limit: 5}, {$project: {"_id": 0, "name": 1, "property_type": 1}}])
```

## Using nodejs

`npm install mongoose-atlas-search --save`