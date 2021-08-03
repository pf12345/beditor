import React, { useEffect, useRef, useState } from 'react';
import Engine, { View } from '@aomao/engine';
import { ToolbarPlugin, ToolbarComponent } from '@aomao/toolbar';
import Image , { ImageComponent , ImageUploader } from '@aomao/plugin-image';
import Video , { VideoComponent , VideoUploader } from '@aomao/plugin-video';
import options from './options';
import Toolbar from './ToolBar';
import './style/index.less'

const Editor = ({ onChange, value = '', toolClass = '', editorClass = '', imgConfig = {}, videoConfig = {} }) => {
  //Editor container
  const ref = useRef<HTMLDivElement | null>(null);
  //Engine instance
  const [engine, setEngine] = useState(null);
  //Editor content
  const [content, setContent] = useState<string>(value);

  useEffect(() => {
    if (!ref.current) return;
    //Instantiate the engine
    const _engine:any = new Engine(ref.current, {
      className: editorClass,
      plugins: [
        ...options.plugins,
        Image , 
        ImageUploader,
        ToolbarPlugin,
        Video, 
        VideoUploader
      ],
      cards: [
        ToolbarComponent,
        ImageComponent,
        VideoComponent,
        ...options.cards,
      ],
      config: {
        ...options.config,
        [ImageUploader.pluginName]: {
          file: {
            accept: "svg,png,jpg,jpeg,gif,webp"
          },
          ...imgConfig
        },
        [VideoUploader.pluginName]: {
          accept: 'mp4',
          ...videoConfig
        }
      }
    });
    //Initialize local collaboration to record history
    _engine.ot.initLockMode();
    //Set the editor value
    _engine.setValue(content);
    //Listen to the editor value change event
    _engine.on('change', (value) => {
      const view = new View('.b-editor .editor-view', {
        plugins: [Image , ImageUploader, Video , VideoUploader, ...options.plugins],
        cards: [
          ImageComponent,
          VideoComponent,
          ...options.cards,
        ],
        config: {
          ...options.config,
          [ImageUploader.pluginName]: {
            file: {
              accept: "svg,png,jpg,jpeg,gif,webp"
            },
            ...imgConfig
          },
          [VideoUploader.pluginName]: {
            ...videoConfig
          }
        }
      });
      view.render(value);
      setContent(value);
      const element: Element | null = document.querySelector('.b-editor .editor-view');
      if(element) {
        // console.log('112233', element.innerHTML)
        onChange && onChange(value, element.innerHTML);
      }
    });
    //Set the engine instance
    setEngine(_engine);
  }, []);

  useEffect(() => {
    if(engine) {
      engine.setValue(value);
    }
    setContent(value);
  }, [value])
  
  return (
    <div className="b-editor">
      <div className={`tool-bar ${toolClass}`}><Toolbar engine={engine} /></div>
      <div className="editor-container"><div className="editor-content" ref={ref} /></div>
      <div className="editor-view"></div>
    </div>
  );
};
export default Editor;