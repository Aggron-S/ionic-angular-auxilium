import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserprojPage } from './userproj.page';

describe('UserprojPage', () => {
  let component: UserprojPage;
  let fixture: ComponentFixture<UserprojPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UserprojPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
