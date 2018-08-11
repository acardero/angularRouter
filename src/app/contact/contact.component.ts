import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  //providers: [CounterService],
})
export class ContactComponent implements OnInit {
  contactId: Number;
  optionalParameter: string;

  constructor(private route: ActivatedRoute, private theCounter: CounterService) { }

  counter: number = this.theCounter.count;

  ngOnInit() {
    this.route.params
      .subscribe((params) => this.contactId = Number(params['id']));

    this.route.queryParams
      .subscribe((queryParams) => {
        this.optionalParameter = queryParams['foo'];
    });


    this.theCounter.increment()
  }

}
