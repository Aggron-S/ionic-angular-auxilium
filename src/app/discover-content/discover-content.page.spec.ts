import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DiscoverContentPage } from './discover-content.page';

describe('DiscoverContentPage', () => {
  let component: DiscoverContentPage;
  let fixture: ComponentFixture<DiscoverContentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DiscoverContentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
