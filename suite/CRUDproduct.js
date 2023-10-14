const { expect } = require("chai")
const request = require("supertest")
const product = require("../data/product.json")
const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAzNzZhMTg3LTVjMjktNDE4Mi1hMWJmLTE0MTBjZjQyMWYxMiIsImNvbXBhbnlJZCI6ImRjZTUyZDA1LTE3MWQtNGZmNS1iZDM5LWZlY2UwYjE2NDM2YyIsImlhdCI6MTY5NzMwODg2MX0.48LzCfhIepXD270cFvpVVwOL_gwcl20kqHO7r3pmRA0'

// Add Product Kasir Aja
describe("Add Product" , () => {
    it("Response status is 201", async () =>{
        const response = await request("https://kasir-api.belajarqa.com")
        .post("/products")
        .send(product)
        .set({"Authorization": `Bearer ${accessToken}`})  
        console.log(JSON.stringify(await response))
        //assertion
        expect(await response.status).equal(201)
    })
}) 
// Get Product Detail Kasir Aja
describe("Get Product Detail" , () => {
    it("Response status is 200", async () =>{
        const response = await request("https://kasir-api.belajarqa.com")
        .get("/products/43fc0cc3-482e-4675-a200-64f7ce099573")
        .set({"Authorization": `Bearer ${accessToken}`})  
        console.log(JSON.stringify(await response))
        //assertion
        expect(await response.status).equal(200)
    })
}) 
// Update Product Kasir Aja
describe("Update Product" , () => {
    it("Response status is 200", async () =>{
        const response = await request("https://kasir-api.belajarqa.com")
        .put("/products/43fc0cc3-482e-4675-a200-64f7ce099573")
        .send({"category_id" : "811f547e-a24e-4f94-bfe1-b7ed7d11c03f",
        "code": "A314ASDDFIER3432",
        "name": "taro",
        "price": "3500",
        "cost": "3000",
        "stock": "6"})
        .set({"Authorization": `Bearer ${accessToken}`})  
        console.log(JSON.stringify(await response))
        //assertion
        expect(await response.status).equal(200)
    })
}) 
// Delete Product Kasir Aja
describe("Delete Product" , () => {
    it("Response status is 200", async () =>{
        const response = await request("https://kasir-api.belajarqa.com")
        .delete("/products/43fc0cc3-482e-4675-a200-64f7ce099573")
        .set({"Authorization": `Bearer ${accessToken}`})  
        console.log(JSON.stringify(await response))
        //assertion
        expect(await response.status).equal(200)
    })
}) 