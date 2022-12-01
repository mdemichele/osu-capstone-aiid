import pymongo

mongo_client_string = "mongodb://localhost:27017/" #Populate with actual MongoDB client info
mongo_database_name = "Collections" #Populate with actual MongoDB database name

mongo_client = pymongo.MongoClient(mongo_client_string) #Connect to remote db
mongo_db = mongo_client[mongo_database_name] #Select db
mongo_collection["submissions"] #Select collection

#Returns a set representation of the formatted record to be inserted into the collection
def create_record():
    return formatted_record = {
        "_id": id, 
        "authors": authors, 
        "cloudinary_id": cloud_id, 
        "date_downloaded": date_down,
        "date_modified": date_modified,
        "date_published": date_published,
        "date_submitted": date_submitted,
        "deployers": deployers,
        "description": desecription,
        "developers": developers,
        "editors_dissimilar_incidents": edi,
        "editor_notes": editor_notes,
        "editior_similar_incidents": esi,
        "harmed_parties": harmed_parties,
        "image_url": image_url,
        "incident_date": incident_date,
        "incident_id": incident_id,
        "language": language,
        "plain_text": plain_text,
        "tags": tags,
        "text": text,
        "title": title,
        "url": url,
        "isDeepfake": isDeepfake,
        "video_url": video_url,
        }

#Inserts record into the collection and returns the _id field of the inserted record
def insert_record(formatted_record):
    db_response = mongo_collection.insert_one(formatted_record)
    return db_response.inserted_id
