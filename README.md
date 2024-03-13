npm v3的时候出的Yarn包管理器
Yarn解决了npm存在的问题，具体如下：
- 确定性: 通过lockfile确保安装的包的版本是确定的,无论安装顺序如何，相同的依赖关系在任何机器和环境下都可以以相同的方式被安装。
- 采用模块扁平安装模式: 将不同版本的依赖包按照一定策略归纳为单个版本依赖包，以避免创建多个副本造成冗余(npm目前也有相同的优化成果)。
- 网络性能更好: Yarn采用请求排队的历年，类似于并发连接池，能够更好的利用网络资源，同时引入了安装失败时的重试机制。
- 采用缓存机制，实现了离线模式: Yarn会缓存所有下载过的包，下次安装时直接从缓存中读取，提高了安装速度。(npm目前也有类似的实现)。

在本篇中，我们解析了Yarn的安装原理。依赖包安装并不只是从远程下载文件那么简单，这其中涉及缓存、系统文件路径、安装依赖树解析、安装结构算法等内容。

相比于npm install名称，npm ci有以下几个特点
- npm ci命令要求项目中必须存在一个package-lock.json或npm-shrinkwrap.json文件，而npm install命令则不需要。
- npm ci命令完全根据package-lock.json文件安装依赖，这样可以保证开发团队成员使用版本一致的依赖。
- 因为npm ci命令完全根据package-lock.json文件安装依赖，所以不需要进行依赖树的解析，这样可以大大提高安装速度。
- npm ci命令在执行安装时会先删除项目中现有的node_modules目录，重新安装。
- npm ci命令只能一次性安装项目中所有依赖包，无法安装单个依赖包。
- 如果package-lock.json文件中的依赖与package.json文件中的依赖不一致，npm ci命令会直接报错。
- 执行npm ci命令永远不会改变package.json文件和package-lock.json文件的内容。

package-lock.json文件的dependencies部分主要由一下几项构成:
- version: 依赖包的版本号。
- resolved: 依赖包的下载地址。
- integrity: 依赖包的完整性的hash值。
- dev: 指明该模块是否为顶级模块的开发依赖。
- requires: 依赖包所需的所有依赖项，对应package.json文件中的dependencies中的依赖项。
- dependencies: node_modules目录中的依赖包(特殊情况下才存在)。

要不要提交lockfiles到仓库，这就需要看项目定了，具体考虑如下
- 如果开发一个应用，建议将package-lock.json文件提交到仓库中，这样可以保证团队成员使用版本一致的依赖。
- 如果开发一个库，建议不要将package-lock.json文件提交到仓库中，因为库项目一般是被其他项目依赖的，在不使用package-lock.json文件的情况下，就可以复用主项目已经加载过的包，避免依赖重复，可减小体积。
- 如果开发的库依赖了一个具体精确版本号的模块，那么提交lockfiles到仓库可能会造成同一个依赖的不同版本都被下载的情况。作为库开发者，如果真的有使用某个特定版本依赖的需要，一个更好的方式是定义peerDependencies内容。

为什么有xxxDependencies
- dependencies: 项目依赖。
- devDependencies: 开发依赖。
- peerDependencies: 同版本依赖。
- bundledDependencies: 打包依赖。
- optionalDependencies: 可选依赖。