import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExamPage } from './exam.page';

describe('ExamPage', () => {
  let component: ExamPage;
  let fixture: ComponentFixture<ExamPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  }); 


  fit('Перевіримо віднімання', () => {
    component.subtractMatrix()
    let res = component.subtractMatrix()
    let expected = `Успішно відняли в матриці ${component.rows} x ${component.collumns}`
    expect(res).toBe(expected);
  })
});
