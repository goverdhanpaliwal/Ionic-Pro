import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { DriverTaskPage } from '../pages/driver-task/driver-task';
import { UserListPage } from '../pages/user-list/user-list';
import { GroupChatPage } from '../pages/group-chat/group-chat';
import { DriversListPage } from '../pages/drivers-list/drivers-list';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, icon: 'home' },
      { title: 'Post A Task', component: DriverTaskPage, icon: 'add-circle' },
      { title: 'Users List', component: UserListPage, icon: 'contacts' },
      { title: 'Group Chat', component: GroupChatPage, icon: 'chatboxes' },
      { title: 'Drivers List', component: DriversListPage, icon: 'ios-people' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }

  editProfile(){
    this.nav.setRoot(EditProfilePage);
  }
  logout() {
    this.nav.setRoot(LoginPage);
  }
}
