## Puppies API with Typescript

In this exercise the goal is to get familiar with Typescript and how to use it in Node.js.

### The task

The task is to create a RESTful API with the following endpoints:

- GET: `api/puppies`. This should return a list of all puppies in JSON-format.
- GET: `api/puppies/:id`. This should return one puppy in JSON-format.
- POST: `api/puppies`. This should create and return the newly added puppy.
- PUT: `api/puppies/:id`. This should update the specific puppy.
- DELETE: `api/puppies/:id`. This should delete a puppy object from the database.

The database for this task I set up to be a MongoDB free database.

Each `puppy` has the following attributes: 
    - id
    - breed
    - name
    - birth date
    
    
### Notes
- if you wish to simulate the app locally:
    1) create a .env file inside the 'disc' folder
    2) inside add:
        1) DB_CONN_STRING="<your connection string>"
        2) DB_NAME="<your database name"
        3) COLLECTION_NAME="<your collection name>"
    3) please note the above details should come from a MongoDB database;
             -for more information on this, please check https://www.mongodb.com/
    4) your database should be populated with objects following the 'puppy' schema:
            - id
            - breed
            - name
            - birth date
    5) ENJOY!

