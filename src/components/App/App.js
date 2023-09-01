import { API_URL,URL_COMICS } from "../../constants/api";
import { getDataApi } from '../../utils/getDataApi';
import './App.css'

class App {
   async render() {
        const data = await getDataApi.getdata(API_URL + URL_COMICS);
        console.log('Результат', data);
    }
}


export default new App ();