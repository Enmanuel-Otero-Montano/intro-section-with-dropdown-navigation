import { Output } from "@angular/core";
import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Output() closeMenu = new EventEmitter<boolean>();
  @Output() hideOverlay = new EventEmitter<boolean>();

  hiddenFeatures:boolean = true

  hiddenCompany:boolean = true

  hiddenArrowFeaturesUp:boolean = true
  hiddenArrowFeaturesDown:boolean = false

  hiddenArrowCompanyUp:boolean = true
  hiddenArrowCompanyDown:boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  hiddenFalseOrTrueFeatures(){
    if(this.hiddenFeatures === false){
      this.hiddenFeatures = true
      this.hiddenArrowFeaturesUp = true
      this.hiddenArrowFeaturesDown = false
    }else{
      this.hiddenFeatures = false
      this.hiddenArrowFeaturesUp = false
      this.hiddenArrowFeaturesDown = true
    }
  }

  hiddenFalseOrTrueCompany(){
    if(this.hiddenCompany === false){
      this.hiddenCompany = true
      this.hiddenArrowCompanyUp = true
      this.hiddenArrowCompanyDown = false
    }else{
      this.hiddenCompany = false
      this.hiddenArrowCompanyUp = false
      this.hiddenArrowCompanyDown = true
    }
  }

  hideMenu(){
    this.closeMenu.emit();
    this.hideOverlay.emit();
  }
}
