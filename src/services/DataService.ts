import {Injectable} from '@angular/core';
// if you've gone with the local installation approach, you'd use the following:
import firebase from 'firebase';

@Injectable()
export class DataService {
    
    public db: any;
    
    init() {
        const fbConf = {
            apiKey: "AIzaSyC5bven0nzMkUArgdfwlhGe6Mjb0OO8B-k",
            authDomain: "slanted-semicolon.firebaseapp.com",
            databaseURL: "https://slanted-semicolon.firebaseio.com",
            storageBucket: "slanted-semicolon.appspot.com"
        };

        firebase.initializeApp(fbConf);

        this.db = firebase.database().ref('/');
    }
}