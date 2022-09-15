from app import create_app, socketio

app = create_app(debug=True)

if __name__ == '__main__':
    socketio.run(app, host='10.21.21.8', port=8080)
