import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
    @Input()
    photoContent:string = '../../../assets/img_not_found.jpg'
    @Input()
    dataContent:string = '11/01/2001'
    @Input()
    tituloContent:string = 'Titulo'
    @Input()
    resumeContent:string = ''

    private id:string | null = '0'

  constructor(private route: ActivatedRoute){

  }

  ngOnInit():void{
    this.route.paramMap.subscribe(value => {
      this.id = value.get("id")
    })
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id == id)[0]

    this.photoContent = result.photo
    this.dataContent = result.data
    this.tituloContent = result.title
    this.resumeContent = result.resume
    
  }

}
