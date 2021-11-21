# -*- coding: UTF-8 -*-

import uvicorn
from fastapi import FastAPI,Request



import json
from loguru import logger
from upload import main
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
logger.add("main.log", rotation="50MB", encoding="utf-8", enqueue=True)

app = FastAPI()
origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# POST验证
class Item(BaseModel):
    link: str
    title: str
    id: str
    tag: str
    des: str

@app.get("/")
def root():
    return {"Hello": "API"}

@app.post("/upload")
def upload(data: Item):
    # Get data from website.
    res = main(data.dict())
    logger.info("上传情况", res)
    return res




