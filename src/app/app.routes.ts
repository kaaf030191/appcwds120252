import { Routes } from '@angular/router';
import { Home } from './page/main/home/home';
import { PersonGetAll } from './page/person/person-get-all/person-get-all';
import { PersonInsert } from './page/person/person-insert/person-insert';

export const routes: Routes = [
	{ path: '', component: Home },
	{ path: 'person/insert', component: PersonInsert },
	{ path: 'person/getall', component: PersonGetAll }
];