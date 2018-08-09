import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {IndexPage} from '../pages/index/index';
import {AboutPage} from '../pages/about/about';
import {ContactPage} from '../pages/contact/contact';
import {HomePage} from '../pages/home/home';
import {SigninPage} from "../pages/auth/signin";
import {SetupPage} from "../pages/home/services/setup";
import {UserMgtPage} from "../pages/home/services/usermgt";
import {AddUserPage} from "../pages/home/services/adduser";
import {UserDetailPage} from "../pages/home/services/userdetail";

const routes: Routes = [
	{ path: '', redirectTo: '/signin', pathMatch: 'full' },
	{ path: 'index', component: IndexPage, 
		children: [ 
				{ path: '', component: HomePage },
				{ path: 'home', component: HomePage },
				{ path: 'about',  component: AboutPage },
				{ path: 'user',  component: ContactPage }
			]
	},
	{ path: 'signin', component: SigninPage },
	{ path: 'setup', component: SetupPage },
	{ path: 'usermgt', component: UserMgtPage },
	{ path: 'adduser', component: AddUserPage },
	{ path: 'userdetail', component: UserDetailPage }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
