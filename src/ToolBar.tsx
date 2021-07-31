import React from 'react';
import Toolbar from '@aomao/toolbar';

const items = [
  ['collapse'],
  ['undo', 'redo', 'removeformat'],
  ['heading', 'fontsize'],
  ['bold', 'italic', 'strikethrough', 'underline', 'moremark'],
  ['fontcolor', 'backcolor'],
  ['alignment'],
  [
    'unorderedlist',
    'orderedlist',
    'tasklist',
    'indent',
    'line-height',
  ],
  ['link', 'quote', 'hr'],
]

const ToolBar = ({ engine }) => {
  return engine ? (
    <Toolbar
      engine={engine}
      items={items}
    />
  ) : null
}

export default ToolBar;