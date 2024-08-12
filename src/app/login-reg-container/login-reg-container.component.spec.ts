import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRegContainerComponent } from './login-reg-container.component';

describe('LoginRegContainerComponent', () => {
  let component: LoginRegContainerComponent;
  let fixture: ComponentFixture<LoginRegContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginRegContainerComponent]
    });
    fixture = TestBed.createComponent(LoginRegContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
