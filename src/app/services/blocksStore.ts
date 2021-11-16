import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Store } from './store';
import { Node } from 'src/models/node.model';
import { State } from './state';
import { Blocks } from '../../models/blocks.model';

@Injectable({
  providedIn: 'root',
})
export class BlocksStore extends Store<Blocks> {
  constructor(private api: ApiService) {
    super(new State().blocks);
  }

  public getBlocks(url: string) {
    this.setState({ data: null, loading: true });
    this._getBlocks(url).subscribe((value: any) => {
      this.setState({ ...value, loading: false });
    });
  }

  public _getBlocks(url: string) {
    const blocks = this.api.get(`${url}/api/v1/blocks`).pipe(
      catchError((error) =>
        of({
          error: true,
          data: null,
          loading: false,
        })
      ),
      map((response) => ({ ...response, loading: false }))
    );

    return blocks;
  }
}
