import { lang, subTitle, subTime } from '../../interface/parser.type';

export class subTitleData implements subTitle {
  sTime: subTime;

  eTime: subTime;

  text: string;

  style?: string[];
}

export class langData implements lang {
  lang: string;

  name: string;

  subTitle: subTitleData[];

  add(subdata: subTitleData) {
    this.subTitle.push(subdata);
  }

  sort() {
    this.subTitle.sort((_a: subTitleData, _b: subTitleData): number => {
      if (_a.sTime > _b.sTime) {
        return 1;
      }
      return 0;
    });
  }
}
