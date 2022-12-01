import camelize from "camelize";
import { locations } from "../mock/location.mock";

export const locationRequest = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const location = locations[searchTerm];
    if (!location) {
      reject(new Error("Data not found"));
    }
    resolve(location);
  });
};

export const locationTransform = (result) => {
  const camelizedResult = camelize(result);
  const { geometry = {} } = camelizedResult.results[0];
  const { lat, lng } = geometry.location;
  return { lat, lng, viewPort: geometry.viewport };
};
