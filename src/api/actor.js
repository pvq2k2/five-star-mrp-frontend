import { cathError, getToken } from "../utils/helper";
import client from "./client";

export const createActor = async (formData) => {
  const token = getToken();
  try {
    const { data } = await client.post("/actor/create", formData, {
      headers: {
        authorization: "Bearer " + token,
        "Content-Type": "multipart/form-data",
      },
    });
    return data;
  } catch (error) {
    return cathError(error);
  }
};

export const updateActor = async (id, formData) => {
  const token = getToken();
  try {
    const { data } = await client.post("/actor/update/" + id, formData, {
      headers: {
        authorization: "Bearer " + token,
        "Content-Type": "multipart/form-data",
      },
    });
    return data;
  } catch (error) {
    return cathError(error);
  }
};

export const deleteActor = async (id) => {
  const token = getToken();
  try {
    const { data } = await client.delete("/actor/" + id, {
      headers: {
        authorization: "Bearer " + token,
      },
    });
    return data;
  } catch (error) {
    return cathError(error);
  }
};

export const searchActor = async (query) => {
  const token = getToken();
  try {
    const { data } = await client(`/actor/search?name=${query}`, {
      headers: {
        authorization: "Bearer " + token,
      },
    });
    return data;
  } catch (error) {
    return cathError(error);
  }
};

export const getActors = async (pageNo, limit) => {
  const token = getToken();
  try {
    const { data } = await client(
      `/actor/actors?pageNo=${pageNo}&limit=${limit}`,
      {
        headers: {
          authorization: "Bearer " + token,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return data;
  } catch (error) {
    return cathError(error);
  }
};

export const getActorProfile = async (id) => {
  try {
    const { data } = await client(`/actor/single/${id}`);
    return data;
  } catch (error) {
    return cathError(error);
  }
};
