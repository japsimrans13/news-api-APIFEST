const express = require('express');
const axios = require('axios');
const app = express()
const port = 3000

PUBLIC_API_KEY = '1e1e4f04330a494b8a8da5572434153b'


app.get('/news', async (req, res)=> {
    var country = req.query['country'];
    var category = req.query['category'];
    var page = req.query['page'];
    var pageSize = req.query['pageSize'];

    var url =  `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${PUBLIC_API_KEY}&page=${page}&pageSize=${pageSize}`;
   let request= await axios(url);
    res.send(request.data)
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})