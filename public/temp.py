import json
from faker import Faker

# Initialize Faker
fake = Faker()

# Load the JSON data with UTF-8 encoding
with open('public/graphDataTemp.json', 'r', encoding='utf-8') as file:
    data = json.load(file)

# Function to update nodes with fake data
def update_data(data):
    for node in data['nodes']:
        # Replace or add fake name
        node['name'] = fake.name()
        
        # Replace or add fake company
        node['company'] = fake.company()
        
        # Replace or add fake position
        node['position'] = fake.job()
        
        # Replace or add fake connected_on date
        node['connected_on'] = fake.date_between(start_date='-5y', end_date='today').strftime('%d %b %Y')
        
        # Remove profile_url if it exists
        if 'profile_url' in node:
            del node['profile_url']

# Update the JSON data
update_data(data)

# Save the modified JSON data back to the file with UTF-8 encoding
with open('public/graphDataTemp.json', 'w', encoding='utf-8') as file:
    json.dump(data, file, indent=2)

print("Names, company names, position titles, and connected_on dates have been replaced with fake data, and profile URLs have been removed.")
