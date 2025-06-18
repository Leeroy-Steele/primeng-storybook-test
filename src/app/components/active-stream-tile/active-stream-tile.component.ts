import { Component, input, Input } from '@angular/core';
import { TrainCamera } from '../../models/train-camera.model';

import { ButtonModule } from 'primeng/button';
import { Tag } from 'primeng/tag';

@Component({
  selector: 'app-active-stream-tile',
  imports: [Tag, ButtonModule],
  templateUrl: './active-stream-tile.component.html',
  styleUrl: './active-stream-tile.component.scss'
})
export class ActiveStreamTileComponent {
  @Input() trainCamera!: TrainCamera;
}
