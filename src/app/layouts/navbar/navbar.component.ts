import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html'
})
export class HeaderComponent {
	constructor(public router: Router) { }
}
