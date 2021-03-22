
## Upload document to mongoDB

```
mongoimport --uri mongodb+srv://testuser:wo54Wy8MrsXJyMbT@cluster0.vct1o.mongodb.net/business_listings --collection attributes --type csv --file Business\ listings\ Dataset\ -\ Sheet1.csv --headerline
```

The autocomplete does not support string arrays, hence the option `--useArrayIndexFields` is not used for services. This also gives flexibility to provide differing scores to each primary, secondary or tertiary service.

## Search query over HTTP

- Install deps using `npm install mongodb express body-parser cors --save`
- Run connection to db using `DEBUG=express:* node mongo.js`
- In postman (or equivalent) `GET http://localhost:3000/search?query=Barbra`. Try additional queries like the following
	- `fly cass serv`
- 


