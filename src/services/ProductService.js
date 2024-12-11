import axios from 'axios';

const PRODUCT_RESTAPI_URL ='http://localhost:8085/producthive/api/products';

/*service layer interacting with the producthive 
restapi of spring boot using axios http library*/
class ProductService{

    static getProducts(){
        return axios.get(PRODUCT_RESTAPI_URL);
    }
}
export default ProductService;