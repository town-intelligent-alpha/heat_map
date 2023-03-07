import json
from flask import Flask, request
from flask import render_template

app = Flask(__name__)

#Type 1
@app.route("/", methods=['GET'])
def index():
    name = request.args.get('name')
    return "Hello"+name

@app.route('/receive', methods=['GET', 'POST'])
def receive():
    obj = json.loads(request.data)

    F = float(obj['message']) * 1.8 +32

    return json.dumps({"msg":str(F)})

if __name__ == '__main__':
    app.debug = True
    app.run(host = "0.0.0.0", port = 5001)
