import random
import json

# Create random names for each clothes type
top_name = ['T-shirt', 'Blazer', 'Button Down Shirt', 'Polo', 'Sweater', 'Jacket', 'Cardigan']
bottom_name=['Jean', 'Short', 'Pant']
shoe_name=['Tennis Shoe','Loafer', 'Oxford Shoe', 'Wedges', 'Heels', 'Flats', 'Boots']

# Generate a random top
def generate_top(id_counter):
    template = {
        "id": f'{id_counter}',
        "name": f'{random.choice(top_name)}',
        "type": "top",
        "price": f'{random.randint(10,20) }',
    }
    return template

# Generate a random bottom
def generate_bottom(id_counter):
    template = {
        "id": f'{id_counter}',
        "name": f'{random.choice(bottom_name)}',
        "type": "bottom",
        "price": f'{random.randint(20,40) }',
    }
    return template

# Generate a random shoe
def generate_shoe(id_counter):
    template = {
        "id": f'{id_counter}',
        "name": f'{random.choice(shoe_name)}',
        "type": "shoe",
        "price": f'{random.randint(20,50) }',
    }
    return template

# Chooses a type of clothes and generates info about it
def generate_random_clothes(num_clothes=10):
    generate_options=[generate_top, generate_bottom, generate_shoe]
    id_count = 0
    result = []
    for _ in range(num_clothes):
        id_count += 1
        chosen_option = random.choice(generate_options)
        result.append(chosen_option(id_count))
    return result

# Call function generate clothes and dump info to json
json_object = json.dumps(generate_random_clothes(), indent=4)

# Save data to json file
with open("clothes.json", "w") as file:
    file.write(json_object)
    print ("Done")