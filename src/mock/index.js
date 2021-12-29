const Mock = require("mockjs");
const fs = require("fs");

const data = Mock.mock({
  "list|37": [
    {
      pcId: "@id",
      pcName: "@cname",
      area: "@county",
      "num|1-100": 1,
    },
  ],
});

fs.writeFileSync('./list.json',JSON.stringify(data.list));