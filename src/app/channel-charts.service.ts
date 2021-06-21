import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IChannelChart } from './models/contratos.interfaces';

@Injectable({
	providedIn: 'root'
})
export class ChannelChartsService {
	$subject = new Subject<IChannelChart>();
	enviarData(data: IChannelChart): void {
		this.$subject.next(data);
	}
}
