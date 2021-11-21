# -*- coding: UTF-8 -*-
import yt_dlp
import os
from loguru import logger
from dotenv import load_dotenv
from PIL import Image
load_dotenv()
logger.add("download.log", rotation="50MB", encoding="utf-8", enqueue=True)

yt_dlp.utils.std_headers['User-Agent'] = 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'


def download_clip(url):
    video_info = {}
    ydl_opts = {
        'format': 'best',
        'outtmpl': '%(id)s.%(ext)s',
        'writethumbnail': True,  # Download Thumbnail
        'proxy':os.getenv('PROXY')
    }
    try:
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            info_dict = ydl.extract_info(url, download=False)
            video_info["title"] = info_dict.get("title")
            video_info["cover"] = info_dict.get("thumbnail")
            video_info["link"] = info_dict.get("webpage_url")
            video_info["video_path"] = "%s.%s" % (info_dict["display_id"], info_dict["ext"])
            video_info["cover_path"] = "%s.%s" % (info_dict["display_id"], "jpg")
            ydl.download([url])
            im = Image.open("%s.%s" % (info_dict["display_id"],"webp")).convert("RGB")
            im.save("%s.%s" % (info_dict["display_id"], "jpg"),"jpeg")
            logger.info("Successfully Download", [url])
            return video_info
    except Exception as e :
        print(e)
        return False
