const request = require("supertest");
const app = require("../app"); // assuming your express app is in a file named app.js
const UserController = require("../controllers/index"); // assuming your controller is in a file named index.js in controllers directory

jest.mock("../services/index"); // assuming your service is in a file named index.js in services directory

describe("UserController", () => {
  describe("getUsers", () => {
    it("should return a list of users", async () => {
      const users = [{ id: 1, name: "John Doe" }];
      UserServices.prototype.getUsers.mockResolvedValue(users);

      const response = await request(app).get("/users");

      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        success: true,
        data: users,
        message: "User fetched successfully",
        duration: expect.any(Number),
      });
    });

    it("should handle errors", async () => {
      const error = new Error("Something went wrong");
      UserServices.prototype.getUsers.mockRejectedValue(error);

      const response = await request(app).get("/users");

      expect(response.status).toBe(500);
      expect(response.body).toEqual({
        success: false,
        data: null,
        message: "Internal Server Error",
        duration: expect.any(Number),
      });
    });
  });
});
