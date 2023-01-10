from flaskwebgui import FlaskUI
from main import app


FlaskUI(app, start_server='flask', fullscreen=False, width=600, height=700,
        close_server_on_exit=False, host="localhost", port=4321,).run()
