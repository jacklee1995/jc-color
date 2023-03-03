import path from 'path'
import { copyFile, mkdir } from 'fs/promises'
import { src, watch, dest, series } from "gulp";
// import concat from "gulp-concat" // 合并文件插件
import uglify from "gulp-uglify" // 压缩文件
import rename from "gulp-rename" // 重命名插件
import ts from "gulp-typescript" // typescript 编译插件
import { deleteAsync } from "del" // 清理旧文件
import consola from "consola"

const baseDir = __dirname;
consola.info(`[build info] baseDir is:\n${baseDir}`)
const outDir = path.resolve(baseDir,'dist','src');
const productDir = path.resolve(baseDir,'dist','jc-color');
consola.info(`[build info] productDir is:\n${productDir}`)

// 清除旧文件
async function clearOldFiles(): Promise<void> {
  await deleteAsync(["dist/**/*"]);
  return;
}

// 编译 ts 文件为 js 文件
function buildTypescript():NodeJS.ReadWriteStream {
  return src("./src/**/*.ts")
    .pipe(
      ts({
        noImplicitAny: false,
        removeComments: true,
        declaration: true,
        target:"es2017",
        module:"commonjs",
        outDir: './dist',
        // moduleResolution: 'node',
        declarationDir: './dist/types'
      })
    )
    .pipe(dest("./dist/temp"));
}

function buildJSIndex():NodeJS.ReadWriteStream {
  return src("dist/temp/*.js") // 找到目标源文件，将数据读取到 gulp 的内存
    .pipe(dest("./dist/jc-color/")) // 临时输出文件到本地 dist/js 目录
    .pipe(uglify()) // 压缩文件
    // .pipe(rename({ basename: "index" })) // 为压缩后的文件重命名中添加 .min 后缀
    .pipe(dest("./dist/jc-color/")) // 输出重命名后的文件到本地 dist 目录
}

function buildJSUtils():NodeJS.ReadWriteStream {
  return src("./dist/temp/utils/*.js") // 找到目标源文件，将数据读取到 gulp 的内存
    .pipe(uglify()) // 压缩文件
    // .pipe(rename({ basename: "index" })) // 为压缩后的文件重命名中添加 .min 后缀
    .pipe(dest("./dist/jc-color/utils/")) // 输出重命名后的文件到本地 dist 目录
}

// 转移声明文件
const copyTypesDefinitions = ():NodeJS.ReadWriteStream => {
  return src("./dist/temp/**/*.d.ts")
    .pipe(dest("./dist/jc-color/"))
}

// 用于转移 package.json、README.md 以及声明文件
export const  copyFiles = async () => {
  await mkdir(productDir, { recursive: true });
  Promise.all([
    copyFile(
      path.join(__dirname,'package.json'), 
      path.join(productDir, 'package.json')
    ),
    copyFile(
      path.resolve(__dirname, 'README.md'),
      path.resolve(productDir, 'README.md')
    ),
    copyFile(
      path.resolve(__dirname, 'LICENSE'),
      path.resolve(productDir, 'LICENSE')
    ),
    // copyFile(
    //   path.resolve(__dirname, 'tsconfig.json'),
    //   path.resolve(productDir, 'tsconfig.json')
    // ),
  ])
}
// 注册监视任务
function watchChanges() {
  // 开启监听
  watch([
    "./src/**/**",
    "./*.ts",
    "./tsconfig.json",
    "LICENSE",
    "package.json",
    "readme.md"
  ], series(
    buildTypescript, 
    buildJSIndex, 
    buildJSUtils,
    copyFiles, 
    copyTypesDefinitions
  ));
}

// 注册默认任务
const build = series([
  clearOldFiles, // 启动时先删除旧文件
  series([
    buildTypescript, // 编译 ts 为 js
    buildJSIndex, // 合并 js
    buildJSUtils,
  ]),
  copyFiles,
  copyTypesDefinitions,
  watchChanges, // 监视改变
]);

export default build;
