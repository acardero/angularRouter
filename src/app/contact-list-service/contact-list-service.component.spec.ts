import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactListServiceComponent } from './contact-list-service.component';

describe('ContactListServiceComponent', () => {
  let component: ContactListServiceComponent;
  let fixture: ComponentFixture<ContactListServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactListServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactListServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
