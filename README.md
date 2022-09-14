## Puppies API with Typescript

In this exercise the goal is to get familiar with Typescript and how to use it in Node.js.

### The task

The task is to create a RESTful API with the following endpoints:

- GET: `api/puppies`. This should return a list of all puppies in JSON-format.
- GET: `api/puppies/:id`. This should return one puppy in JSON-format.
- POST: `api/puppies`. This should create and return the newly added puppy.
- PUT: `api/puppies/:id`. This should put one puppy down (jk, just update the specific puppy).
- DELETE: `api/puppies/:id`. This should actually put one puppy down aka delete it.

The database for this task I set up to be a MongoDB free database.

Each `puppy` has the following attributes: 
    - id
    - breed
    - name
    - birth date
