import React from "react";
import "./blogs.css";

const Blogs = () => {
  return (
    <div className="container ">
      <h1 className="text-center">Blogs</h1>
      <div className="m-5 blog-part">
        <h2>Difference between javascript and node.js</h2>
        <p>
          <b>Javascript .</b>
          <li>
            Javascript is a programming language that is used for writing
            scripts on the website.
          </li>
          <li>
            Javascript can only be run in the browsers. It is basically used on
            the client-side. Javascript is used in frontend development.
          </li>
          <li>
            Javascript is capable enough to add HTML and play with the DOM.{" "}
          </li>
          <li>
            Javascript can run in any browser engine as like JS core in safari
            and Spidermonkey in Firefox.{" "}
          </li>
          <li>Some of the javascript frameworks are RamdaJS, TypedJS, etc. </li>
          <li>
            It is the upgraded version of ECMA script that uses Chrome's V8
            engine written in C++ .
          </li>
          <b>Node.js .</b>
          <li>NodeJS is a Javascript runtime environment.</li>
          <li>
            We can run Javascript outside the browser with the help of NodeJS.
            Nodejs is used in server-side development.
          </li>
          <li>Nodejs does not have capability to add HTML tags.</li>
          <li>
            It is mostly used on the server-side. Nodejs is used in server-side
            development.
          </li>
          <li>
            V8 is the Javascript engine inside of node.js that parses and runs
            Javascript.
          </li>
          <li>
            Some of the Nodejs modules are Lodash, express etc. These modules
            are to be imported from npm.
          </li>
          <li>Nodejs is written in C, C++ and Javascript.</li>
        </p>
      </div>
      <div className="m-5 blog-part">
        <h2>When should you use node.js and when should you use mongodb</h2>
        <p>
          <b>When should you use node.js</b>
          <li>
            Any project needs a programming environment and a runtime library
            that offers you basic programming tools/support and can compile
            and/or interpret your code. Nodejs is such as tool for the
            Javascript programming language. Nodejs is a Javascript engine that
            you can write any application you want with (by programming in the
            Javascript language). It runs your Javascript code. Most commonly,
            it is used to build servers that can respond to web requests, though
            it can be used for lots of other types of code too.
          </li>
          <b>When should you use mongodb</b>
          <li>
            MongoDB is a database engine. Code within some application or server
            uses MongoDB to save, query or update data in a database. There are
            many web servers built with nodejs that will then use MongoDB for
            storing data. MongoDB offers an API library that runs within a
            Nodejs application to give you programmatic access to MongoDB so you
            can create databases and then add, query, update or delete data from
            the MongoDB database. MongoDB also has API libraries for other
            programming environments such as Python, Java, etc...
          </li>
        </p>
      </div>
      <div className="m-5 blog-part">
        <h2>Differences between sql and nosql databases.</h2>
        <p>
          <b>SQL</b>
          <li>RELATIONAL DATABASE MANAGEMENT SYSTEM 'RDBMS'.</li>
          <li>These databases have fixed or static or predefined schema</li>
          <li>These databases are not suited for hierarchical data storage.</li>
          <li>These databases are best suited for complex queries</li>
          <li>Vertically Scalable. Follows ACID property</li>
          <b>NoSQL</b>
          <li>Non-relational or distributed database system.</li>
          <li>They have dynamic schema</li>
          <li>
            These databases are best suited for hierarchical data storage.
          </li>
          <li>These databases are not so good for complex queries</li>
          <li>Horizontally scalable. </li>
          <li>Follows CAP(consistency, availability, partition tolerance)</li>
        </p>
      </div>
      <div className="m-5 blog-part">
        <h2> What is the purpose of jwt and how does it work</h2>
        <p>
          <b>JWT Work</b>: JSON Web Token (JWT) is an open standard (RFC 7519)
          that defines a compact and self-contained way for securely
          transmitting information between parties as a JSON object. This
          information can be verified and trusted because it is digitally
          signed. JWTs can be signed using a secret (with the HMAC algorithm) or
          a public/private key pair using RSA or ECDSA. Although JWTs can be
          encrypted to also provide secrecy between parties, we will focus on
          signed tokens. Signed tokens can verify the integrity of the claims
          contained within it, while encrypted tokens hide those claims from
          other parties. When tokens are signed using public/private key pairs,
          the signature also certifies that only the party holding the private
          key is the one that signed it.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
