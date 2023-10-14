const { expect } = require("chai")
const request = require("supertest")

// create User in reqres
describe("post User" , () => {
    it("Response status is 201", async () =>{
        const response = await request("https://reqres.in")
        .post("/api/users")
        .send({
            "name": "Abercio",
            "job": "Ghaisan"
        })
        console.log(JSON.stringify(await response))
        //assertion
        expect(await response.status).equal(201)
    })
})