const expect = require("chai").expect;
const expectedVals = require('./product_expected_vals')

const app = require("../app.js");
const request = require("supertest")(app);

describe("Test /products route", function () {
  it("return all products", async function () {
    const response = await request.get("/products")
    expect(response.status).to.eql(200);
    expect(response.body).to.eql(expectedVals.allProducts);
  });

  it("return all products with and convert to canadian currency", async function () {
    const response = await request.get("/products?targetCurrency=cad")
    expect(response.status).to.eql(200);
    expect(response.body).to.eql(expectedVals.allProductsCAD);
  });

  it("get Most Viewed products", async function () {
    const response = await request.get("/products/most_viewed")
    expect(response.status).to.eql(200);
    expect(response.body).to.eql(expectedVals.mostViewedProducts);
  });

  it("get Most Viewed products with set limit of 3", async function () {
    const response = await request.get("/products/most_viewed?maxProducts=2")
    expect(response.status).to.eql(200);
    expect(response.body).to.eql(expectedVals.mostViewedWithLimitOf2);
  });
  it("get Most Viewed products with set limit of 2 and convert price to EUR", async function () {
    const response = await request.get("/products/most_viewed?maxProducts=2&targetCurrency=EUR")
    expect(response.status).to.eql(200);
    expect(response.body).to.eql(expectedVals.mostViewedWithLimitOf2AndIntoEUR);
  });

});    
