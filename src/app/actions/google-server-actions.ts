"use server";

import axios from "axios";

interface Result {
  geometry: { location: LatLong };
}
interface DetailsResponse {
  results: Result[];
}

export const getAddressDetails = async (
  address: Address
): Promise<DetailsResponse> => {
  console.log("GOOGLE SERVER ACTION");
  const { data } = await axios.get(
    "https://maps.googleapis.com/maps/api/geocode/json",
    {
      params: {
        address: Object.values(address).join(", "),
        key: process.env.NEXT_GAPI_KEY,
      },
    }
  );

  return data;
};
