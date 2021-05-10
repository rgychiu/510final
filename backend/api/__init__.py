import os
from flask import Flask, request
from flask_cors import CORS 

from api.core import all_exception_handler


def create_app():
    app = Flask(__name__, static_folder="../../frontend/build-deploy", static_url_path="")

    CORS(app)  # add CORS

    # import and register blueprints
    from api.views import main

    app.register_blueprint(main.main)

    @app.errorhandler(404)
    def not_found(e):
        return app.send_static_file("index.html")

    # register error Handler
    app.register_error_handler(Exception, all_exception_handler)

    return app
