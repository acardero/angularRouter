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
  contactId: number;
  ngOnInit() { }
}
