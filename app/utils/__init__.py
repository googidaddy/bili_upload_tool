import os
import argparse
from loguru import logger;
import logging;
import providers
from pathlib import Path

pbar = None
# put your data from bili!
global_args = {'cookies': 'SESSDATA=xxxxxxx;bili_jct=xxxxxx',
               'show_progress': 1}
local_args = {
    'opts':('解析设置',''),
    'thread_id': ('分区 ID',17),
    'tags': ('标签','转载'),
    'desc_fmt':('描述格式 e.g. ％(desc)s','%(desc)s'),
    'title_fmt':('标题格式 e.g. ％(title)s','%(title)s'),
    'seperate_parts':('多个视频独立投稿（不分P）',1),    
    'no_upload':('只下载资源',0),
}
arg_epilog = '''
本工具支持将给定视频源转载至哔哩哔哩

'''

def setup_logging():
    import coloredlogs
    coloredlogs.DEFAULT_LOG_FORMAT = '[ %(asctime)s %(name)8s %(levelname)6s ] %(message)s'
    coloredlogs.install(0);logging.getLogger('urllib3').setLevel(100);logging.getLogger('PIL.Image').setLevel(100)

def prepare_temp():    
    if not os.path.isdir(temp_path):os.mkdir(temp_path)
    os.chdir(temp_path)    
    return True
tqdm_bar = None
def report_progress(current, max_val):
    from tqdm import tqdm
    global tqdm_bar
    if tqdm_bar is None or max_val != tqdm_bar.total or current < tqdm_bar.n:
        tqdm_bar = tqdm(desc='Uploading', total=max_val,unit='B', unit_scale=True)        
    tqdm_bar.update(current - tqdm_bar.n)    
    tqdm_bar.refresh()


temp_path = 'temp'
cookie_path = os.path.join(str(Path.home()), '.bilibili-toolman')


def save_cookies(cookie):
    if not cookie:
        return
    with open(cookie_path, 'w+') as target:
        target.write(cookie)


def load_cookies():
    return open(cookie_path).read()


def _enumerate_providers():
    provider_dict = dict()
    for provider in dir(providers):
        if not 'provider_' in provider:
            continue
        provider_name = provider.replace('provider_', '')
        provider_dict[provider_name] = getattr(providers, provider)
    return provider_dict


provider_args = _enumerate_providers()



def sanitize_string(string):
    
    import re
    return re.sub('[^\u0000-\u007F\uac00-\ud7a3\u3040-\u30ff\u4e00-\u9FFF]*','',string) # remove emojis

def truncate_string(string,max):
    if len(string) > max:string = string[:max-3] + '...'
    return string

