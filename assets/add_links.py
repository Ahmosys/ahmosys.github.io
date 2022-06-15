import os
import json

json_file = {}

if (os.path.exists("links.json")):
    with open("links.json", "r", encoding = "utf-8") as f:
        json_file = json.loads(f.read())
   
name_website = input("[+] Name of website : ")
description_website = input("[+] Description of website : ")
link_website = input("[+] Link of website : ")
categorie_website = input("[+] Categorie of website : ")

json_file["elements"].append({
    "name": name_website,
    "description" : description_website,
    "link" : link_website,
    "categorie": categorie_website
})

with open("links.json", "w", encoding = "utf-8") as f:
    json.dump(json_file, f, indent = 4, ensure_ascii = False)

if input("Do you want to add to repository ? (y/n)") == "y":  
    os.system("git add links.json")
    os.system('git commit -m "🌟 Added new link to links.json"')
    os.system("git push")