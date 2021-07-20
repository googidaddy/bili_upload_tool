# bili_upload_tool
**搬运视频到b站工具**

 [docker hub](https://hub.docker.com/r/sicko1111/sicko/tags?page=1&ordering=last_updated)([Github](https://github.com/googidaddy/bili_upload_tool))

# 简介

这是一个用Python写的搬运视频并上传到[Bilibili](https://www.bilibili.com/)(Web)的工具

## 特色

- 无需调试更改代码
- 官方API，保证账号正常

# 快速上手

  ```
  docker pull sicko1111/sicko:1.0
  ```
  ```
  docker run -d --name mycontanier -p 9080:9080 sicko1111/sicko
  ```

Finally you can visit the website like <u>yoursite:9080</u>

<img src="https://raw.githubusercontent.com/googidaddy/img/master/img/bili_release.png" alt="例图">

# FAQ

**Q：部署过程中有问题怎么办？**

**A：请提[issue](https://github.com/googidaddy/bili_upload_tool/issues/new)**

**Q：更新频率？**

**A：空闲都会维护**

# 感谢

[Passkou-API](https://github.com/Passkou/bilibili-api)
[Youtube-dl](https://github.com/ytdl-org/youtube-dl)

Donate for a coffee!

<img src="https://raw.githubusercontent.com/googidaddy/img/master/wechat_pay.jpg" alt="donate by wechat" style="zoom:20%;" />

<img src="https://raw.githubusercontent.com/googidaddy/img/master/alipay.jpg" alt="alipay" style="zoom:60%;" />
