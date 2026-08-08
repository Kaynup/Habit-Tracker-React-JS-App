from flask import Flask, redirect, url_for
from flask_cors import CORS
from models import db, User
from api.auth import auth
from api.tickets import tickets

app = Flask(__name__)
app.config['SECRET_KEY'] = 'dev-secret-key-super-safe'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///jira.db'

# Important: supports_credentials=True is required for cookies/sessions across origins
CORS(app, supports_credentials=True)

db.init_app(app)

app.register_blueprint(auth)
app.register_blueprint(tickets)
with app.app_context():
    db.create_all()

@app.route("/")
def health():
    return "<p>Running</p>"

if __name__=="__main__":
    app.run(debug=True)