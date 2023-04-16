import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BeerDetailsPage } from './beer-details.page';

describe('BeerDetailsPage', () => {
  let component: BeerDetailsPage;
  let fixture: ComponentFixture<BeerDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BeerDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
