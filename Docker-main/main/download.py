# -*- coding: UTF-8 -*-
import yt_dlp
import os
from loguru import logger
from dotenv import load_dotenv
from PIL import Image
load_dotenv()
logger.add("download.log", rotation="50MB", encoding="utf-8", enqueue=True)

yt_dlp.utils.std_headers['User-Agent'] = 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'

def my_hook(d):
    if d['status'] == 'finished':
        print('Done downloading, now converting ...')

class MyCustomPP(yt_dlp.postprocessor.PostProcessor):
    def run(self, info):
        self.to_screen('Finished downloading, now uploading ...')
        return [], info

ydl_opts = {
    'format': format_selector,
    'outtmpl': '%(id)s.%(ext)s',
    'writethumbnail': True,
    'postprocessors': [{
        'key': 'FFmpegMetadata',
        'add_chapters': True,
        'add_metadata': True,
    }],
    'progress_hooks': [my_hook],
    'proxy':os.getenv('PROXY')
}
def download_clip(url):
    video_info = {}
    try:
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            ydl.add_post_processor(MyCustomPP())
            info_dict = ydl.extract_info(url)
            video_info["title"] = info_dict.get("title")
            video_info["cover"] = info_dict.get("thumbnail")
            video_info["link"] = info_dict.get("webpage_url")
            video_info["video_path"] = "%s.%s" % (info_dict["display_id"], info_dict["ext"])
            video_info["cover_path"] = "%s.%s" % (info_dict["display_id"], "jpg")
            im = Image.open("%s.%s" % (info_dict["display_id"],"webp")).convert("RGB")
            im.save("%s.%s" % (info_dict["display_id"], "jpg"),"jpeg")
            logger.info("Successfully Download", [url])
            return video_info
    except Exception as e :
        print(e)
        return False
