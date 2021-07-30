import React from 'react';
import Editor from '../../../dist/index'

export default (props) => {
  const value = [
    {
      type: 'paragraph',
      children: [
        {
          text: '',
        },
      ],
    },
  ]
  return (
    <div>
      <Editor 
        value={value} 
        placeholder="请输入markdown..."
      />
    </div>
  )
}