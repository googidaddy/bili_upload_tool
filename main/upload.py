# -*- coding: UTF-8 -*-
import os
from bilibili_api import video, Credential
from loguru import logger
from download import download_clip
logger.add("upload.log", rotation="50MB", encoding="utf-8", enqueue=True)



async def main(data):

    if "sessdata" in data :
        SESSDATA = data.get("sessdata")
        BILI_JCT = data.get("bili_jct")
        BUVID3 = data.get("buvid3")
    else:
        logger.error("没填参数！")
        return {"bvid" : "三个重要参数没填(sessdata...)"}

    credential = Credential(sessdata=SESSDATA, bili_jct=BILI_JCT, buvid3=BUVID3)
    # 下载视频先
    video_info = download_clip(data.get("link"))
    # 视频文件路径
    video_path = video_info.get("video_path")
    # 封面图片路径
    cover_path = video_info.get("cover_path")

    # 获取文件名和后缀
    filename, ext = os.path.basename(video_path).split(".")

    # 实例化 P1 对象
    p1 = video.VideoUploaderPageObject(video_stream=open(video_path, "rb"), title=filename, video_format=ext)

    # 视频上传配置
    config = {
        "copyright": 2,  # "1 自制，2 转载。",
        "source": "www.youtube.com",  # "str, 视频来源。投稿类型为转载时注明来源，为原创时为空。",
        "desc": data.get("desc"),  # "str, 视频简介。",
        "desc_format_id": 0,
        "dynamic": "",  # "str, 动态信息。",
        "interactive": 0,
        "open_elec": 0,  # "int, 是否展示充电信息。1 为是，0 为否。",
        "no_reprint": 0,  # "int, 显示未经作者授权禁止转载，仅当为原创视频时有效。1 为启用，0 为关闭。",
        "subtitles": {
            "lan": "",  # "字幕语言，不清楚作用请将该项设置为空",
            "open": 0
        },
        "tag": data.get("tag"),  # "str, 视频标签。使用英文半角逗号分隔的标签组。示例：标签1,标签2,标签3",
        "tid": int(data.get("id")),  # "int, 分区ID。可以使用 channel 模块进行查询。",
        "title": data.get("title"),  # "视频标题",
        "up_close_danmaku": False,  # "bool, 是否关闭弹幕。",
        "up_close_reply": False,  # "bool, 是否关闭评论。",
    }

    # 要上传的所有分 P 列表
    pages = [p1]

    # 初始化上传
    uploader = video.VideoUploader(cover=open(cover_path, 'rb'), cover_type="jpg", pages=pages, config=config,
                                   credential=credential)

    # 开始上传
    try:
        res = await uploader.start()
        # 打印结果（返回的为 bv 号和 av 号）
        logger.info("Successfully Upload", res)
        # 删掉文件
        if os.path.exists(video_path):
            os.remove(video_path)
            os.remove(cover_path)
        else:
            logger.info("file does not exist")
        print(res)
        return res
    except Exception as e:
        print(e)
        logger.error(e)
        return False

# Test
# if __name__ == '__main__':
#   # 主入口
#   asyncio.get_event_loop().run_until_complete(main(data))