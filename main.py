import speedtest
from flask import Flask, jsonify, render_template, request, session, redirect, url_for
from flaskwebgui import FlaskUI

s = speedtest.Speedtest()

app = Flask(__name__)


@app.route("/")
def index():
    return render_template('index.html')


@app.route("/download", methods=['GET'])
def download():
    print("Performing Download Speedtest")
    d = round(s.download()/(10**6), 1)
    DWS = {"DWS": d}
    return DWS


@app.route("/upload", methods=['GET'])
def upload():
    print("Performing Upload Speedtest")
    u = round(s.upload()/(10**6), 1)
    UPS = {"UPS": u}
    return UPS


if __name__ == "__main__":
    app.run()
