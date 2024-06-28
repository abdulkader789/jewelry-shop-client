


## Auth

- signup(POST, "/api/v3/auth/signup")
  - body({ name, email, password })
  - cookie({ token })
  - reply(202, { token })

- login(POST, "/api/v3/auth/login")
  - body({ email, password })
  - cookie({ token })
  - reply(202, { token })

- currentUser(GET, "/api/v3/auth/user")
  - header({ token })
  - reply(202, User)



## Posts

- getPosts(GET, "/api/v3/posts")
  - header(token)
  - reply(202, { posts })

- getPost(GET, "/api/v3/posts/:postId")
  - param(postId)
  - header(token)
  - reply(202, { post })


  

