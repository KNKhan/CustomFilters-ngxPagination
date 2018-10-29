import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ViewEncapsulation} from '@angular/core';
import { ValueTransformer } from '@angular/compiler/src/util';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  encapsulation: ViewEncapsulation.None
  
})

export class TableComponent implements OnInit {

  p: number = 1;
  
  values = []; //Array declared for storing get API results
  totalrowCount: number;
  filterArgs = ''; //Arguement for filter pipe used as search term

  pageChanged($event) {
    console.log('Current Page', $event)
    this.p = $event;
  }

  
  constructor(private http: HttpClient) {      
    
    let getURL = 'http://jsonplaceholder.typicode.com/posts';
    let getResponse; //variable to store the data subscribed
    
    this.http.get(getURL)
    .subscribe(
      (data => { 

          getResponse = data;
          console.log('getResults', getResponse);
          
          getResponse.map((item) =>
            //update values array to be used on *ngFor
            this.values.push(
              {
                userId: item.userId,
                id: item.id,
                title: item.title,
                body: item.body
              }
            )
            //update values array to be used on *ngFor
          )
          
          //update rowcount
          this.totalrowCount = this.values.length;
          console.log('rowCount', this.totalrowCount);

        }
      )
    )

  }

  ngOnInit() {
  }

}
