# pikobuysheet.fi 项目记忆

更新：2026-10-28

## 范围与目标

- 本项目仅针对 Pikobuy，域名 https://pikobuysheet.fi/；每个平台和域名使用独立项目目录。
- 使用最新稳定版 Astro，首页以 Pikobuy spreadsheet 搜索意图为核心；正式版本必须包含 FindSpreadsheet 的商品数据、搜索、搜图、QC 照片、排序及相关功能。
- GitHub 仓库：zhoucanqiang35-art/new；建议目录 pikobuysheet-fi/。本文件目前位于规划分支，尚未合并或部署。
- 商品、图片、原始价格、商品 ID 与 QC 资料以 FindSpreadsheet 实际来源为准，不虚构数据，不将普通商品图称作 QC 照片。来源不可用时显示真实的不可用状态。
- 官方 Pikobuy logo 和 favicon 使用从官网核实的原始资产，独立推荐站应说明与官方关系及推广链接关系。

## 已提供的链接

- 推广注册：https://www.pikobuy.com/register?invitedCode=KPNJVF&inviteUserId=1109716
- 其他注册入口：https://www.pikobuy.com/?mode=register&redirect=/home
- 商品例子：https://www.pikobuy.com/product/detail?productUrl=https://weidian.com/item.html?itemID=7872749666
- 构造商品链接时优先使用来源中的完整原始商品链接；使用 URLSearchParams 编码内层 URL，避免内层 & 或特殊字符截断。不能假定所有平台 ID 均为 Weidian ID，也不能宣称购买链接自动带推广归因。
- 以带邀请参数的注册入口作为推荐注册 CTA；普通注册入口可用于不需要推广归因的情况，归因效果需实测。

## 关键词调研（2026-10-28）

- 首页主意图：Pikobuy spreadsheet；相关表达包括 Pikobuy sheet、Pikobuy finds、Pikobuy spreadsheet QC、Pikobuy QC photos、Pikobuy product links。
- 次级意图：Pikobuy shipping calculator / shipping cost、how to use Pikobuy、Pikobuy warehouse QC、Pikobuy Weidian / Taobao / 1688 finds，以及按 shoes、hoodies、jerseys、electronics、accessories 分类的查询。
- 来源是公开页面与搜索结果，不是搜索量、难度或排名数据；不可称其已验证流量或保证排名。Pikobuy 官方购买指南：https://www.pikobuy.com/guide ；运费估算：https://www.pikobuy.com/shipping-cost ；竞争页面参考：https://pikobuy.to/ 和 https://pikobuyspreadsheetqc.com/ 。
- 首页介绍浏览、购买、仓库 QC、国际运费；价格、库存及物流以实际平台为准，不承诺优惠、质量或实时数据。
- 建议路线：/、/spreadsheet/、/categories/、商品详情、QC、使用指南；具体 URL 及索引策略待源数据模型和可用功能核实后固定。搜索结果和重复筛选参数避免无价值索引；商品页、分类页、sitemap 和 canonical 必须与真实数据一致。

## 技术规划与待解决事项

- 推荐 Astro 静态预渲染 SEO 页面；商品、搜索和 QC 采取与真实源接口一致的实现。GitHub 是代码仓库；GitHub Pages 只承载静态输出，SSR 需要单独运行平台与适配器。
- 将上游访问集中在只读数据适配层；先核实数据源、更新节奏、可用字段、CORS、速率限制、授权和图片链接有效性，再选择实时请求或导出构建。不得先假设搜图模型或 QC API 可跨域使用。
- 当前可见 GitHub 安装仅包含 new 仓库；未在仓库根部找到 FindSpreadsheet 项目，现有子站的引用不能证明拥有完整导出。必须取得原始项目仓库或导出文件/API 文档与访问方式，才能完整实现和验证用户指定的功能。
- 在实现前核实 Astro 最新稳定版本、构建环境 Node 要求及实际生产托管；不要以规划分支或未通过测试的页面冒充正式部署。
- 验证清单：字段与数量对账；商品、分类、排序、搜索、搜图、QC 实测；内层链接编码；注册推广参数；官网 logo/favicon；移动端；SEO、sitemap、404；build；目标域名与线上状态。
