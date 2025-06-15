# React - The Complete Guide

Companion repository for the Udemy course [Dive in and learn React.js from scratch! Learn React, Hooks, Redux, React Router, Next.js, Best Practices and way more!](https://www.udemy.com/course/react-the-complete-guide-incl-redux)

## MongoDB

Mongo DB is configured for having a custom user for each section. Since I do not know MongoDB well enough to make an _initdb_ script,
the commands are referenced here:

### nextjs-meetup

```javascript
use nextjs-meetup
db.createCollection('nextjs-meetup')
db.createUser({ "user": "nextjs-meetup", "pwd": "mypass", "roles": [ { "role": "readWrite", "db": "nextjs-meetup" } ] })
```
