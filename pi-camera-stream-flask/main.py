
from flask import Flask, render_template, Response, request
from camera import VideoCamera
import time
import threading
import os
from gpiozero import AngularServo
from time import sleep

servo = AngularServo(18, min_pulse_width=0.0006, max_pulse_width=0.0023)
global position
servo.angle = 0
position = 0
pi_camera = VideoCamera(flip=False)
print("started")


app = Flask(__name__)

@app.route("/", methods=['GET', 'POST'])
def index():
    global position
    print(position)
    print(request.method)
    if request.method == 'POST':
        if request.form.get('MoveRight') == 'MoveRight':
            print("MoveRight")
            if position >=-80:
                position = position - 10
                servo.angle = position
        elif  request.form.get('MoveLeft') == 'MoveLeft':
            print("MoveLeft")
            if position <=80:
                position = position + 10
                servo.angle = position
        else:
            # pass # unknown
            return render_template("index.html")
    elif request.method == 'GET':
        # return render_template("index.html")
        print("No Post Back Call")
    return render_template("index.html")

def gen(camera):
    while True:
        frame = camera.get_frame()
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n\r\n')

@app.route('/video_feed')
def video_feed():
    return Response(gen(pi_camera),
                    mimetype='multipart/x-mixed-replace; boundary=frame')







if __name__ == '__main__':

    app.run(host='192.168.0.23', debug=False)



