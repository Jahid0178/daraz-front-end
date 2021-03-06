import httpReq from "./http.service";

class ProductService {
  async getAllProducts(): Promise<IProduct[]> {
    // !!change any to proper type
    const { data } = await httpReq.get("/product");
    return data;
  }
}

export default new ProductService();
