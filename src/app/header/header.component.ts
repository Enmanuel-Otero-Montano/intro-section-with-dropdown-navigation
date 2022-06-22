import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() showOverlay = new EventEmitter<boolean>();

  menuHidden:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showMenu(){
    this.menuHidden = true
    this.showOverlay.emit();
  }

  hideMenu(){
    this.menuHidden = false
  }

  pru(){
    this.showOverlay.emit();
  }
}
