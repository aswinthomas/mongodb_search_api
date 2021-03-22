
## Upload document to mongoDB

```
mongoimport --uri mongodb+srv://testuser:wo54Wy8MrsXJyMbT@cluster0.vct1o.mongodb.net/business_listings --collection attributes --type csv --file Business\ listings\ Dataset\ -\ Sheet1.csv --headerline
```

The autocomplete does not support string arrays, hence the option `--useArrayIndexFields` is not used for services. This also gives flexibility to provide differing scores to each primary, secondary or tertiary service.

## Search query over HTTP

Search in atlas as be [standard text](https://docs.atlas.mongodb.com/reference/atlas-search/text/#std-label-text-ref), [wildcard](https://docs.atlas.mongodb.com/reference/atlas-search/wildcard/#std-label-wildcard-ref)(query with special characters), [fuzzy](https://docs.atlas.mongodb.com/reference/atlas-search/text/#fuzzy-examples)(strings similar to search item) or [autocomplete](https://docs.atlas.mongodb.com/reference/atlas-search/autocomplete/#std-label-autocomplete-ref)(query phrase with character sequence from incomplete input). In this example we look at autocomplete with fuzzy included.

- Install deps using `npm install mongodb express body-parser cors --save`
- Run connection to db using `DEBUG=express:* node mongo.js`
- In postman (or equivalent) `GET http://localhost:3000/search?query=Barbra`. Try additional queries like the following
	- `fly cass serv`
- To run on Browser, run `npx serve` on another terminal and browse `http://localhost:5000` 


