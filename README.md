Requests:

home (GET method)
http://localhost:3000

get all products (GET method)
http://localhost:3000/products

get most viewed products (GET method)

- http://localhost:3000/products/most_viewed

- http://localhost:3000/products/most_viewed?maxProducts=1

get a single product by productId: (GET method)
http://localhost:3000/products/6

delete a single product by productId: (PUT method)
http://localhost:3000/products/delete/6

create a new product (POST method)
http://localhost:3000/products
body {
"name": "Rake3",
"price": "16.99",
"description": "Do not step on it"
}
