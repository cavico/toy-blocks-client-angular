import { Block } from './block.model';

export interface Blocks {
  data: Block[] | null;
  error?: boolean;
  loading: boolean;
}
