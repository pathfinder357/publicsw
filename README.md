# 공개 SW 대회 참여 출품작
공개 SW 대회 출품작입니다.
클라우드에서 네트워크, CPU 사용량에 대한 이상치 탐지를 하기 위해 ARIMA 기법을 이용해 클라우드 모니터링 시스템에서 뽑아온 
아웃풋 그래프를 학습하고 이를 데이터 + ARIMA에서 예상한 그래프와 합칩니다.
합친 데이터를 전처리하고 이를 AUTO ENCODER를 통해 데이터 전처리 및 복사하여 LSTM으로 학습시킨 모니터링 시스템을 만들었습니다.


# Flask-Simple-Chat
Flask-socketIO를 이용한 심플한 채팅 어플리케이션 예제 코드



# Dependency & Version compatibility

Socket.IO 프로토콜은 서버와 클라이언트 간의 버전이 반드시 호환되어야만 동작합니다.
정상적인 실행을 위해, 반드시 requirements.txt에 기록된 버전으로 수행해주세요.



# GET STARTED

```shell
$ pip install -r requirement.txt
$ python chat.py
 * Restarting with stat
 * Debugger is active!
 * Debugger PIN: 139-404-633
wsgi starting up on http://127.0.0.1:5000
...
```

# Locust Screen Shot

![total_requests_per_second_1663237202](https://user-images.githubusercontent.com/83073121/190412872-551cc257-c1bc-46d1-a106-0cbcbca091a5.png)

# Machine Learning 
머신러닝을 통한 클라우드 부하에 대한 이상치 탐지
![image](https://user-images.githubusercontent.com/83073121/200497369-e496671c-d939-4e6e-8e65-cde6e909d619.png)
![image](https://user-images.githubusercontent.com/83073121/200497424-74957374-d6bd-4a3e-b725-8911a6ff7650.png)
![image](https://user-images.githubusercontent.com/83073121/200497460-c44c1cd0-dc37-4f1c-ac1d-7edaa95d269b.png)

# References

https://github.com/miguelgrinberg/Flask-SocketIO-Chat

https://heodolf.tistory.com/125

https://python-socketio.readthedocs.io/en/latest/

https://flask-socketio.readthedocs.io/en/latest/

https://velog.io/@nameunzz/Anomaly-Detection
