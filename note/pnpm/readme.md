# pnpm

[官网](https://www.pnpm.cn/)

可以减少重复包的安装，node_modules 全部安装在最外层的node_modules
里面会出现一个.pnpm 文件夹
内部模块引入已存在的包，可以通过路径引入

## 好处
1. 大大提升安装速度
2. 节省内存，共享相同版本的依赖包