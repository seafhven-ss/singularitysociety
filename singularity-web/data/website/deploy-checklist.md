# 官网改造部署检查单

当前状态：**不允许发布**

阻塞原因：

1. `next-intl` 双语架构未落地。
2. `/about`、`/contact` 缺失。
3. 图片资源未按 `next/image` 接入。
4. 存在占位链接。
5. 本地 `npm run build` 未通过。

## 发布前必须满足

1. 在 `dev` 分支完成所有阻塞项修复。
2. 执行 `npm run lint`，结果无 error。
3. 执行 `npm run build`，结果通过。
4. 人工检查桌面、平板、手机 3 个断点。
5. 人工检查中英文 2 个语言版本。
6. 人工点击所有 CTA、导航、页脚链接。

## dev -> main 合并步骤

1. `git checkout dev`
2. `git pull origin dev`
3. 确认审核报告中的阻塞项已全部关闭
4. `npm run lint`
5. `npm run build`
6. `git status`
7. `git add .`
8. `git commit -m "feat: finalize singularity society website refresh"`
9. `git checkout main`
10. `git pull origin main`
11. `git merge dev`
12. 再次执行 `npm run build`
13. `git push origin main`

## 发布后检查

1. 检查首页、产品总览、产品详情、案例总览、案例详情、关于、联系页是否可访问
2. 检查中英文切换是否正常
3. 检查图片是否正常加载且无明显布局抖动
4. 检查邮件链接、X 链接、Telegram 二维码是否可用

## 当前结论

本轮仅完成部署准备文档，不执行合并。待阻塞项修复后，再由用户确认是否按上述步骤推进发布。
