import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeclaracionesPage } from './declaraciones.page';

describe('DeclaracionesPage', () => {
  let component: DeclaracionesPage;
  let fixture: ComponentFixture<DeclaracionesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclaracionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
