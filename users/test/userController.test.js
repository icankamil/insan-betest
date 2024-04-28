// users/test/userController.test.js

// Mock dependencies
jest.mock("../services/index");
jest.mock("../repositories/index");
const UserServices = require("../services/index").UserServices;
describe("UserController", () => {
  describe("create", () => {
    it("should create a user successfully", async () => {
      // Mock the request and response objects
      const req = {
        body: {
          // Add your request body here
          Id: "33546889",
          userName: "megapermata",
          accountNumber: "7789",
          emailAddress: "megapermatayr@gmail.com",
          identityNumber: "5569336548",
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      // Mock the UserServices and UserRepository methods
      const userServicesMock = {
        create: jest.fn().mockResolvedValue({
          success: true,
          data: {
            // Add the expected user data here
            Id: "33546889",
            userName: "megapermata",
            accountNumber: "7789",
            emailAddress: "megapermatayr@gmail.com",
            identityNumber: "5569336548",
          },
          message: "Create user successfully",
        }),
      };
      const userRepositoryMock = {
        create: jest.fn().mockResolvedValue({
          // Add the expected repository result here
        }),
      };

      // Replace the actual UserServices and UserRepository with the mocks
      UserServices.mockImplementation(() => userServicesMock);
      UserRepository.mockImplementation(() => userRepositoryMock);

      // Call the create method of UserController
      await UserController.create(req, res);

      // Assertions
      expect(UserServices).toHaveBeenCalledTimes(1);
      expect(UserServices).toHaveBeenCalledWith(req);
      expect(userServicesMock.create).toHaveBeenCalledTimes(1);
      expect(UserRepository).toHaveBeenCalledTimes(1);
      expect(UserRepository).toHaveBeenCalledWith();
      expect(userRepositoryMock.create).toHaveBeenCalledTimes(1);
      expect(userRepositoryMock.create).toHaveBeenCalledWith(req.body);
      expect(res.status).toHaveBeenCalledTimes(1);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledTimes(1);
      expect(res.json).toHaveBeenCalledWith({
        success: true,
        data: {
          // Add the expected user data here
          Id: "33546889",
          userName: "megapermata",
          accountNumber: "7789",
          emailAddress: "megapermatayr@gmail.com",
          identityNumber: "5569336548",
        },
        message: "Create user successfully",
      });
    });

    // Add more test cases for different scenarios
  });
});
