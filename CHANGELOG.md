# Changelog

## [1.0.4](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-open-api/compare/v1.0.3...v1.0.4) (2023-05-20)


### Continuous Integration

* **open-api:** 修复 `release-distribution.yml` 发布时标签关联分支错误问题 | Fix the issue of wrong branch associated with tag when `release-distribution.yml` is released. ([f2852da](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-open-api/commit/f2852da257b918dd9f879964de940a89f46381ec))


### Miscellaneous

* **open-api:** release v1.0.4 ([5081faf](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-open-api/commit/5081faf8e2123bd87823ead62e4e037f0d71a528))

## [1.0.3](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-open-api/compare/v1.0.2...v1.0.3) (2023-05-20)


### Documentation

* **open-api:** 更新 `README*.md` | Update `README*.md`. ([89c8fde](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-open-api/commit/89c8fde5b88dedc70ecda1b628d6d81b3c90f95f))


### Continuous Integration

* **open-api:** 修复 `release-distribution.yml` 打包时目标分支错误问题 | Fix the issue of wrong target branch when `release-distribution.yml` is packaged. ([7d8ef5b](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-open-api/commit/7d8ef5b6674e2d9e86a00e3b7d676d354ddde5ee))


### Miscellaneous

* **open-api:** release v1.0.3 ([45efae4](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-open-api/commit/45efae4bc2137cf7ced248b1e9324fc35d51534e))

## [1.0.2](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-open-api/compare/v1.0.1...v1.0.2) (2023-05-20)


### Continuous Integration

* **open-api:** 运行 `build.yml` 完成后调用 `release-distribution.yml` | Call `release-distribution.yml` after `build.yml` is completed. ([e2a5f1a](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-open-api/commit/e2a5f1ace1ce37583942f6925557f6bda54f92f4))


### Miscellaneous

* **open-api:** release v1.0.2 ([efeaff6](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-open-api/commit/efeaff6441dcac7ca7730aa201dccbacf6efc213))

## [1.0.1](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-open-api/compare/v1.0.0...v1.0.1) (2023-05-20)


### Build System

* 修复 `split.ps1` 脚本 | Fix `split.ps1` script. ([13e615c](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-open-api/commit/13e615caf86f0775dce380aeb75430970e62c828))
* 更新依赖 | Update dependencies. ([f174955](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-open-api/commit/f17495508dc7c6b580a08c521de2d29b3df814b6))


### Continuous Integration

* **open-api:** 更新 `release-please.yml` CD 配置使其生成 pre-release | Update `release-please.yml` CD configuration to generate pre-release. ([34a0846](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-open-api/commit/34a0846cbc57629991eceba2fcc3b32464bd4cee))


### Documentation

* **open-api:** 更新 `README*.md` | Update `README*.md`. ([a12d7db](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-open-api/commit/a12d7dbab7dd1e648c863d4d8e4772c15e3dde63))


### Miscellaneous

* **open-api:** release v1.0.1 ([1cb78cb](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-open-api/commit/1cb78cbfb7b7f15e5ca31a96ed9796cc1a860b0d))
* **open-api:** remove open-api module ([277e624](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-open-api/commit/277e6241b686b83f1b0a1b2644cda6b990628f4f))

## 1.0.0 (2023-05-19)


### ⚠ BREAKING CHANGES

* **open-api:** release v1.0.3
* **open-api:** release v1.0.2

### Features

* `open-api` 插件实现将插件 API 暴露至全局变量的功能 | The 'open-api' plugin implement the function exposes the plugin API to global variables. ([0b19b82](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-open-api/commit/0b19b823b194b080aee21e304717bc4af0ac569c))


### Reverts

* 无效的 `build.yml` 触发条件 | Invalid trigger condition of `build.yml`. ([298e2de](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-open-api/commit/298e2de2f400f18cffb15496c6c4ecd0c01a0821))


### Documentation

* 新增发行步骤 | Added release steps. ([b9dc192](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-open-api/commit/b9dc19250ece03123c640bcc0890dae8a53f4d44))
* 新增附属仓库的的 `CHANGELOG.md` | Added `CHANGELOG.md` for sub-repository. ([3da1b2e](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-open-api/commit/3da1b2e4a852ff0136c5dc9e5dad878e9a68cbd0))
* 更新 `open-api` 插件描述信息 | Update `open-api` plugin description. ([23bd46e](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-open-api/commit/23bd46e0f5f59edbbd6674079221c13b58daeb40))
* 更新 `README.md` | Update `README.md`. ([ed870f4](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-open-api/commit/ed870f4c38c141a022bc36e58a55e4c71b99ff5c))
* 更新 `README.md` | Update `README.md`. ([a532b80](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-open-api/commit/a532b8004c98d3b3d6557bbcb431746aa7bb94f5))
* 添加 `package.json` | Add `package.json`. ([2386ecd](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-open-api/commit/2386ecd97910d9448cffabd3fc71fbe1bce11a4c))
* 添加捐助方案 | Added donation method. ([1977303](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-open-api/commit/197730335e8b57d4ba510b34193e80e3fe28db5e))


### Build System

* 更新依赖 | Update dependencies. ([5e61627](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-open-api/commit/5e61627c83fa72a156aab338583198a085c5f180))
* 添加 `split.ps1` 脚本 | Add `split.ps1` script. ([e516a07](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-open-api/commit/e516a07d87cb7261d450954a9002100e8c4326d4))


### Miscellaneous

* **open-api:** release v1.0.0 ([fad25ed](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-open-api/commit/fad25ed370739f483679241b2f1cc3a3a4053cc8))
* **open-api:** release v1.0.1 ([59cd416](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-open-api/commit/59cd4160dff75945dc86119e3f7740076d0a051b))
* **open-api:** release v1.0.2 ([69a6be2](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-open-api/commit/69a6be2cf13fba1e7248cfcae658ae7609ae65b2))
* **open-api:** release v1.0.2 ([3ea7b06](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-open-api/commit/3ea7b069c447430990a0172f94b5849594f4e334))
* **open-api:** release v1.0.3 ([e9bbb76](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-open-api/commit/e9bbb76c7b94e59eeaef06df90b9026d39366350))
* **open-api:** release v1.0.3 ([17829ec](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-open-api/commit/17829ec97f3b7ae1c811304274f5b8d688208ab3))
* **open-api:** release v1.0.4 ([0476eb5](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-open-api/commit/0476eb535586dc42e54698a19ef63811219b4597))
* release v1.0.1 ([e91e760](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-open-api/commit/e91e760f62ee2a48782e90f2ce4f6e7b7303783f))


### Continuous Integration

* CD `release-please.yml` 支持触发其他 CD 工作流 | CD `release-please.yml` supports triggering other CD workflows. ([c3ccd16](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-open-api/commit/c3ccd16a65d7079e9c18a5fa6ec17073e2be5985))
* **open-api:** CI/CD 支持手动触发 | CI/CD supports manual triggering. ([c1f68b9](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-open-api/commit/c1f68b9132452e3c650a96de81730e1389d68783))
* **open-api:** 修复 `build.yml` CD 配置 | Fix `build.yml` CD configuration. ([dc9c87c](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-open-api/commit/dc9c87cf68935dd1687a71b679a604bf8ed58b4e))
* **open-api:** 修复 `release-distribution.yml` CD 配置 | Fix `release-distribution.yml` CD configuration. ([8701538](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-open-api/commit/87015382386e5d78b91f6d24770fd8f61b87bfa1))
* 更改 `build.yml` 触发条件 | Change the trigger condition of `build.yml`. ([091fc86](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-open-api/commit/091fc86519b0ad482b173eeeadccd3dc7a672ebd))
* 更新 `release-please.yml` CD 配置 | Update `release-please.yml` CD configuration. ([ac944b8](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-open-api/commit/ac944b8d77faa84f250b856286dae45edaf8e858))
* 添加 `build.yml` CD 配置 | Add `build.yml` CD configuration. ([5d68d53](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-open-api/commit/5d68d53689aa4f1e5bbf8d921eacd7bb0288f3e8))
* 添加 `release-distribution.yml` CD 配置 | Add `release-distribution.yml` CD configuration. ([43ca3ea](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-open-api/commit/43ca3eafb0a1f4577a7aa9f817359698e99fcae4))
* 添加 `release-please.yml` CD 配置 | Add `release-please.yml` CD configuration. ([ea4f103](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-open-api/commit/ea4f103a9dca2c12f9b805e3b6883559d6d8c50a))

## 更改日志 | CHANGE LOG

本文档由持续集成工作流自动构建，不要直接编辑此文件。  
This document is automatically built by the continuous integration workflow. Do not edit this file directly.
