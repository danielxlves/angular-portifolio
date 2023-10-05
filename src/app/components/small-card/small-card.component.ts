import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})

export class SmallCardComponent {
  @Input()
  dataSmallCard:string = '11/01/2001';
  @Input()
  photoSmallCard:string = '../../../assets/img_not_found.jpg'
  @Input()
  titleSmallCard:string = 'Titulo small card'
  @Input()
  Id:string = "0"
}
