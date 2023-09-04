
const backEnd_url = "https://shopper-backend-foip.onrender.com";
export const Url = {
  getProducts: backEnd_url + "/product/all",
  clientOrder: backEnd_url + "/order/list/",
  login: backEnd_url + "/client/login",
  createClient: backEnd_url + "/client/create",
  createOrder: backEnd_url + "/order/create"
}
console.log(Url.getProducts)