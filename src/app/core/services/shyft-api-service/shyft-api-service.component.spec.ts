import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShyftApiServiceComponent } from './shyft-api-service.component';

describe('ShyftApiServiceComponent', () => {
  let component: ShyftApiServiceComponent;
  let fixture: ComponentFixture<ShyftApiServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShyftApiServiceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShyftApiServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
