'''Youtube video provier - youtube-dl'''
from io import BytesIO
from math import inf
import re
from . import DownloadResult
import logging,youtube_dl,requests
__desc__ = '''Youtube'''
__cfg_help__ = '''format same as youtube-dl'''
logger = logging.getLogger('youtube')
youtube_dl.utils.std_headers['User-Agent'] = 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
params = {
    'logger':logger,
    'outtmpl':'%(id)s.%(ext)s',
    'format':'bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best',    
    'writethumbnail':True
}
ydl = youtube_dl.YoutubeDL(params)
def __to_yyyy_mm_dd(date):
    return date[:4] + '/' + date[4:6] + '/' + date[6:]

def update_config(cfg):
    global ydl
    ydl = youtube_dl.YoutubeDL({**params,**cfg})

def download_video(res,desc) -> DownloadResult:
    with DownloadResult() as results:
        def append_result(entry):
            with DownloadResult() as result:
                result.title = entry['title']
                result.soruce = entry['webpage_url']
                result.video_path = '%s.%s'%(entry['display_id'],entry['ext'])
                '''For both total results and local sub-results'''
                results.cover_path = result.cover_path = '%s.%s'%(entry['display_id'],'jpg')            
                date = __to_yyyy_mm_dd(entry['upload_date'])
                results.description = result.description = f'''作者 : {entry['uploader']} [{date} 上传]
来源 : {result.soruce}
                {desc}
                '''
            results.results.append(result)
        info = ydl.extract_info(res,download=True)
        results.soruce = info['webpage_url']
        results.title = info['title']
        '''Appending our results'''
        if 'entries' in info:
            for entry in info['entries']:
                append_result(entry)
        else:
            append_result(info)
    return results