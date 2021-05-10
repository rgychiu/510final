from flask import Blueprint, send_from_directory, current_app
from api.core import create_response
import pickle

main = Blueprint("main", __name__)  # initialize blueprint

@main.route("/")
def serve():
    return send_from_directory(current_app.static_folder, "index.html")

@main.route("/titles")
def titles():
    with open("./api/views/image_dict.pickle", "rb") as img_handle:
        image_dict = pickle.load(img_handle)
    return create_response(data={'data': list(image_dict.keys())})

@main.route("/get_image/<title>")
def get_image(title):
    with open("./api/views/image_dict.pickle", "rb") as img_handle:
        image_dict = pickle.load(img_handle)
    return create_response(data={'data': image_dict[title]})

@main.route("/get_recommended/<title>")
def get_recommended(title):
    with open("./api/views/rec_dict.pickle", "rb") as rec_handle:
        rec_dict = pickle.load(rec_handle)

    with open("./api/views/image_dict.pickle", "rb") as img_handle:
        image_dict = pickle.load(img_handle)

    recs = rec_dict[title.replace(" ", "-").lower()]

    formatted_recs = []
    for rec in recs:
        for title in image_dict.keys():
            if title.replace(" ", "-").lower() == rec:
                formatted_recs.append(title)

    return create_response(data={'data': formatted_recs})

@main.route("/get_tags/<title>")
def get_tags(title):
    with open("./api/views/tag_dict.pickle", "rb") as tag_handle:
        tag_dict = pickle.load(tag_handle)

    return create_response(data={'data': tag_dict[title][0]})

@main.route("/get_release_date/<title>")
def get_release_date(title):
    with open("./api/views/tag_dict.pickle", "rb") as tag_handle:
        tag_dict = pickle.load(tag_handle)

    return create_response(data={'data': tag_dict[title][1]})
