import { Component, Input, OnInit } from '@angular/core';
import { BlocksStore } from '../services/blocksStore';

@Component({
  selector: 'app-block-list',
  templateUrl: './blocks.component.html',
  styleUrls: ['blocks.component.scss']
})
export class BlocksComponent implements OnInit {
  @Input() url: string;

  constructor(public store: BlocksStore) {}

  ngOnInit() {
    this.store.getBlocks(this.url);
  }
}
