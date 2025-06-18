import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveStreamTileComponent } from './active-stream-tile.component';

describe('ActiveStreamTileComponent', () => {
  let component: ActiveStreamTileComponent;
  let fixture: ComponentFixture<ActiveStreamTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActiveStreamTileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveStreamTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
