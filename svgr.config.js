// eslint-disable-next-line @typescript-eslint/no-var-requires
const dynamicTitlePlugin = require('./plugins/svg-dynamic-title-plugin');

const template = ({ componentName, jsx, props, imports, exports, interfaces }, { tpl }) =>
  tpl`
  ${imports}
  import {ViewBoxSize} from '../SVGIcon.types';
  import styled from '@emotion/styled'
  ${interfaces}
  
  const Base =  ({ width, height, title, viewBox = '0 0 24 24', fill='none', ...props}: SVGProps\<
    SVGSVGElement> & 
    {width: number | string, height:number | string, title: string, viewBox?:ViewBoxSize, fill?:string}) => {
    return (${jsx})
  }
  
export const ${componentName} = styled(Base)\`
  & path {
    fill: $\{({ fill }) => fill};
  }
\`;

export default ${componentName};
`;

module.exports = {
  template,
  jsx: {
    plugins: [dynamicTitlePlugin],
  },
  svgProps: {
    height: '{height}',
    width: '{width}',
    fill: '{fill}',
    viewBox: '{viewBox}',
  },
};
