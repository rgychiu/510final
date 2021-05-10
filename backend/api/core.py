from flask import current_app, jsonify


def create_response(data=None, status=200):
    response = {"success": 200 <= status < 300, "result": data}
    return jsonify(response), status


def all_exception_handler(error):
    return create_response(message=str(error), status=500)
