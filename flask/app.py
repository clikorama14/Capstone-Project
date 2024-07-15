from flask import Flask, request, jsonify
import pickle
import pandas as pd

app = Flask(__name__)

# Load the model from disk
with open('nearest_neighbor_model.pkl', 'rb') as file:
    model = pickle.load(file)

@app.route('/api/predict', methods=['POST'])
def predict():

    return jsonify()

if __name__ == '__main__':
    app.run(port=5000)

