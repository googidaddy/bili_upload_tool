# -*- coding: UTF-8 -*-
import os
from plugins.bili_webup import BiliBili, Data
from download import download_clip
from dotenv import load_dotenv
load_dotenv()

def main():
    video = Data()
    video.title = os.getenv("TITLE")
    video.desc = os.getenv("DESCRIPTION")
    video.source = "www.youtube.com"
    video.tid = int(os.getenv("ID"))
    video.set_tag(list(os.getenv("TAG").split(",")))
    video_info = download_clip(os.getenv("URL"))
    video_path = video_info.get("video_path")
    cover_path = video_info.get("cover_path")
    csrf = os.getenv('BILI_JCT')
    sessdata = os.getenv('SESSDATA')
    buvid3 = os.getenv('BUVID3')
    with BiliBili(video, sessdata, csrf, buvid3) as bili:
        video_part = bili.upload_file(video_path)
        video.videos.append(video_part) 
        video.cover = bili.cover_up(cover_path).replace('http:', '')
        ret = bili.submit_web()
        if ret :
            os.remove(video_path)
            os.remove(cover_path)
        return ret
if __name__ == '__main__':
    main()



