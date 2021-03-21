FROM tiangolo/uwsgi-nginx-flask:python3.8

COPY ./app /app

RUN DEBIAN_FRONTEND=noninteractive apt-get update &&\
 DEBIAN_FRONTEND=noninteractive apt-get install ca-certificates &&\
 pip3 install -r requirements.txt

ENTRYPOINT ["python3","start.py"]
