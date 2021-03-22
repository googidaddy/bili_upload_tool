# bili_upload_tool
**搬运视频到b站工具**

## docker(推荐)

- clone the project

  [change to your bili secret!](https://github.com/googidaddy/bili_upload_tool/blob/202c1615f444413e4d6528b0b96722221024dc12/app/utils/__init__.py#L10)

  [Guide to get your secret!](https://github.com/Passkou/bilibili-api#%E8%8E%B7%E5%8F%96-sessdata-%E5%92%8C-csrf)

- cd project 

```
.
├── app
│   └── main.py
└── Dockerfile
```

- Build your Flask image

```
docker build -t myimage .
```

- Run a container based on your image

```
docker run -d --name mycontainer -p 9090:9090 myimage
```

Finally you can visit the website like <u>yoursite:9090</u>

## 感谢

[Passkou-API](https://github.com/Passkou/bilibili-api)

[Youtube-dl](https://github.com/ytdl-org/youtube-dl)

[thanks!mos9527](https://github.com/greats3an)

Donate for a coffee!

<img src="https://raw.githubusercontent.com/googidaddy/img/master/wx_qr.jpg" alt="donate by wechat" style="zoom:7%;" />

<img src="https://raw.githubusercontent.com/googidaddy/img/master/alipay.jpg" alt="alipay" style="zoom:60%;" />
