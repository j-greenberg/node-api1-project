// INDEX.js file for Server

const express = require('express'); // similar to above, but works in all node versions
const server = express(); 
server.use(express.json());
const port = 5000; 
server.listen(port, () => console.log(`\n== Server listening on port ${port} ==\n`))

// Endpoints

const shortId = require('shortid');
console.log("Short ID:", shortId.generate());

const users = [
    {
        id: 1, // hint: use the shortid npm package to generate it
        name: "Jane Doe", // String, required
        bio: "Not Tarzan's Wife, another Jane",  // String, required
      },
      {
        id: 2, // hint: use the shortid npm package to generate it
        name: "Tarzan", // String, required
        bio: "King of the jungle",  // String, required
      },
      {
        id: 3, // hint: use the shortid npm package to generate it
        name: "Bobby", // String, required
        bio: "Jungle boy",  // String, required
      }
]

// | Method | URL       Description 
// | DELETE | /api/users/:id | Removes the user with the specified `id` and returns the deleted user. 
// | PATCH  | /api/users/:id | Updates the user with the specified `id` using data from the `request body`. Returns the modified user |

server.get("/", (req, res) => {
    console.log("GET request on /", req.params);
	res.status(200).json({api: "Server is running......." });
});

// | GET    | /api/users     | Returns an array users.
server.get("/api/users", (req, res) => {
    console.log("GET request on /api/users/", req.params);
    res.status(200).json(users);
})

// | GET    | /api/users/:id | Returns the user object with the specified `id`. 
server.get(`/api/users/:id`, (req, res) => {
    console.log(`GET request on /api/users/id`, req.params);
    res.status(200).json(users.find((obj) => {
        return obj.id == req.params.id;
    }));
})

// | POST   | /api/users     | Creates a user using the information sent inside the `request body`. 
server.post("/api/users", (req, res) => {
    console.log("POST request on /api/users")
    console.log(req.body, req.body);
    users.push(req.body); 
    res.status(200).json(users);
}); 

server.get('/api/hubs', (req, res) => {
    const hubs = [
        {
            "id": 1, 
            "name": "web28", 
            lessonId: 1, 
            cohort: "web 28", 
        },
        {
            "id": 2, 
            "name": "web28", 
            lessonId: 1, 
            cohort: "web 28", 
        },		
        {
            "id": 3, 
            "name": "web28", 
            lessonId: 1, 
            cohort: "web 28", 
        },
    ];
    res.status(200).json(hubs);
});

server.post("/api/users", (req, res) => {
    users.push(req.params.id);
    res.status(200).json(users);
})