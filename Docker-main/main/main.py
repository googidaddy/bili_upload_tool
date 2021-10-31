# -*- coding: UTF-8 -*-

import uvicorn
from fastapi import FastAPI,Request



import json
from loguru import logger
from upload import main
from pydantic import BaseModel

logger.add("main.log", rotation="50MB", encoding="utf-8", enqueue=True)

app = FastAPI()



# POST验证
class Item(BaseModel):
    link: str
    title: str
    id: str
    tag: str
    desc: str

@app.get("/")
def root():
    return {"Hello": "API"}

@app.post("/upload")
def upload(data: Item):
    # Get data from website.
    res = main(data.dict())
    logger.info("上传情况", res)
    return res




