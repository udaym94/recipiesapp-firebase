import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipieListComponent } from './recipie-list.component';

describe('RecipieListComponent', () => {
  let component: RecipieListComponent;
  let fixture: ComponentFixture<RecipieListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipieListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
