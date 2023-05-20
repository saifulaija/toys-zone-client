import React from "react";

const Blog = () => {
  return (
    <div className="w-full bg-gray-100 my_container my-10 text-justify p-6">
      <h1 className="heading">My Blog</h1>

      <div>
        <h3 className="blog">
          1. What is an access token and refresh token? How do they work and
          where should we store them on the client-side?
        </h3>
        <p>
          An access token is a credential that allows a client (such as a mobile
          app or a website) to access protected resources on behalf of a user.
          It is typically issued by an authentication server after the user
          successfully logs in. The access token is included in each request to
          the server's API as proof of authentication. It has a limited lifespan
          and expires after a predefined period, requiring the client to obtain
          a new one. A refresh token is a long-lived credential that is used to
          obtain a new access token once the current one expires. When the
          access token expires, the client can send the refresh token to the
          authentication server to obtain a new access token without requiring
          the user to re-enter their credentials. Refresh tokens are securely
          stored on the client-side and are not typically accessible by the
          browser or other client-side code.
        </p>
      </div>
      <div>
        <h3 className="blog">2. Compare SQL and NoSQL databases?</h3>
        <p>
          SQL (Structured Query Language) and NoSQL (Not only SQL) are two
          different types of database management systems with distinct
          characteristics. Here are some key points of comparison:
        </p>
        <br />
        <p>
          SQL databases are typically vertically scalable, meaning they can
          handle increased loads by improving hardware resources such as CPU,
          RAM, and storage. Scaling up can have limitations. NoSQL databases
          excel at horizontal scalability, allowing them to distribute data
          across multiple servers and handle high traffic volumes. They can
          scale out easily by adding more servers to the cluster.
        </p>
      </div>
      <div>
        <h3 className="blog">3. What is express js? What is Nest JS?</h3>
        <p>
          Express.js is a popular and lightweight web application framework for
          Node.js. It provides a minimalistic and flexible set of features for
          building web servers and APIs. Express.js simplifies the process of
          handling HTTP requests, routing, middleware integration, and response
          handling. It allows developers to quickly build scalable and efficient
          web applications using JavaScript on the server-side. NestJS, on the
          other hand, is a progressive and opinionated Node.js framework built
          on top of Express.js. It aims to provide a structured and efficient
          approach to building server-side applications. NestJS utilizes
          TypeScript as its primary language and incorporates concepts from
          object-oriented programming, functional programming, and reactive
          programming. It emphasizes modularity, dependency injection, and easy
          integration with other libraries and frameworks.
        </p>
      </div>
      <div>
        <h3 className="blog">
          {" "}
          4. What is MongoDB aggregate and how does it work ?
         
        </h3>
        <p>
            MongoDB's aggregation framework is a powerful feature that allows
            you to perform advanced data processing and analysis tasks on your
            MongoDB collections. It provides a flexible way to group, filter,
            transform, and calculate data within a collection. The aggregation
            framework works by processing data through a series of stages. Each
            stage performs a specific operation on the input data and passes the
            results to the next stage. The output of the final stage is the
            result of the aggregation operation.
          </p>
      </div>
    </div>
  );
};

export default Blog;
