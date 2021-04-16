import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "http://localhost:5555/api/",
});

export const categoriesApi = {
	async get() {
		return axiosInstance.get("categories");
	},
};

export const filtersApi = {
	async get(category) {
		return axiosInstance.get(`filters/${category}`);
	},
};

export const productsApi = {
	async get(category, page, count, sortBy, activeFilters) {
		const { types, kinds, isSale } = activeFilters;
		const categoryQuery = `category=${category}`;
		const pageQuery = `page=${page}`;
		const countQuery = `count=${count}`;
		const sortQuery = `sort=${sortBy}`;
		const saleQuery = `sale=${isSale}`;
		const typeQuery = types.length ? `type=${types.join(",")}` : "";
		const kindQuery = kinds.length ? `kind=${kinds.join(",")}` : "";
		return axiosInstance.get(
			"products?" +
				`&${categoryQuery}` +
				`&${pageQuery}` +
				`&${countQuery}` +
				`&${sortQuery}` +
				`&${saleQuery}` +
				`&${typeQuery}` +
				`&${kindQuery}`
		);
	},
};
