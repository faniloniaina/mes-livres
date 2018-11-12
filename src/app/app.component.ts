import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(){
    const config = {
      apiKey: "AIzaSyDrsUeyjNvewGgCx3_ecbmrY-OlD7ANraE",
      authDomain: "meslivres-787b4.firebaseapp.com",
      databaseURL: "https://meslivres-787b4.firebaseio.com",
      projectId: "meslivres-787b4",
      storageBucket: "meslivres-787b4.appspot.com",
      messagingSenderId: "141894329669"
    };
    firebase.initializeApp(config);
  }
}
