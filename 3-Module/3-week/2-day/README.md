## What is a Server
  A server is hardware or software that pushes and pulls data across a network. It's purpose is to send data to the client. The client can request data from a server, and a server processes that request and responds with the desired data or an error.
## HTTP Basics
  `HyperText Transfer Protocol` defines the process of exchanging hypertext between clients and servers.
  ### Properties of HTTP
  - Reliable Connection : messages between client and server sacrifice speed for the sake of trust.
  - Stateless Transfer : This protocol doesn't store any information.
  ### Intermediaries
  - Proxies : Modify your request so it appears to come from another source.
  - Gateways : Pretend to be the server you requested (proxies for servers).
  - Tunnels : Pass on your Request to the server (ISP, Router, etc).
## HTTP Request Components
  ### Request Line
  `GET /posts HTTP/1.1`
  - The Method or Verb
  - URI (Uniform Resource Indicator) 
  - HTTP Version (1.1, 2)
  ### Headers
  key /value pair that defines meta-data needed for the request
  ### Body
  When sending data that doesn't fit in a header and is too complex for the URI, we put it in a body.
  
  ### Common HTTP Verbs/Methods
  - CRUD : Create, Read, Update, Delete

  - GET : used to retrieve data from a server
  - POST : used to create a new resource on a server
  - PUT : used to update a resource on a server, replaces entire resource
  - PATCH : used to update a resource on a server, updates piece-mail
  - DELETE : used to destroy a resource on a server
  ### Content-Type Headers (MIME Types)
  - application/x-www-form-urlencoded : data directly from and HTML web form
  - aplication/json : data that resembles JavaScript objects
  - multipart/form-data : data submitted from an HTML web form with multiple media types.
## HTTP Response Components
  ### Status Line
  `HTTP/1.1 200 OK`
  - HTTP verion used
  - Status Code : what happened or what went wrong
  - Reason Phrase : explaination of status code

  ### Status Codes
  - 100 - 199 : Informational - tells you about the status of the request or the steps the server is taking.
  - 200 - 299 : Success - the request was good and the server handled it
  - 300 - 399 : Redirection - the server is pointing you to another URI
  - 400 - 499 : Client Errors - you messed up in the request
  - 500 - 599 : Server Errors - the server messed up independent of you
## RESTful Routes Conventions
REpresentational State Transfer : A convention for easily defining endpoints for other developers.

Route: the URL for a request `/my/tweets/`

Endpoint: Combination of a Method and Route `GET /my/tweets`

Route Parameter: Placeholders in a route that can be filled in `/tweets/:tweetId` => `/tweets/17`

  ### 2 Types of URL
  ```javascript
    Resources :
    - `/tweets` => return a collection of tweets
    - `/invoices` => return a collection of invoices
    - `/people` => return a collection of people
    Record : 
    - `/tweets/6541650981` => return one tweet with an id of 6541650981
    - `/invoices/17` => return one invoice with an id of 17
    - `/people/37` => return one person with an id of 37

    Nested Resources : 
    - `/users/10/tweets` => return all tweets belonging to user 10
    - `/users/10/tweets/4` => return the tweet with id 4 belonging to user 10
    - `server/6/channel/5/message/3` => return a message with id 3 in channel 5 in server 6
  ```