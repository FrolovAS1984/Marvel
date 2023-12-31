import {getDataApi} from "../../utils/getDataApi";


import {IMG_STANDART_XLARGE} from "../../constants/api";
import {ROOT_MODAL} from "../../constants/root";

import "./Characters.css";

import imgCloseWhite from "./img/close-white.svg";



class Characters {

    renderContent(data) {
        let htmlContent = "";
        data.forEach(({name, thumbnail: {path, extension}}) => {

            const imgSrc = `${path}/${IMG_STANDART_XLARGE}.${extension}`;

            htmlContent += `
                <li class="characters__item">
                    <img class="img-cover characters__img" src="${imgSrc}"/>
                    <span class="characters__name">${name}</span> 
                </li>
            `;

        });
        const htmlWrapper = `
            <div class="wrapper">
                <ul class="characters__container">
                    ${htmlContent}
                </ul>
                <button class="btn characters__close" onclick="modal.innerHTML = ''" style="background-image:url(${imgCloseWhite})">

                </button>
            </div>
        `;


        ROOT_MODAL.innerHTML = htmlWrapper;

    }

    renderNotification() {
        console.log("Нет данных");

    }

    async render(uri) {
        const data = await getDataApi.getdata(uri);
        if (data.length) {
            this.renderContent(data);
        } else {
            this.renderNotification();
        }

    }
}

export default new Characters();