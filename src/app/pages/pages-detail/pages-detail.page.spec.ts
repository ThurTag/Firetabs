import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { PagesDetailPage } from './pages-detail.page';

describe('PagesDetailPage', () => {
  let component: PagesDetailPage;
  let fixture: ComponentFixture<PagesDetailPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagesDetailPage],
      imports: [IonicModule.forRoot()],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { paramMap: { get: () => null } } }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PagesDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
