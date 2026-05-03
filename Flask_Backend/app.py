# app.py (Flask)
from flask import Flask
import subprocess

app = Flask(__name__)

@app.route('/run-opencv', methods=['GET'])
def run_opencv():
    try:
        # Run your Python OpenCV script
        subprocess.run(['python', 'AITrainer.py'])
        return {"message": "OpenCV script executed successfully!"}
    except Exception as e:
        return {"error": str(e)}
    
@app.route('/run-openemotioncv', methods=['GET'])
def run_openemotioncv():
    try:
        # Run your Python OpenCV script
        subprocess.run(['python', 'emotion.py'])
        return {"message": "OpenCV script executed successfully!"}
    except Exception as e:
        return {"error": str(e)}  

if __name__ == "__main__":
    app.run(debug=True)
