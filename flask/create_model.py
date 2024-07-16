import pandas as pd
import os
import json
from dotenv import load_dotenv
from pymongo import MongoClient
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
from sklearn.preprocessing import OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.metrics import accuracy_score
import pickle
from flask import Flask, request, jsonify

# # Connect to MongoDB
# client = MongoClient(os.getenv('MONGO_DB_URL'))
# db = client.cc # Connect to Database
# collection = db.clothes # Connect to collection

# # Get all the data
# clothes = collection.find({})
# df = pd.DataFrame(list(clothes))

with open('test.json', 'rb') as file:
    test = json.load(file)

with open('database.json', 'rb') as file:
    database = json.load(file)    

recommend = {item['type']for item in test}
result = []
for item in database:
    item_type = item['type']

    if item_type in recommend:
        recommend_value =1
    else:
        recommend_value =0
    result.append({"id":item['id'],"name":item['name'],"type":item['type'],"recommended": recommend_value})


# Load the dataset
df = pd.DataFrame(result)

# df = df.groupby(['id','name','type','price']).size().reset_index(name='purchase')

y = df['recommended']
X = df[['id','type']]

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42) #Note: test = selected for traning, test = not selected used for testing how accurate it works

# Initialize the KNN classifier
k=min(5, len(X_train)) # Prediction based on k nearest neighbors
knn = KNeighborsClassifier(n_neighbors=k)

# Define categorical features for one-hot encoding
categorical_features = ['id','type']

# Apply one-hot encoding to categorical features
preprocessor = ColumnTransformer(
    transformers=[
        ('onehot', OneHotEncoder(handle_unknown='ignore'), categorical_features)
    ],
    remainder='passthrough'
)

# Fit and transform the training data
X_train_encoded = preprocessor.fit_transform(X_train)

# Transform the testing data
X_test_encoded = preprocessor.transform(X_test)

# Train the classifier
knn.fit(X_train_encoded, y_train)

# Predict the test set
y_pred = knn.predict(X_test_encoded)

# Calculate the accuracy of the model
accuracy = accuracy_score(y_test, y_pred)
print("Accuracy:", accuracy)

result = df.to_json(orient="records")

# # Call function generate clothes and dump info to json
# json_object = json.dumps(result, indent=4)

# Save data to json file
with open("../react/recommended.json", "w") as file:
    file.write(result)
    print ("Done")

# Save preprocessor to pipeline
with open('preprocessor.pkl', "wb") as preprocessor_file:
    pickle.dump(preprocessor, preprocessor_file)
    print ("Done")

# Save model to pipeline
with open('nearest_neighbor_model.pkl', "wb") as file:
    pickle.dump(knn, file)
    print ("Done")