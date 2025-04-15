import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RepertoireDetailPage } from './repertoire-detail.page';

describe('RepertoireDetailPage', () => {
  let component: RepertoireDetailPage;
  let fixture: ComponentFixture<RepertoireDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RepertoireDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
