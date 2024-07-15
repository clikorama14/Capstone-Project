from flask import Flask, request, jsonify
import pickle
import pandas as pd
from sklearn.preprocessing import OneHotEncoder
from sklearn.compose import ColumnTransformer

app = Flask(__name__)

# Load the model from disk
with open('nearest_neighbor_model.pkl', 'rb') as file:
    model = pickle.load(file)

# Load the preprocessor from disk
with open('preprocessor.pkl', 'rb') as preprocessor_file:
    preprocessor = pickle.load(preprocessor_file)

@app.route('/api/predict', methods=['POST'])
def predict():
    data = request.get_json(force=True)
    # data = [{"id": "2", "name": "Polo","type": "top","price": 11}] # Uncomment for debugging/testing

    input_data = pd.DataFrame(data)
    encoded = preprocessor.transform(input_data)
    prediction = model.predict(encoded)
    return jsonify(prediction.tolist())

if __name__ == '__main__':
    # app.debug = True
    app.run(port=5000)


# curl -X POST http://localhost:5000/api/predict -H "Content-Type: application/json" -d '[{"id": "2", "name": "Polo","type": "top","price": 11}]'

