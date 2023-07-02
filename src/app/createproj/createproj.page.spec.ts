import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateprojPage } from './createproj.page';

describe('CreateprojPage', () => {
  let component: CreateprojPage;
  let fixture: ComponentFixture<CreateprojPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreateprojPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
