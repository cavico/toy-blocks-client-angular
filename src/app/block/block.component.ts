import { Component, Input } from '@angular/core';
import { Block } from '../../models/block.model';

@Component({
  selector: 'app-block-item',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css'],
})
export class BlockComponent {
  @Input() block: Block;
}
