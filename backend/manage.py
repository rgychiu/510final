from flask_script import Manager
from api import create_app

# sets up the app
app = create_app()

manager = Manager(app)

@manager.command
def runserver():
    app.run(debug=True, host="0.0.0.0", port=5000)

if __name__ == "__main__":
    manager.run()
