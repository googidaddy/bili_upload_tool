# **bili_upload_tool**

**搬运视频到 b 站工具**

# 简介

这是一个用 Python 写的搬运视频并上传到[Bilibili](https://www.bilibili.com/)(Web)的工具

## 紧急Bug通知！

**近期更新时，前端脱离nginx出现了未知错误，所以暂时下线nginx功能模块，并且新版本稳定性不太好，如介意请移步旧版本分支!! [旧版本](https://github.com/googidaddy/bili_upload_tool/tree/old)**

## 特色

- Docker容器化
- 无需处理任何操作环境
- 官方 API，保证账号正常
- 更换 Fastapi 异步框架，快人亿步！
- 持续更新，**用爱发电**

# 快速上手

~~**[1.调整参数](https://github.com/googidaddy/bili_upload_tool/blob/5a2d9a51783cc55aa00f304ded88d7766bbe67df/nginx/nginx.conf#L10)**~~
**[2.填入 Secret](https://github.com/googidaddy/bili_upload_tool/blob/e93a1c0813e91164a1704a50e0871511463173cc/Docker-main/main/.env)**

```
docker-compose up -d
```

最后打开网站 <u>yoursite:8080</u>
**建议等 10-30s 后台启动，测试<u>yoursite:9090</u>，有 Hello 返回即可。**

<img src="https://raw.githubusercontent.com/googidaddy/img/master/img/20211031231624.png" alt="例图">

# FAQ

**Q：部署过程中有问题怎么办？**

**A：请提[issue](https://github.com/googidaddy/bili_upload_tool/issues/new)**

**Q：有时上传失败咋办？**

**A：再提交多次**

**Q：更新频率？**

**A：空闲都会维护**

# 更新

[详情请点这里](https://github.com/googidaddy/bili_upload_tool/tree/main/CHANGELOGS)

# 感谢

[Passkou-API](https://github.com/Passkou/bilibili-api)
[Youtube-dl](https://github.com/ytdl-org/youtube-dl)
[ForgQi](https://github.com/ForgQi)
Donate for a coffee!

<img src="https://raw.githubusercontent.com/googidaddy/img/master/wechat_pay.jpg" alt="donate by wechat" style="zoom:20%;" />

<img src="https://raw.githubusercontent.com/googidaddy/img/master/alipay.jpg" alt="alipay" style="zoom:60%;" />
