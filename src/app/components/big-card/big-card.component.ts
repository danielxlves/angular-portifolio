import { Component, Input, OnInit } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit  {
  @Input()
  dataBigCard:string = '';
  @Input()
  photoBigCard:string = '../../../assets/img_not_found.jpg'
  @Input()
  titleBigCard:string = ''
  @Input()
  resumeBigCard:string = ''
  @Input()
  Id:string = "0"

  constructor(){

  }

  ngOnInit(): void {
      this.setValuesToComponent(this.Id)
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id == id)[0]

    this.photoBigCard = result.photo
    this.dataBigCard = result.data
    this.titleBigCard = result.title
    
  }

}
