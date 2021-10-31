# -*- coding: UTF-8 -*-
from flask import Flask, render_template,request
from flask_cors import CORS
import asyncio
import json
from loguru import logger
from upload import main
logger.add("main.log", rotation="50MB", encoding="utf-8", enqueue=True)

app = Flask(__name__, static_folder='./dist/assets', template_folder='./dist')
CORS(app)
@app.route('/')
def index():
    return render_template("index.html")

@app.route('/upload',methods=["POST"])
def upload():
    # Get data from website.
    data = json.loads(request.data)
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)
    res = asyncio.get_event_loop().run_until_complete(main(data))
    logger.info("上传成功",res.get("bvid"))
    return "https://www.bilibili.com/video/"+res.get("bvid")
    # return "yes"



if __name__ == '__main__':
    # 调试模式
    # app.run(debug=True)
    # 监听公网所有ip
    app.run(host='0.0.0.0', debug=True, port=9080)

