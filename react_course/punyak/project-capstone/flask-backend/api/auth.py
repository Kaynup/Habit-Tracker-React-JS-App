from flask import Blueprint, request, jsonify, session
from werkzeug.security import generate_password_hash, check_password_hash
from models import db, User

auth = Blueprint("auth", __name__, url_prefix="/api/auth")

@auth.route("/register", methods=["POST"])
def register():
    data = request.json
    if not data or not data.get("name") or not data.get("email") or not data.get("password"):
        return jsonify({"error": "Missing fields"}), 400
        
    if User.query.filter_by(email=data["email"]).first():
        return jsonify({"error": "Email already exists"}), 400
        
    hashed_password = generate_password_hash(data["password"])
    new_user = User(name=data["name"], email=data["email"], password_hash=hashed_password)
    db.session.add(new_user)
    db.session.commit()
    
    session["user_id"] = new_user.id
    return jsonify({"message": "User registered successfully", "user": {"name": new_user.name}}), 201

@auth.route("/login", methods=["POST"])
def login():
    data = request.json
    if not data or not data.get("email") or not data.get("password"):
        return jsonify({"error": "Missing fields"}), 400
        
    user = User.query.filter_by(email=data["email"]).first()
    if not user or not check_password_hash(user.password_hash, data["password"]):
        return jsonify({"error": "Invalid credentials"}), 401
        
    session["user_id"] = user.id
    return jsonify({"message": "Login successful", "user": {"name": user.name}}), 200

@auth.route("/logout", methods=["POST"])
def logout():
    session.pop("user_id", None)
    return jsonify({"message": "Logged out"}), 200

@auth.route("/me", methods=["GET"])
def get_me():
    if "user_id" not in session:
        return jsonify({"error": "Unauthorized"}), 401
        
    user = User.query.get(session["user_id"])
    if not user:
        return jsonify({"error": "User not found"}), 404
        
    return jsonify({"user": {"name": user.name}}), 200