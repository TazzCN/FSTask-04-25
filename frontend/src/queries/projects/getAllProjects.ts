import axios from "axios";

export const getAllProjects = async () => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_BASE_URL}/projects`
  );
  return response.data;
};
