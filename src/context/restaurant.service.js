import { mocks } from "../../data";
import camelize from "camelize";

export const restaurantRequest = (location = "37.7749295,-122.4194155") => {
  const mock = mocks[location];

  return new Promise((resolve, reject) => {
    if (!mock) {
      reject("Not Found");
    }
    resolve(mock);
  });
};

export const restaurantTransformed = ({ results = [] }) => {
  const mappedResult = results.map((restaurant) => ({
    ...restaurant,
    isClosedTemporarily: restaurant.business_status === "CLOSED TEMPORARILY",
  }));

  return camelize(mappedResult);
};
