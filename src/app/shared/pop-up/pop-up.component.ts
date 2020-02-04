import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'amt-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {

  constructor(
    private loc: Location
  ) { }

  ngOnInit() {
  }

  getElementById1() {
    document.getElementById('popupId').style.display = 'none';
    this.loc.back();
  }
}
