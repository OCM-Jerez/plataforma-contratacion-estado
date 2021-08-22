import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { IFilterDate } from '../models/components.interface';

@Injectable({ providedIn: 'root' })
export class ChannelFilterDateService {
    constructor() { }

    subject$ = new Subject<IFilterDate>();

    sendDates(dates: IFilterDate): void {
        this.subject$.next(dates);
    }
}