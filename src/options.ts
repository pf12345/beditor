import Heading from '@aomao/plugin-heading';
import Quote from '@aomao/plugin-quote';
import Alignment from '@aomao/plugin-alignment';
import Backcolor from '@aomao/plugin-backcolor';
import Bold from '@aomao/plugin-bold';
import Code from '@aomao/plugin-code';
import CodeBlock, { CodeBlockComponent } from '@aomao/plugin-codeblock';
import Fontcolor from '@aomao/plugin-fontcolor';
import Fontsize from '@aomao/plugin-fontsize';
import Hr, { HrComponent } from '@aomao/plugin-hr';
import Indent from '@aomao/plugin-indent';
import Table, { TableComponent } from '@aomao/plugin-table';
import Math, { MathComponent } from '@aomao/plugin-math';
import Orderedlist from '@aomao/plugin-orderedlist';
import Redo from '@aomao/plugin-redo';
import Strikethrough from '@aomao/plugin-strikethrough';
import Sub from '@aomao/plugin-sub';
import Sup from '@aomao/plugin-sup';
import Underline from '@aomao/plugin-underline';
import Undo from '@aomao/plugin-undo';
import Unorderedlist from '@aomao/plugin-unorderedlist';
import Link from '@aomao/plugin-link';
import Lineheight from '@aomao/plugin-line-height';
import Tasklist , { CheckboxComponent } from '@aomao/plugin-tasklist';
import Italic from '@aomao/plugin-italic';
import Mark from '@aomao/plugin-mark';
import Removeformat from '@aomao/plugin-removeformat';

export default {
  plugins: [
    Indent,
    Quote,
    Alignment,
    Backcolor,
    Bold,
    Code,
    CodeBlock,
    Fontcolor,
    Fontsize,
    Hr,
    Table,
    Math,
    Orderedlist,
    Redo,
    Strikethrough,
    Sub,
    Sup,
    Underline,
    Undo,
    Unorderedlist,
    Lineheight,
    Tasklist,
    Italic,
    Removeformat,
    Mark,
    Link,
    Heading,
  ],
  cards: [
    CodeBlockComponent,
    HrComponent,
    TableComponent,
    MathComponent,
    CheckboxComponent
  ]
}