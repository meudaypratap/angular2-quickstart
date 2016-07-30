import {} from '../enums/Priority'
import {Priority} from "../enums/Priority";

export class Todo{
    title: string;
    priority: number;

    constructor(title:string, priority:number){
        this.title = title;
        this.priority = priority;
    }
}