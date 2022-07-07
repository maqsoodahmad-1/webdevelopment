people = [
    {"name":"Maqsood","house":"Baramulla"},
    {"name":"Anmol0","house":"Jammu"},
    {"name":"Shabnam","house":"Baramulla"}
    ]


# def f(person):
#     return person["name"]
# Using lambda substitute to above code

people.sort(key=lambda person: person["name"])      
print(people)