# React 基础

React是一个用于构建用户界面的JavaScript库。

## 组件

React应用由组件组成：

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

## State 和 Props

- Props是只读的
- State是可变的

## 生命周期

组件有三个主要的生命周期阶段：
- 挂载
- 更新  
- 卸载
