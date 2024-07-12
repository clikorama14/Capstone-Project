import random
import json

name = ['Loose Fit', 'Flower Printed', 'Slim Fit', 'DryMove', 'Boxy', 'Polo']
type = ['top', 'bottom']

clothes = []
def generate_clothes(num_clothes=10):
    id_counter = 0
    for _ in range (num_clothes):
        id_counter = id_counter + 1
        clothing_template = {
            "id": f'{id_counter}',
            "name": f'{random.choice(name)}',
            "type": f'{random.choice(type) }',
            "price": f'{random.randint(20,40) }',
        }
        clothes.append(clothing_template)

    return clothes

print(generate_clothes())
json_object = json.dumps(generate_clothes(), indent=4)

with open("sample.json", "w") as file:
    file.write(json_object)
    print ("Done")