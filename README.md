# **bili_upload_tool**

**搬运视频到 b 站工具**

# 简介

这是一个用 `Python`写的搬运视频并上传到[Bilibili](https://www.bilibili.com/)(Web)的工具

### **小声宣布：自动搬运工具可以测试了。**[传送门](https://github.com/googidaddy/bili-trash-bin)

## 特色

- Docker容器化
- 无需处理任何操作环境
- 官方 API，保证账号正常
- 更换 Fastapi 异步框架，快人亿步！
- 持续更新

# 快速部署（Docker-compose）

**无需clone整个仓库!!!但是需要[安装Docker及Docker-compose环境](https://www.google.com/search?q=how+to+install+docker+and+docker+compose&newwindow=1&sxsrf=APq-WBvBNliwzgVbtNOuQqEHfDuMmjfrHg%3A1645278170257&ei=2vMQYtOrD8uf-AaM87GIAg&oq=how+to+install+docker+and+docker&gs_lcp=Cgdnd3Mtd2l6EAMYATIFCAAQywEyBQgAEMsBMgUIABDLATIFCAAQywEyBQgAEMsBMgUIABDLATIFCAAQywEyBQgAEMsBMgQIABAeOgcIIxCwAxAnOgcIABBHELADSgQIQRgASgQIRhgAUJYDWNISYPgYaAFwAXgAgAFJiAHxBZIBAjExmAEAoAEByAEKwAEB&sclient=gws-wiz)**

<u>**[1.复制`docker-compose.yaml`和`.env`文件](https://github.com/googidaddy/bili_upload_tool/tree/master/docker-compose)**</u>

**[2.填入 Secret](https://github.com/googidaddy/bili_upload_tool/blob/master/docker-compose/.env)**
![image](https://user-images.githubusercontent.com/39123862/168716336-aa39d4b5-d7b0-4c92-8e09-cf702fd6d0c4.png)
<u>**3.然后执行以下代码**</u>

```
docker-compose up -d
```

**最后打开网站 <u>yoursite:3000</u>**
**测试：<u>yoursite:20123</u>，有 Hello 返回即可。**

### (Opt):如果是Arm架构[请修改](https://github.com/googidaddy/bili_upload_tool/blob/d457a2caf0674145d2ce9da2ddd5fde4ff2b382c/docker-compose/docker-compose.yaml#L9)

![example](https://raw.githubusercontent.com/googidaddy/img/master/img/20211121152312.png)

## 上传示例(Example)

[这里查看上传示例](https://github.com/googidaddy/bili_upload_tool/tree/master/example)

# FAQ

**Q：部署过程中有问题怎么办？**

**A：请提[issue](https://github.com/googidaddy/bili_upload_tool/issues/new)**

**Q：需要进一步讨论？**

**A：请提[discussions](https://github.com/googidaddy/bili_upload_tool/discussions/new?category=q-a)**

**Q：有时上传失败咋办？**

**A：再提交多次**

**Q：更新频率？**

**A：空闲都会维护**

### [电报群](https://t.me/sickoLab)
### [推荐服务器3C3G, $24.28，大概164RMB 一年](https://my.racknerd.com/aff.php?aff=5023&pid=199)
# 更新

[详情请点这里](https://github.com/googidaddy/bili_upload_tool/tree/master/CHANGELOGS)

# 感谢

[yt-dlp for downloading](https://github.com/yt-dlp/yt-dlp)
[ForgQi for upload](https://github.com/ForgQi)
Donate for a coffee!

<img src="https://raw.githubusercontent.com/googidaddy/img/master/wechat_pay.jpg" alt="donate by wechat" style="zoom:20%;" />

<img src="https://raw.githubusercontent.com/googidaddy/img/master/alipay.jpg" alt="alipay" style="zoom:60%;" />
