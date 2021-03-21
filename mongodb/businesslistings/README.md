
## Upload document to mongoDB

`mongoimport --uri mongodb+srv://testuser:wo54Wy8MrsXJyMbT@cluster0.vct1o.mongodb.net/business_listings --collection attributes --type csv --file Business\ listings\ Dataset\ -\ Sheet1.csv --headerline --useArrayIndexFields`

For the array fields, make sure the column name is in the form name.0, name.1 etc.

## Search query over HTTP

- Install deps using `npm install mongodb express body-parser cors --save`
- Run connection to db using `DEBUG=express:* node mongo.js`
- IN postman (or equivalent) `GET http://localhost:3000/search?query=Barbra`


