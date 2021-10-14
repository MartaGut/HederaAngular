import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
myFunction() :void {
  console.log ("click works")
  var x = document.getElementById("myTopnav")!;
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

}
