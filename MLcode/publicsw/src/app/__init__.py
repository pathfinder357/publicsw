from flask import Flask
from flask_socketio import SocketIO

socketio = SocketIO(logger=True, engineio_logger=True)


import logging

# 로그 생성
logger = logging.getLogger()

# 로그의 출력 기준 설정
logger.setLevel(logging.INFO)

# log 출력 형식
formatter = logging.Formatter('%(name)s, %(msecs)d, %(asctime)s, %(message)s, %(levelname)s')

# log 출력
stream_handler = logging.StreamHandler()
stream_handler.setFormatter(formatter)
logger.addHandler(stream_handler)

# log를 파일에 출력
file_handler = logging.FileHandler('my.csv')
file_handler.setFormatter(formatter)
logger.addHandler(file_handler)


def create_app(debug=False):
    """Create an application."""
    app = Flask(__name__)
    app.debug = debug
    app.config['SECRET_KEY'] = 'hard to guess...'

    socketio.init_app(app)
    
    '''
    두가지 방식 모두가 가능하지만,
    객체지향적 구조면에서 전자를 추천합니다.
    '''
    from app.events import ChatNamepsace
    socketio.on_namespace(ChatNamepsace('/chat'))
    # from app.events import socketio_init
    # socketio_init(socketio)

    from app.routes import main as main_blueprint
    app.register_blueprint(main_blueprint)

    
    return app
