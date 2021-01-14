import React from 'react';
export interface IProps {
  /**
   * @description       自定义属性
   * @default           支持定义默认值
   */
  prop?: string;
}
const Hello: React.FC<IProps> = () => <h1>Hello World!</h1>;
export default Hello;
