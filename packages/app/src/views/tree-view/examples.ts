import basicHtml from '!!raw-loader!./basic.html';
import basicCode from '!!raw-loader!./basic';

export class Examples {
  basicHtml = basicHtml;
  basicCode = basicCode;

  public treeViewNodes = [
    { name: 'item1', children: [{ name: 'child11', children: [{ name: 'child111' }, { name: 'child112' }] }, { name: 'child12' }] },
    { name: 'item2', children: [{ name: 'child21' }, { name: 'child22' }] }
  ];
}
