FROM tiangolo/uwsgi-nginx-flask:python3.8

COPY ./main /app
WORKDIR /app
RUN apt-get update -y && \
    apt-get install -y vim && \
    apt-get install -y ca-certificates && \
    pip3 install -r requirements.txt
CMD ["python","/app/main.py"]
EXPOSE 9080
