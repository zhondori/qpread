# Query parser tools

## Installation

```
npm install qpread
```

## Usage

### Convert object to url query 
```
const qpread = require("qpread")

const params = {
  sort: "asc",
  q: "arabia",
  limit: 10
}

const query = qpread.toUrl(params);
// "sort=asc&q=arabia&limit=10"

```

### Convert string into object
```
const qpread = require("qpread")

const url = "https://world.org?sort=asc&q=arabia&limit=10"

const query = qpread.toObject(url);
/*
{
  sort: "asc",
  q: "arabia",
  limit: 10
}
*/

```

Happy Coding!