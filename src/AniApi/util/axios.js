import axios from "axios";
import { JWT_TOKEN, BASE_URL } from "../env";

export const API = axios.create({
	baseURL: BASE_URL,
	headers: {
		Authorization: `Bearer ${JWT_TOKEN}`,
	},
});
