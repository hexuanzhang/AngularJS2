import { Injectable }     from '@angular/core';

import { Hero } from "../common/hero";

@Injectable()
export class DisplayingDataService {
    heroes: Hero[] = [
        {
            name: "曙光女神-蕾欧娜",
            lines: "我会保护你的"
        },
        {
            name: "未来守护者-杰斯",
            lines: "为了更美好的明天而战"
        },
        {
            name: "虚空先知-马尔扎哈",
            lines: "用最合适的手法"
        },
        {
            name: "唤潮鲛姬-娜美",
            lines: "我的追求召唤者我"
        },
        {
            name: "德玛西亚之力-盖伦",
            lines: "勇往直前"
        },
        {
            name: "诺克萨斯之手-德莱厄斯",
            lines: "无可匹敌的力量"
        }
    ];
}