from flask import Flask, render_template, request
import json
from loguru import logger
from . import bili

logger.add("err.log", encoding="utf-8", enqueue=True)

app = Flask(__name__, static_folder='./dist/assets', template_folder='./dist')


@app.route('/')
def index():
    return render_template("index.html")

'''receive data from your website'''
@app.route('/upload', methods=["POST"])
def upload():
    data = json.loads(request.data)
    logger.info("Successfully accept!")
    args = [{'cookies': '', 'show_progress': 1, 'opts': 'format=best', 'thread_id': f"{data['thread']}", 'tags': f"{data['tag']}",
                   'desc_fmt': f"{data['desc']}", 'title_fmt': f"{data['title']}", 'seperate_parts': 1, 'no_upload': 0,
                   'localfile': None, 'youtube': f"{data['link']} --no-check-certificate",
                   'resource': f"{data['link']}"}]
    msg = bili.start(args)
    return msg


if __name__ == "__main__":
    # You can change the port.
    app.run(host="0.0.0.0", debug=True, port=9090)
