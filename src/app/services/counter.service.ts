import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
    count: number = 8;
    constructor() { }

    increment() {
        this.count++;
        console.log(`Count is now ${this.count}`);
    }
}