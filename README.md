# bili_upload_tool
**上传视频到b站工具**

## docker(推荐)

- clone the project

  ****

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

