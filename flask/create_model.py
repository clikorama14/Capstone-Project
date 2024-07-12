import pandas as pd
import os
from dotenv import load_dotenv
from pymongo import MongoClient
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
from sklearn.preprocessing import OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.metrics import accuracy_score
import pickle

# Connect to MongoDB
client = MongoClient(os.getenv('MONGO_DB_URL'))
db = client.cc # Connect to Database
collection = db.clothes # Connect to collection

# Get all the data
clothes = collection.find({})
df = pd.DataFrame(list(clothes))

y = df['']
X = df[['']]

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42) #Note: test = selected for traning, test = not selected used for testing how accurate it works

# Initialize the KNN classifier
k=5 # Prediction based on k nearest neighbors
knn = KNeighborsClassifier(n_neighbors=k)

# Train the classifier
knn.fit(X_train, y_train)

# Define categorical features for one-hot encoding
categorical_features = ['']

# Apply one-hot encoding to categorical features
preprocessor = ColumnTransformer(
    transformers=[
        ('onehot', OneHotEncoder(), categorical_features)
    ],
    remainder='passthrough'
)

# Fit and transform the training data
X_train_encoded = preprocessor.fit_transform(X_train)

# Transform the testing data
X_test_encoded = preprocessor.transform(X_test)

# Train the classifier
knn.fit(X_train_encoded, y_train)

# Predict the cities for the test set
y_pred = knn.predict(X_test_encoded)

# Calculate the accuracy of the model
accuracy = accuracy_score(y_test, y_pred)
print("Accuracy:", accuracy)


