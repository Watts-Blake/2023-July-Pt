## What is a Server
  Hardware or Software that pushes and pulls data across a network.
  The Client makes Requests.
  The Server processes those requests and sends back a response.
## HTTP Basics
  Hypertext Transfer Protocol : the process of exchanging hypertext between clients and servers.
  ### Properties of HTTP
  - Reliable Connections : messages passed between a client and server sacrifice speed for trust.
  - Stateless Transfer : It doesn't store any information.
  ### Intermediaries
  - Proxies : Modify our request to appear as if coming from another source.
  - Gateways : They pretend to be the server you've requested (proxies for servers)
  - Tunnels : Pass on the request (Routers, Modems, ISP, etc)
## HTTP Request Components
  ### Request Line
  `GET / HTTP/1.1`
  - Method or Verb
  - URI (Uniform Resource Indicator), the collection of things you want to access
  - Version of HTTP you want to use
  ### Headers
    key/value pairs that define the meta-data of a request
  ### Body
    Used when sending data that doesn't fit in a header or in the URI. When using a body, you must have a Content-Type header.
  ### Common HTTP Verbs/Methods
  CRUD : CREATE, READ, UPDATE, DELETE

  - GET : used to retrieve resources from a server
  - POST : used to create new resources on a server
  - PUT : used to update resources on a server, via replacing
  - PATCH : used to update resources on a server, you can edit piece-meal
  - DELETE : used to delete a resource from a server
  ### Content-Type Headers (MIME Types)
  - application/x-www-form-urlencoded : data direct from an HTML web form
  - application/json : data format similar to JavaScript objects
  - multipart/form-data : info submitted via HTML web form with multiple media types
## HTTP Response Components
  ### Status Line
  `HTTP/1.1 200 OK`
  - Version of HTTP used
  - Status Code, represents how the server handled the request or an error
  - Reason Phrase, human way of stating request status

  ### Status Codes
  - 100 - 199 : Informational, tells how the server is processing the requesting
  - 200 - 299 : Successful
  - 300 - 399 : Redirection
  - 400 - 499 : Client Issue, you messed up the request somehow
  - 500 - 599 : Server Issues, the server messed up the request
## RESTful Routes Conventions
REpresentation State Transfer : A convention for defining endpoints so that other developers can use them.
Route: The URL for a request `/home`

Endpoint: A combination of method and route `GET /home`

Route Parameter: placeholder in a route, that can be filled in
`/users/:userID` => `/users/17`

  ### 2 Types of URL
    Resources :
    - /users => a collection of users
    - /tweets => a collection of tweets
    Record : 
    - /users/17 => a single user with the id 17
    - /tweets/45 => a single tweet with the id 45

    Nested Resources : 
    - /users/17/tweets > all tweets belonging to user 17
    - /users/17/tweets/45 > the tweet with an id of 45 belonging to user 17
    - /users/:userId/tweets/:tweetId

    - /posts/13/comments > all comments on post 13
    - /users/4/songs/12/ > song 12 belonging to user 4