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
import {CommonRefundPage} from "../pages/home/refund/commonrefund";
import {WeixinRefundPage} from "../pages/home/refund/weixinrefund";
import {RefundVerifyPage} from "../pages/home/refund/refundverify";
import {RefundProgressPage} from "../pages/home/refund/refundprogress";

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
	{ path: 'userdetail', component: UserDetailPage },
	{ path: 'commonrefund', component: CommonRefundPage },
	{ path: 'weixinrefund', component: WeixinRefundPage },
	{ path: 'refundverify', component: RefundVerifyPage },
	{ path: 'refundprogress', component: RefundProgressPage }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
