require('dotenv').config()
const express = require('express')
const app=express()
const port =4000
const gitData={
  "login": "A-man-inDevelopment",
  "id": 192730880,
  "node_id": "U_kgDOC3zXAA",
  "avatar_url": "https://avatars.githubusercontent.com/u/192730880?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/A-man-inDevelopment",
  "html_url": "https://github.com/A-man-inDevelopment",
  "followers_url": "https://api.github.com/users/A-man-inDevelopment/followers",
  "following_url": "https://api.github.com/users/A-man-inDevelopment/following{/other_user}",
  "gists_url": "https://api.github.com/users/A-man-inDevelopment/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/A-man-inDevelopment/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/A-man-inDevelopment/subscriptions",
  "organizations_url": "https://api.github.com/users/A-man-inDevelopment/orgs",
  "repos_url": "https://api.github.com/users/A-man-inDevelopment/repos",
  "events_url": "https://api.github.com/users/A-man-inDevelopment/events{/privacy}",
  "received_events_url": "https://api.github.com/users/A-man-inDevelopment/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 5,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2024-12-24T16:47:37Z",
  "updated_at": "2025-11-07T05:08:46Z"
}

app.get('/',(req,res)=>{
    res.send('Hello World')
})
app.get('/github',(req,res)=>{
    res.json(gitData)
})
app.get('/login',(req,res)=>{
    res.send('Login Page')
})
app.get('/tweet',(req,res)=>{
    res.send('<h1>TWITTER NOW X</h1>')
})
app.listen(process.env.PORT,()=>{
    console.log(`Example app listening on port ${process.env.PORT}`)
})