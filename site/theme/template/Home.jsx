import React, { useState } from 'react';
import Editor from '../../../dist/index'

const editorConfig = {
  imgConfig: {
    file: {
      action: '/api/oss/uploadForm',
      accept: "svg,png,jpg,jpeg,gif,webp"
    },
    remote: {
      action: '/api/oss/uploadForm',
    }
  },
  videoConfig: {
    action: '/api/oss/uploadForm'
  }
}

export default (props) => {
  const [value, setValue] = useState('');
  setTimeout(() => {
    const a = '<p>Vue CLI 是一个基于 Vue.js 进行快速开发的完整系统，提供：</p><ul>\n<li>通过 <code>@vue/cli</code> 实现的交互式的项目脚手架。</li><li>通过 <code>@vue/cli</code> + <code>@vue/cli-service-global</code> 实现的零配置原型开发。</li><li>一个运行时依赖 (<code>@vue/cli-service</code>)，该依赖：\n<ul>\n<li>可升级；</li><li>基于 webpack 构建，并带有合理的默认配置；</li><li>可以通过项目内的配置文件进行配置；</li><li>可以通过插件进行扩展。</li>\n</ul>\n</li><li>一个丰富的官方插件集合，集成了前端生态中最好的工具。</li><li>一套完全图形化的创建和管理 Vue.js 项目的用户界面。</li>\n</ul><p>Vue CLI 致力于将 Vue 生态中的工具基础标准化。它确保了各种构建工具能够基于智能的默认配置即可平稳衔接，这样你可以专注在撰写应用上，而不必花好几天去纠结配置的问题。与此同时，它也为每个工具提供了调整配置的灵活性，无需 eject。</p><h2 id=\"hc09c2c9d-278059175549971c6e4a7\">该系统的组件</h2><p>Vue CLI 有几个独立的部分——如果你看到了我们的<a href=\"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue\">源代码</a>，你会发现这个仓库里同时管理了多个单独发布的包。</p><h3 id=\"CLI\">CLI</h3><p>CLI (<code>@vue/cli</code>) 是一个全局安装的 npm 包，提供了终端里的 <code>vue</code> 命令。它可以通过 <code>vue create</code> 快速搭建一个新项目，或者直接通过 <code>vue serve</code> 构建新想法的原型。你也可以通过 <code>vue ui</code> 通过一套图形化界面管理你的所有项目。我们会在接下来的指南中逐章节深入介绍。</p><h3 id=\"h3f01d344-27805917554ddc1e7067c\">CLI 服务</h3><p>CLI 服务 (<code>@vue/cli-service</code>) 是一个开发环境依赖。它是一个 npm 包，局部安装在每个 <code>@vue/cli</code> 创建的项目中。</p><p>CLI 服务是构建于 <a href=\"http://webpack.js.org/\">webpack</a> 和 <a href=\"https://github.com/webpack/webpack-dev-server\">webpack-dev-server</a> 之上的。它包含了：</p><ul>\n<li>加载其它 CLI 插件的核心服务；</li><li>一个针对绝大部分应用优化过的内部的 webpack 配置；</li><li>项目内部的 <code>vue-cli-service</code> 命令，提供 <code>serve</code>、<code>build</code> 和 <code>inspect</code> 命令。</li>\n</ul><p>如果你熟悉 <a href=\"https://github.com/facebookincubator/create-react-app\">create-react-app</a> 的话，<code>@vue/cli-service</code> 实际上大致等价于 <code>react-scripts</code>，尽管功能集合不一样。</p><h3 id=\"h3f01d344-2780591755435987a676a\">CLI 插件</h3><p>CLI 插件是向你的 Vue 项目提供可选功能的 npm 包，例如 Babel/TypeScript 转译、ESLint 集成、单元测试和 end-to-end 测试等。Vue CLI 插件的名字以 <code>@vue/cli-plugin-</code> (内建插件) 或 <code>vue-cli-plugin-</code> (社区插件) 开头，非常容易使用。</p><p>当你在项目内部运行 <code>vue-cli-service</code> 命令时，它会自动解析并加载 <code>package.json</code> 中列出的所有 CLI 插件。</p><p>插件可以作为项目创建过程的一部分，或在后期加入到项目中。它们也可以被归成一组可复用的 preset。</p><p><br /></p><h2 id=\"hc09c2c9d-27807143815ed22aa82c6\">代码块测试</h2><p><br /></p><card type=\"block\" name=\"codeblock\" value=\"data:%7B%22id%22%3A%22fcGDQ%22%2C%22mode%22%3A%22javascript%22%2C%22code%22%3A%22cards%3A%20%5B%5Cn%20%20%20%20CodeBlockComponent%2C%5Cn%20%20%20%20HrComponent%2C%5Cn%20%20%20%20TableComponent%2C%5Cn%20%20%20%20MathComponent%2C%5Cn%20%20%20%20CheckboxComponent%5Cn%20%20%5D%22%7D\"></card><p><br /></p><h2 id=\"hc09c2c9d-278059735594471d8bae0\">表格测试</h2><p>测试表格</p><p><br /></p><card type=\"block\" name=\"table\" value=\"data:%7B%22rows%22%3A3%2C%22cols%22%3A4%2C%22id%22%3A%22jMu4A%22%2C%22height%22%3A102%2C%22width%22%3A800%2C%22html%22%3A%22%3Ctable%20class%3D%5C%22data-table%5C%22%20style%3D%5C%22width%3A%20800px%3B%5C%22%3E%3Ccolgroup%3E%3Ccol%20width%3D%5C%22200%5C%22%3E%3C%2Fcol%3E%3Ccol%20width%3D%5C%22200%5C%22%3E%3C%2Fcol%3E%3Ccol%20width%3D%5C%22200%5C%22%3E%3C%2Fcol%3E%3Ccol%20width%3D%5C%22200%5C%22%3E%3C%2Fcol%3E%3C%2Fcolgroup%3E%3Ctbody%3E%3Ctr%3E%3Ctd%3E%3Cp%3E%E5%90%8D%E7%A7%B0%3C%2Fp%3E%3C%2Ftd%3E%3Ctd%3E%3Cp%3E%E5%BA%A7%E6%AC%A1%3C%2Fp%3E%3C%2Ftd%3E%3Ctd%3E%3Cp%3E%E8%BA%AB%E4%BB%BD%3C%2Fp%3E%3C%2Ftd%3E%3Ctd%20class%3D%5C%22table-last-row%5C%22%3E%3Cp%3E%E5%B9%B4%E9%BE%84%3C%2Fp%3E%3C%2Ftd%3E%3C%2Ftr%3E%3Ctr%3E%3Ctd%3E%3Cp%3E1%3C%2Fp%3E%3C%2Ftd%3E%3Ctd%3E%3Cp%3E2%3C%2Fp%3E%3C%2Ftd%3E%3Ctd%3E%3Cp%3E3%3C%2Fp%3E%3C%2Ftd%3E%3Ctd%20class%3D%5C%22table-last-row%5C%22%3E%3Cp%3E4%3C%2Fp%3E%3C%2Ftd%3E%3C%2Ftr%3E%3Ctr%3E%3Ctd%20class%3D%5C%22table-last-column%5C%22%3E%3Cp%3E%3Cbr%20%2F%3E%3C%2Fp%3E%3C%2Ftd%3E%3Ctd%20class%3D%5C%22table-last-column%5C%22%3E%3Cp%3E%3Cbr%20%2F%3E%3C%2Fp%3E%3C%2Ftd%3E%3Ctd%20class%3D%5C%22table-last-column%5C%22%3E%3Cp%3E%3Cbr%20%2F%3E%3C%2Fp%3E%3C%2Ftd%3E%3Ctd%20class%3D%5C%22table-last-column%20table-last-row%5C%22%3E%3Cp%3E%3Cbr%20%2F%3E%3C%2Fp%3E%3C%2Ftd%3E%3C%2Ftr%3E%3C%2Ftbody%3E%3C%2Ftable%3E%22%7D\"></card>'
    setValue(a);
  }, 3000)
  return (
    <div>
      <Editor 
        value={value} 
        placeholder="请输入markdown..."
        {...editorConfig}
      />
    </div>
  )
}