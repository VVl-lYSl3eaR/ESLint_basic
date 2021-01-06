import fetch from 'node-fetch';
import { animeInfo, apiStruct } from '../types/apitype';

const nowURL = 'https://api.ohli.moe/list/now?junk=';

export default class noitaminaAPI implements apiStruct {
  RESULT: [];

  constructor() {
    this.RESULT = null;
  }

  getNow() {
    const juck = Math.random();
    fetch(nowURL + juck)
      .then((res) => res.json())
      .then((json) => {
        this.getBlog(json);
      });
  }

  getBlog(list: any) {
    console.log(this.RESULT);
    console.log(list);
  }
}
