from flask import Flask, request, jsonify
import pickle
import pandas as pd
from sklearn.preprocessing import OneHotEncoder
from sklearn.compose import ColumnTransformer

app = Flask(__name__)

# Load the model from disk
with open('nearest_neighbor_model.pkl', 'rb') as file:
    model = pickle.load(file)

@app.route('/api/predict', methods=['POST'])
def predict():
    # Get the request data
    data = request.get_json(force=True)

    

    # Ensure the data is a list (even if it's just one dictionary)
    if isinstance(data, dict):
        data = [data]

    # Define categorical features for one-hot encoding
    categorical_features = ['name', 'type', 'price']

    # Apply one-hot encoding to categorical features
    data = ColumnTransformer(
        transformers=[
            ('onehot', OneHotEncoder(), categorical_features)
        ],
        remainder='passthrough'
    )

    # Make a prediction
    prediction = model.predict(pd.DataFrame(data))
    print("--DEBUG-- ",prediction.toList())

    # Return the prediction
    return jsonify(prediction.tolist())

if __name__ == '__main__':
    # app.debug = True
    app.run(port=5000)

# curl -X POST http://localhost:5000/api/predict -H "Content-Type: application/json" -d '{"id": "2", "name": "Polo","type": "top","price": "11"}'

