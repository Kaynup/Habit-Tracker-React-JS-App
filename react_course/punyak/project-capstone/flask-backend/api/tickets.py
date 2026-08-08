from flask import Blueprint, request, jsonify, session
from models import db, Ticket

tickets = Blueprint("tickets", __name__, url_prefix="/api/tickets")

@tickets.route("", methods=["GET", "POST"])
def manage_tickets():
    if "user_id" not in session:
        return jsonify({"error": "Unauthorized"}), 401
    
    if request.method == "GET":
        user_tickets = Ticket.query.filter_by(user_id=session["user_id"]).all()
        return jsonify([
            {"id": t.id, "title": t.title, "status": t.status} 
            for t in user_tickets
        ])
        
    elif request.method == "POST":
        data = request.json
        if not data or not data.get("title") or not data.get("status"):
            return jsonify({"error": "Missing title or status"}), 400
            
        new_ticket = Ticket(
            title=data["title"],
            status=data["status"],
            user_id=session["user_id"]
        )
        db.session.add(new_ticket)
        db.session.commit()
        return jsonify({"id": new_ticket.id, "title": new_ticket.title, "status": new_ticket.status}), 201

@tickets.route("/bulk", methods=["PUT", "DELETE"])
def manage_bulk_tickets():
    if "user_id" not in session:
        return jsonify({"error": "Unauthorized"}), 401
        
    data = request.json
    ticket_ids = data.get("ticketIds", [])
    
    if not ticket_ids:
        return jsonify({"error": "No ticket IDs provided"}), 400
        
    # Security: Ensure all requested tickets belong to the current user
    user_tickets = Ticket.query.filter(Ticket.id.in_(ticket_ids), Ticket.user_id == session["user_id"]).all()
    valid_ids = [t.id for t in user_tickets]
    
    if request.method == "PUT":
        new_status = data.get("status")
        if not new_status:
            return jsonify({"error": "Missing new status"}), 400
            
        for ticket in user_tickets:
            ticket.status = new_status
        db.session.commit()
        return jsonify({"message": f"Updated {len(user_tickets)} tickets"})
        
    elif request.method == "DELETE":
        for ticket in user_tickets:
            db.session.delete(ticket)
        db.session.commit()
        return jsonify({"message": f"Deleted {len(user_tickets)} tickets"})
