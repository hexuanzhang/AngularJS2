/**
 * Created by zhanghexuan on 16/10/12.
 */

var path = require('path');

module.exports = {
    // 基本目录(绝对路径),用于解决 entry 选项,默认值为: process.cwd()
    context:  __dirname + "/app",

    /**
     * 入口文件
     * 1.如果传递字符串,则字符串会被解析成模块,并在启动时记载
     * 2.如果传递数组,则所有模块均在启动时加载,最后一个模块导出
     */
    /* 单入口 */
    entry: "./src/app.js",
    entry: ["./entry1.js", "./entry2.js"],
    /* 多入口 */
    entry: {
        page1: "./page1",
        page2: ["./entry1.js", "./entry2.js"]
    },

    /**
     * 输出文件
     * filename: 输出文件名,若entry为多入口时, 可采用[name](块名称)、[hash](编译的哈希值)、[chunkhash](块的哈希值)替换
     * path: 输出目录(绝对路径)
     * publicPath: 前缀路径,如果想生成的文件放到cdn, 必须配置该属性
     * chunkFilename: 非输入块的文件的输出文件名, 可采用[id](块ID)、[name](块名称)、[hash](编译的哈希值)、[chunkhash](块的哈希值)替换
     * sourceMapFilename: sourceMap输出的文件名, 可采用[file](对应js的文件名)、[id](块ID)、[hash](编译的哈希值)替换
     * devtoolModuleFilenameTemplate: 默认或者不配置即可
     * devtoolFallbackModuleFilenameTemplate: 默认或者不配置即可
     * devtoolLineToLine: 默认或者不配置即可
     * hotUpdateChunkFilename: 默认或者不配置即可
     * hotUpdateMainFilename: 默认或者不配置即可
     * jsonpFunction: JSONP异步加载代码块（chunk）时JSONP函数名，默认是webpackJsonp
     * hotUpdateFunction: JSONP异步热更新代码块时JSONP函数名, 默认是webpackHotUpdate
     * pathinfo: 是否以注释形式在require中增加模块path信息,默认是false
     * library: 如果设置，将以库的方式导出, 值为库名
     * libraryTarget: 导出库的格式, 有var、this、commonjs、commonjs2、amd、umd
     *      "var" – 通过设置变量导出: var Library = xxx (默认)
     *      "this" – 通过设置this的属性导出: this["Library"] = xxx
     *      "commonjs" – 通过设置 exports的属性导出: exports["Library"] = xxx
     *      "commonjs2" – 通过设置module.exports导出: module.exports = xxx
     *      "amd" – 导出到AMD（可选的命名 – 通过library选项设置名字）
     *      "umd" – 导出到AMD, CommonJS2或作为根的属性
     * umdNamedDefine: 如果library已经设置且libraryTarget为umd，且，将这个值设置成true会命名这个AMD模块
     * sourcePrefix: 将boundle代码的每一行都加上这个字符串前缀
     * crossOriginLoading: 是否允许跨域的块加载, 值为false、"anonymous"、"use-credentials"
     *      false – 禁用跨域加载
     *      "anonymous" – 跨域加载启用。使用anonymous不会有证书(credentials)和当前的请求一起发送
     *      "use-credentials" – 跨域加载启用，并且在发送请求时带上证书
     */
    output: {
        filename: "bundle.js", // "[name].js"、"[name].[hash].js"
        path: __dirname + "/build",
        publicPath: "/assets/", // "http://www.xxx.com/assets/"
        chunkFilename: "[name].[chunkhash].chunk.js",
        sourceMapFilename: "[file].sourceMap.js",
        devtoolModuleFilenameTemplate: "",
        devtoolFallbackModuleFilenameTemplate: "webpack:///[resourcePath]?[hash]",
        devtoolLineToLine: disabled,
        hotUpdateChunkFilename: "[id].[hash].hot-update.js",
        hotUpdateMainFilename: "[hash].hot-update.json",
        jsonpFunction: "webpackJsonp",
        hotUpdateFunction: "webpackHotUpdate",
        pathinfo: false, // require(/* ./test */23)
        library: "",
        libraryTarget: "var",
        umdNamedDefine: false,
        sourcePrefix: "\t",
        crossOriginLoading: false
    },

    /**
     * 模块
     * loaders: 数组,单个配置是一个对象, 包括如下配置;加载器后面的-loader可以省略写成loader: "babel"
     *      test 用来对文件名进行匹配测试
     *      exclude 被排除的文件名
     *      include 包含的文件名
     *      loader 叹号分割的loaders
     *      loaders loader数组
     * preLoaders: 用于编译前加载loader, 语法与loaders类似
     * postLoaders: 用于编译后加载loader, 语法与loader类似
     */
    moudle: {
        loaders: [
            {
                test: "/\.jsx$",
                include: [
                    path.resolve(__dirname, "app/src"),
                    path.resolve(__dirname, "app/test")
                ],
                exclude: /node_modules/,
                loader: "babel" // "babel-loader"
            },
            {
                //1.scss 样式文件外联文件形式
                // test:/\.scss$/,
                // loader: Pconf.extractTextPluginConf.extract(['css','sass'])

                //2.scss 样式文件内联方式实现
                test:/\.scss$/,
                loader: "style!css!postcss!sass"
            },
            {
                //图片如果小于8192kb将会以base64形式存在，否则产生图片文件
                test: /\.(png|jpg|gif|ttf|eot|svg|woff|woff2)$/,
                loader: 'url-loader?limit=8192&name=./assets/[name].[ext]'
            },
            {
                test: /\.json$/,
                loader: 'json'
            }
        ],
        preLoaders: [
            {
                test: /\.js|\.jsx$/,
                loader: 'eslint-loader'
            }
        ],
        postLoaders: [],
    }
}