const express = require('express');
const axios = require('axios');
const PORT = process.env.PORT ||5000;
const app = express();
var cors = require('cors');
PUBLIC_API_KEY = '1e1e4f04330a494b8a8da5572434153b'

app.use(cors());
app.get('/news', async (req, res)=> {
    res.setHeader('Access-Control-Allow-Origin', 'https://all-in-one-news.vercel.app');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    var country = req.query['country'];
    var category = req.query['category'];
    var page = req.query['page'];
    var pageSize = req.query['pageSize'];

    var url =  `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${PUBLIC_API_KEY}&page=${page}&pageSize=${pageSize}`;
   let request= await axios(url);
    res.send(request.data)
  })

  app.get('/entertainment', async (req, res)=> {
    var country = req.query['country'];
    var category = req.query['category'];
    var page = req.query['page'];
    var pageSize = req.query['pageSize'];

    var url =  `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${PUBLIC_API_KEY}&page=${page}&pageSize=${pageSize}`;
   let request= await axios(url);
    res.send(request.data)
  })
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})