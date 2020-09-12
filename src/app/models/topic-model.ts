import { MedalType } from "./medal-type";

export class TopicModel {
    constructor(public title: string, public image: any, public routerLink: string = '#', public medal: MedalType = undefined) {}
}
