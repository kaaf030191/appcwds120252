import { Component } from '@angular/core';

@Component({
	selector: 'app-header',
	imports: [],
	templateUrl: './header.html',
	styleUrl: './header.css',
})

export class Header {
	isMenuOpen: boolean = false;

	toggleMenu(): void {
		this.isMenuOpen = !this.isMenuOpen;
	}

	closeMenu(): void {
		this.isMenuOpen = false;
	}
}