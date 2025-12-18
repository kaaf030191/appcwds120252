import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	imports: [],
	templateUrl: './app.html',
	styleUrl: './app.css'
})

export class App {
	fullName: string = '';

	constructor() {}

	ngOnInit(): void {
		this.fullName = 'Kevin Arnold Arias Figueroa';
	}

	changeData(): void {
		if(this.fullName == '...') {
			this.fullName = 'Kevin Arnold Arias Figueroa';
		} else {
			this.fullName = '...';
		}
	}
}