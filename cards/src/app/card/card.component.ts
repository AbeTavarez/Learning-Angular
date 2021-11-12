import { Component, OnInit, Input } from '@angular/core';

//* ======== Notes
// we need to import Input to tell angular how to receive properties or props

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  //* Props
  // we need Input to tell angular how to receive properties that are pass in
  @Input() title='';
  @Input() imageUrl='';
  @Input() content='';
  @Input() username='';


  constructor() { }

  ngOnInit(): void {
  }

}
