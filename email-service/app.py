from flask import Flask, request, make_response
from flask_cors import cross_origin
import os

app = Flask(__name__)


@app.route("/ping")
@cross_origin()
def hello_world():
    return make_response({"message": "Pinging back at you!"}, 200)


@app.post("/send-message")
@cross_origin()
def send_message():
    form_data = request.form.to_dict()

    if not os.path.exists(".temp"):
      os.mkdir(".temp")

    for image_file in request.files.getlist("artwork"):
        image_file.save(dst=os.path.join(".temp", image_file.filename))

    return make_response(form_data, 200)
