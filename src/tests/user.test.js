import request from "supertest";
import { app } from "../../app.js";

describe('testing user controllers', () => {

  it('show all users', async () => {
    const res = await request(app).get("/users");

    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
  })

  it('create new users', async () => {
    const res = await request(app).post("/users")
      .send({
        firstName: "", lastName: "", email: "", phone: ""
      })

    expect(res.status).toBe(201);
    expect(res.body).toBeInstanceOf(Object);
  })

  it('update existing user', () => {

  })

  it('delete existing user', () => {

  })
})

