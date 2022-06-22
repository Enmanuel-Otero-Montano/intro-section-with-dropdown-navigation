import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  active = false
  title: any;

  showOverlay(){
    if(this.active === false){
      this.active = true
    }else{
      this.active = false
    }
  }
}
