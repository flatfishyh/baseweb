/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
/* eslint-env node */
/* eslint-disable flowtype/require-valid-file-annotation */

const {mount} = require('../../../e2e/helpers');

function getActionButtonByLabel(parent, label) {
  return parent.$(`button[alt="${label}"]`);
}

describe('data-table-row-actions', () => {
  it('renders provided row action buttons', async () => {
    await mount(page, 'data-table-row-actions');
    await page.mouse.move(150, 327);
    const actionButtonOne = await getActionButtonByLabel(
      page,
      'row-action-label-one',
    );
    expect(actionButtonOne).toBeTruthy();

    const actionButtonTwo = await getActionButtonByLabel(
      page,
      'row-action-label-two',
    );
    expect(actionButtonTwo).toBeTruthy();
  });

  it('calls provided onclick function when clicked', async () => {
    await mount(page, 'data-table-row-actions');
    await page.mouse.move(150, 327);
    const actionButton = await getActionButtonByLabel(
      page,
      'row-action-label-one',
    );
    await actionButton.click();
    const listItems = await page.$$('li');
    expect(listItems.length).toBe(1);
  });
});
