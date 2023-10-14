const { expect } = require("chai")
const request = require("supertest")

// Get All User in reqres
describe("Get User" , () => {
    it("Response status is 200", async () =>{
        const response = await request("https://reqres.in").get("/api/users?page=2")
        console.log(JSON.stringify(await response))
        //assertion
        expect(await response.status).equal(200)
    })
})