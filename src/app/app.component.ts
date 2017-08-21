import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';

  clearUsername(){
    if(this.username.length > 0){
      this.username = '';
    }
    else{
      alert('you cannot clear an empty username!');
    }
  }
}
