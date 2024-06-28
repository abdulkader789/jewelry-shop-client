# Database

## User
  - id        : ID
  - name      : string
  - img       : string
  - email     : string,
  - createdAt : Data

## Product
  - id        : ID
  - name      : string
  - des       : string
  - img       : string
  - price     : number
  - createdAt : Data

## Order
  - id        : ID
  - productId : ID -> Product
  - userId    : ID -> User
  - createdAt : Data
