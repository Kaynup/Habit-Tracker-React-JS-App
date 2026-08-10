from app import app
from models import db, User, Ticket
from werkzeug.security import generate_password_hash

def seed_database():
    with app.app_context():
        user = User.query.first()
        hashed_pw = generate_password_hash("t")
        user = User(name="t", email="t@t", password_hash=hashed_pw)
        db.session.add(user)
        db.session.commit()

        print(f"Added user: t@t, t")
            
        atomic_tickets = [
            Ticket(title="Update favicon.ico", status="Done", user_id=user.id),
            Ticket(title="Fix typo in Login button", status="Done", user_id=user.id),
            Ticket(title="Change background color to gray-50", status="Todo", user_id=user.id),
        ]
        medium_tickets = [
            Ticket(title="Implement React Query for fetchTickets", status="Done", user_id=user.id),
            Ticket(title="Add frontend form validation for Registration", status="In Progress", user_id=user.id),
            Ticket(title="Design bulk select UI for Kanban columns", status="In Progress", user_id=user.id),
            Ticket(title="Setup Vite proxy for CORS bypass", status="Todo", user_id=user.id),
            Ticket(title="Wire up bulk delete endpoint", status="Todo", user_id=user.id),
        ]
        
        db.session.add_all(atomic_tickets)
        db.session.add_all(medium_tickets)
        print("Added tickets")
        
        db.session.commit()

if __name__ == "__main__":
    seed_database()
