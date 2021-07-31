import React, { useEffect, useRef, useState } from 'react';
import Engine from '@aomao/engine';
import { ToolbarPlugin, ToolbarComponent } from '@aomao/toolbar';
import options from './options';
import Toolbar from './ToolBar';
import './style/index.less'

const Editor = (props) => {
  const { onChange, value = '', toolClass = '', editorClass = '' } = props || {};
  //Editor container
  const ref = useRef<HTMLDivElement | null>(null);
  //Engine instance
  const [engine, setEngine] = useState();
  //Editor content
  const [content, setContent] = useState<string>(value);

  useEffect(() => {
    if (!ref.current) return;
    //Instantiate the engine
    const _engine:any = new Engine(ref.current, {
      className: editorClass,
      plugins: [
        ...options.plugins,
        ToolbarPlugin,
      ],
      cards: [
        ToolbarComponent,
        ...options.cards,
      ],
    });
    //Initialize local collaboration to record history
    _engine.ot.initLockMode();
    //Set the editor value
    _engine.setValue(content);
    //Listen to the editor value change event
    _engine.on('change', (value) => {
      setContent(value);
      onChange && onChange(value);
    });
    //Set the engine instance
    setEngine(_engine);
  }, []);
  
  return (
    <div className="b-editor">
      <div className={`tool-bar ${toolClass}`}><Toolbar engine={engine} /></div>
      <div className="editor-content" ref={ref} />
    </div>
  );
};
export default Editor;