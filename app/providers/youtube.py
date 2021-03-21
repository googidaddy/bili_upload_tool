'''Youtube video provier - youtube-dl'''
from io import BytesIO
from math import inf
import re
from . import DownloadResult
import logging,youtube_dl,requests
__desc__ = '''Youtube 视频'''
__cfg_help__ = '''format - 同 youtube-dl -f
( 另可跟随其他 yotube-dl 参数 e.g. format=best;quiet=True )'''
logger = logging.getLogger('youtube')
youtube_dl.utils.std_headers['User-Agent'] = 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
params = {
    'logger':logger,
    'outtmpl':'%(id)s.%(ext)s',
    'format':'bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best',    
    'writethumbnail':True
} # default params,can be overridden
ydl = youtube_dl.YoutubeDL(params)
def __to_yyyy_mm_dd(date):
    return date[:4] + '/' + date[4:6] + '/' + date[6:]

# cfg = {'format': 'best'}
def update_config(cfg):
    global ydl
    ydl = youtube_dl.YoutubeDL({**params,**cfg})

#  res : 'https://www.youtube.com/watch?v=3BBb'
def download_video(res,desc) -> DownloadResult:
    with DownloadResult() as results:
        # results 创建一个空的objet，有description original=False source title results=[]
        # downloading the cover
        # 下面方法基于能下载完视频
        def append_result(entry):
            with DownloadResult() as result:
                result.title = entry['title']
                result.soruce = entry['webpage_url']
                result.video_path = '%s.%s'%(entry['display_id'],entry['ext'])
                '''For both total results and local sub-results'''
                results.cover_path = result.cover_path = '%s.%s'%(entry['display_id'],'jpg')            
                date = __to_yyyy_mm_dd(entry['upload_date'])
                results.description = result.description = f'''{desc}
                转发不易，喜欢点个赞!'''
            results.results.append(result)
        # info是视频返回的详细信息
        info = ydl.extract_info(res,download=True)
        results.soruce = 'https://www.youtube.com'
        results.title = info['title']
        '''Appending our results'''
        if 'entries' in info:
            for entry in info['entries']:
                append_result(entry)
        else:
            append_result(info)
    return results