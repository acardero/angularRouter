import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ContactServiceService } from '../contact-service.service';


@Component({
  selector: 'app-contact-list-service',
  templateUrl: 'contact-list-service.component.html',
  styleUrls: ['../contact-list/contact-list.component.css']
})
export class ContactListServiceComponent implements OnInit {
  contacts: Array<Object> = [];

  constructor(private router: Router, private contactService: ContactServiceService) { }

  ngOnInit() {
    this.contacts = this.contactService.getList();
  }

  // viewDetails(id) {
  //   this.router.navigate(['contact', id]);
  // }
  viewDetails(id, param){
    this.router.navigate(['contact', id], { queryParams: { foo: param }});
  }


}
