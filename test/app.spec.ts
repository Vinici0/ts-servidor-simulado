import request from "supertest";
import Server from "../models/server";

describe("GET /", () => {
  const Se = new Server();
  Se.listen();
  test("should return 200 OK", async () => {
    const response = await request(Se.app).get("/api/repositories").send();
    expect(response.statusCode).toBe(200);
  });

  test("should respond with json", async () => {
    const response = await request(Se.app).get("/api/repositories").send();
    expect(response.type).toBe("application/json");
  });

  test("should respond with array", async () => {
    const response = await request(Se.app).get("/api/repositories").send();
    expect(response.body).toEqual([
      { id: 1, state: 604 },
      { id: 2, state: 605 },
      { id: 3, state: 606 },
    ]);
  });
});
