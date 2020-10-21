import axios from "axios";
import userApi from "../api/user";
import educationApi from "../api/education";

jest.mock("axios");

test("add 1+1 is 2", () => {
  expect(2).toBe(2);
});

beforeEach(() => {
  axios.get.mockClear();
  axios.post.mockClear();
});

describe("userApi", () => {
  test("should have been called 1 time when userApi request get", async () => {
    const result = userApi.getUserById(1);
    expect(axios.get).toHaveBeenCalledTimes(1);
    await expect(result).resolves.toEqual({ name: "get" });
  });

  test("should have been called 1 time when userApi request post", () => {
    userApi.createUser({});
    expect(axios.post).toHaveBeenCalledTimes(1);
  });
});

describe("educationApi", () => {
  test("should have been called 1 time when educationApi request get", async () => {
    const result = educationApi.geteducationsByUserId(1);
    expect(axios.get).toHaveBeenCalledTimes(1);
    await expect(result).resolves.toEqual({ name: "get" });
  });

  test("should have been called 1 time when educationApi request post", () => {
    educationApi.createEducationWithUserId({});
    expect(axios.post).toHaveBeenCalledTimes(1);
  });
});
