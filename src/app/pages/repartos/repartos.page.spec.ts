import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RepartosPage } from './repartos.page';

describe('RepartosPage', () => {
  let component: RepartosPage;
  let fixture: ComponentFixture<RepartosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RepartosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
