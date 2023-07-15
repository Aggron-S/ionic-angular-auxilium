import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserprojContentPage } from './userproj-content.page';

describe('UserprojContentPage', () => {
  let component: UserprojContentPage;
  let fixture: ComponentFixture<UserprojContentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UserprojContentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
