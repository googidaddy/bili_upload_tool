FROM tiangolo/uwsgi-nginx-flask:python3.8

COPY ./app /app
WORKDIR . /app
RUN apt-get -y update &&\
 apt-get -y install ca-certificates &&\
 pip3 install -r requirements.txt

ENTRYPOINT ["python3","start.py"]
