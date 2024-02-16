import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SaraaComponent } from './saraa.component';

describe('SaraaComponent', () => {
  let component: SaraaComponent;
  let fixture: ComponentFixture<SaraaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaraaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SaraaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
