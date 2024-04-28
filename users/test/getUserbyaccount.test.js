const UserController = require("../controllers/index");
const UserServices = require("../services/index");

describe("UserController.getUserByAccount", () => {
  test("should handle successful user retrieval", async () => {
    const mockReq = {
      body: {
        // provide necessary account details for testing
      },
    };
    const mockRes = {
      status: jest.fn(),
      send: jest.fn(),
    };

    const mockUserServices = {
      getUserByAccount: jest.fn().mockResolvedValue("Mock user data"),
    };

    UserServices.prototype.getUserByAccount = jest.fn(() => mockUserServices);

    await UserController.getUserByAccount(mockReq, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.send).toHaveBeenCalledWith({
      success: true,
      message: "User fetched successfully",
      data: "Mock user data",
    });
  });

  test("should handle error during user retrieval", async () => {
    const mockReq = {
      body: {
        // provide necessary account details for testing
      },
    };
    const mockRes = {
      status: jest.fn(),
      json: jest.fn(),
    };

    const mockError = new Error("Mock error message");

    const mockUserServices = {
      getUserByAccount: jest.fn().mockRejectedValue(mockError),
    };

    UserServices.prototype.getUserByAccount = jest.fn(() => mockUserServices);

    await UserController.getUserByAccount(mockReq, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(500);
    expect(mockRes.json).toHaveBeenCalledWith({
      success: false,
      message: "Mock error message",
      data: null,
      duration: null,
    });
  });
});
