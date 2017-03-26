






/*
Lets fetching data from the database

-try to open the robomongo and look at the created Todo databaseant its documents

-fetching is done using the method "find()" : 
    -without argument will fetch all documents in the collection
    -It return mongodb cursor wich is not the actual documents themselves but it is pointer to those documents
        this cursor has a ton of methods to get our documents e.g. 
            .toArray() -> which return our documents as array
                       -> it returns a Promise so we can call (then)

- to fetch data depending on specific field:
    .find({completed: true})//to grab the documents have that field
    the {} in the find() called query

- to fetch the document of specific id:
    .find({_id: new ObjectID("the_id")})//as the id is an object(not string)

*/

const {MongoClient, ObjectID} = require("mongodb");


MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db)=>{
    if(err){
        return console.log("Unable to connect to the database server");
    }
    console.log("Connected to the MongoDB server");
    //[*]fetching data from the database collection called "Todos"
    // db.collection("Todos").find().toArray().then((docs)=>{
    //     console.log("Todos");
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err)=>{
    //     console.log("Unable to fetch todos", err);
    // });

    //[*] return the count of the collections
    // db.collection("Todos").find().count().then((count)=>{
    //     console.log("Todos");
    //     console.log(`Todos Count: ${count}`);
    // }, (err)=>{
    //     console.log("Unable to fetch todos", err);
    // });
    db.collection("Users").find({name: "Mohamed"}).toArray().then((docs)=>{
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err)=>{
        if(err){console.log("Unable to fetch the users")}
    })

    db.close();
});

