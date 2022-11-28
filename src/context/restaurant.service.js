import { mocks, mockImages } from "../../data";
import camelize from "camelize";

export const restaurantRequest = (location = "37.7749295,-122.4194155") => {
  const mock = mocks[location];

  return new Promise((resolve, reject) => {
    if (!mock) {
      reject(new Error("Data not found"));
    }
    resolve(mock);
  });
};

export const restaurantTransformed = ({ results = [] }) => {
  const mappedResult = results.map((restaurant) => {
    restaurant.photos = restaurant.photos.map(
      () => mockImages[Math.ceil(Math.random() * mockImages.length - 1)]
    );
    return {
      ...restaurant,
      isClosedTemporarily: restaurant.business_status === "CLOSED TEMPORARILY",
    };
  });

  return camelize(mappedResult);
};
