const lcaModule = require('./index');
const node = require('./node');
const lca = lcaModule.lca;
const buildTree = lcaModule.buildTree;

test('lca is a function', () => {
  expect(typeof lca).toEqual('function');
});

test('buildTree is a function', () => {
  expect(typeof buildTree).toEqual('function');
});
// lca(head1, 1, 5) should return 0
// lca(head1, 3, 1) should return 1
// lca(head1, 1, 4) should return 1
// lca(head1, 0, 5) should return 0
// lca(head2, 4, 7) should return 5
// lca(head2, 3, 3) should return 3
// lca(head2, 8, 7) should return 1
// lca(head2, 3, 0) should return null (0 does not exist in the tree)
// This tree is:
//  head2 = 5
//        /   \
//       1     4
//      /\    / \
//     3  8  9  2
//    /\
//   6  7
describe
  .each([
    // [buildTree(), 1, 5, 0],
    // [buildTree(), 3, 1, 1],
    // [buildTree(), 1, 4, 1],
    // [buildTree(), 0, 5, 0],
    [buildTree(), 4, 7, 5],
    // [buildTree(), 3, 3, 3],
    // [buildTree(), 8, 7, 1],
    // [buildTree(), 3, 0, null],
  ])
    (`lca does stuff`, (node, i, j, expected) => {
      // console.log({
      //   node: node
      // });
      test(`"${i}" "${j}" is ${expected}`, () => {
        expect(lca(node, i, j)).toEqual(expected);
      });
});