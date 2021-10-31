# -*- coding: UTF-8 -*-
import youtube_dl
from loguru import logger

logger.add("download.log", rotation="50MB", encoding="utf-8", enqueue=True)

youtube_dl.utils.std_headers['User-Agent'] = 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'


def download_clip(url):
    video_info = {}
    ydl_opts = {
        'format': 'best',
        'outtmpl': '%(id)s.%(ext)s',
        'writethumbnail': True  # Download Thumbnail
    }
    try:
        with youtube_dl.YoutubeDL(ydl_opts) as ydl:
            # ydl.cache.remove()
            info_dict = ydl.extract_info(url, download=False)
            video_info["title"] = info_dict.get("title")
            video_info["cover"] = info_dict.get("thumbnail")
            video_info["link"] = info_dict.get("webpage_url")
            video_info["video_path"] = "%s.%s" % (info_dict["display_id"], info_dict["ext"])
            video_info["cover_path"] = "%s.%s" % (info_dict["display_id"], "jpg")
            ydl.download([url])
            logger.info("Successfully Download", [url])
            # print(video_info)
            return video_info
    except Exception as e :
        print(e)
        return False
