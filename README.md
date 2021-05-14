

# Product App

- Product app allows
    - Get all products 
    ##
        http://localhost:3000/products


    - Get most viewed products

    ##
        http://localhost:3000/products/most_viewed

        you can specify max number of products you want to see using 'maxProducts' query param. (returns 5 by default)

        http://localhost:3000/products/most_viewed?maxProducts=2


    - Get a single product by product_id

    ##
        http://localhost:3000/products/6

    - Create a new product 

    ##
        http://localhost:3000/products

        {
            "name": "cart",
            "price": 43.99,
            "description": "to carry fruits"
        }


    - Delete a product. NOTE deleting a product does not delete it from db. It deactivates it and no longer returns it.

    ##
        http://localhost:3000/products/delete/6 (Hint: use PUT method)

    - **All GET REQUESTS CAN ACCEPT a 'targetCurrency' query param and convert product prices into provided currency. *Supported Currencies* USD, CAD, EUR, GBP**

    ## 
        http://localhost:3000/products/most_viewed?targetCurrency=CAD
        http://localhost:3000/products/6?targetCurrency=EUR





# To Run the app

1) Set up database to connect the app to:
    - Run:  
     `docker run --name galvanize_pg -i --rm  -p 5432:5432 -e POSTGRES_PASSWORD=password  postgres`

    - Connect to the newly created database. (I use dBeaver).
    - Run 'starter' queries that are included in a 'test_schema.sql' file (Note: you may need to manually select/enter database that you create and ONLY THEN continue to create tables)
    - Now your initial products and its views are added to db. Next run the application

2) Run tests:
    ### Installation

    `npm install`

    ### Run

    `npm test`



    ### To run the application and send requests to it via Postman or another request sender Run:
    `npm start`

    ##

        docker run --name products_pg -i --rm  -p 5432:5432 -e POSTGRES_PASSWORD=password  postgres




# Tech used for the project:

    Postgres
    PG-Promise
    Express.Js
    Axios
    Mocha and Chai


