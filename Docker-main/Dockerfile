FROM tiangolo/uvicorn-gunicorn:python3.8

COPY ./main /app

RUN apt-get update -y &&\
    apt-get install -y ca-certificates &&\
    apt-get install -y vim &&\
    pip install --no-cache-dir fastapi &&\
    pip install -r /app/requirements.txt

CMD ["uvicorn"," --port 9090 --host 0.0.0.0 --reload main:app"]


