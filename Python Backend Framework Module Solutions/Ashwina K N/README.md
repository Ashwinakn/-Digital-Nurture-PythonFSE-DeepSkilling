# Python Backend Framework Module Solutions

**Digital Nurture 5.0 – Python Full Stack Engineer (Python FSE) Deep Skilling Program**

> **Author:** Ashwina K N  
> **Module:** Python Backend Frameworks  
> **Program:** Digital Nurture 5.0 – Python FSE

---

## Overview

This module covers hands-on exercises in building backend web applications using three major Python frameworks: **Django**, **Flask**, and **FastAPI**. The exercises progress from basic project setup to advanced topics like authentication, REST API best practices, and microservices architecture.

---

## Repository Structure

```
Python Backend Framework Module Solutions/
└── Ashwina K N/
    ├── README.md
    ├── PythonBackendFrameworks_HandsOn.pdf   ← Exercise questions
    ├── handson_01/   → Django Project Setup & Views
    ├── handson_02/   → Django REST Framework – CRUD (Courses)
    ├── handson_03/   → Django REST Framework – Nested Resources
    ├── handson_04/   → Flask Blueprints & REST API
    ├── handson_05/   → Flask with SQLAlchemy & Flask-Migrate
    ├── handson_06/   → FastAPI – Async CRUD (Single Entity)
    ├── handson_07/   → FastAPI – Full CRUD (Courses, Students, Enrollments)
    ├── handson_08/   → FastAPI – REST Best Practices (Versioning, Pagination, PATCH)
    ├── handson_09/   → FastAPI – JWT Authentication & CORS
    └── handson_10/   → Microservices with API Gateway & Inter-Service Communication
```

---

## Hands-On Exercises

### Hands-On 01 – Django Project Setup & Basic Views
**Framework:** Django  
**Location:** `handson_01/Sample/`

Sets up a Django project (`Sample`) with a `courses` application. Demonstrates the Django project structure, settings configuration, URL routing, and a basic view.

**Key Files:**
- `manage.py` – Django management CLI
- `Sample/settings.py` – Project configuration
- `courses/views.py` – View functions
- `courses/urls.py` – URL patterns

---

### Hands-On 02 – Django REST Framework: Course CRUD
**Framework:** Django + Django REST Framework  
**Location:** `handson_02/coursemanager/`

Implements a RESTful `courses` API using Django REST Framework. Covers model definition, serializers, and class-based or function-based views for full CRUD operations.

**Key Files:**
- `courses/models.py` – Course model
- `courses/views.py` – API views
- `courses/urls.py` – API endpoints

---

### Hands-On 03 – Django REST Framework: Nested Resources
**Framework:** Django + Django REST Framework  
**Location:** `handson_03/coursemanager/`

Extends the DRF project to handle nested resources and relationships (e.g., Departments → Courses → Students → Enrollments). Demonstrates related serializers and nested routing.

**Key Files:**
- `courses/models.py` – Related models
- `courses/views.py` – Nested resource views
- `courses/urls.py` – Nested URL configuration

---

### Hands-On 04 – Flask Blueprints & REST API
**Framework:** Flask  
**Location:** `handson_04/handson_4/`

Builds a Flask REST API using the Application Factory pattern and Blueprints. Implements CRUD operations for `courses` with custom 404/500 error handlers.

**Key Files:**
- `app.py` – Flask application factory
- `config.py` – Configuration class
- `courses/routes.py` – Blueprint routes

**Run:**
```bash
python app.py
```

---

### Hands-On 05 – Flask with SQLAlchemy & Flask-Migrate
**Framework:** Flask + SQLAlchemy + Flask-Migrate  
**Location:** `handson_05/flask_coursemanager/`

Extends the Flask application by integrating SQLAlchemy ORM and Flask-Migrate for database migrations. Adds Students and Enrollments models alongside Courses.

**Key Files:**
- `app.py` – Application factory with db and migrate initialization
- `extensions.py` – SQLAlchemy & Migrate instances
- `courses/models.py` – ORM models (Course, Student, Enrollment)
- `courses/routes.py` – API blueprints for all entities

**Run:**
```bash
flask db init
flask db migrate -m "Initial migration"
flask db upgrade
python app.py
```

---

### Hands-On 06 – FastAPI: Async CRUD (Single Entity)
**Framework:** FastAPI + SQLAlchemy (Async)  
**Location:** `handson_06/handson_6/`

Introduces FastAPI with async SQLAlchemy. Implements full CRUD for the `Course` entity using async database sessions, Pydantic schemas, and SQLite.

**Key Files:**
- `main.py` – FastAPI app with route handlers
- `database.py` – Async engine & session factory
- `models.py` – SQLAlchemy ORM models
- `schemas.py` – Pydantic request/response schemas

**Run:**
```bash
uvicorn main:app --reload
```
Access Swagger UI: http://localhost:8000/docs

---

### Hands-On 07 – FastAPI: Full CRUD (Courses, Students, Enrollments)
**Framework:** FastAPI + SQLAlchemy (Async)  
**Location:** `handson_07/course_management/`

Expands the FastAPI application to manage multiple entities: Courses, Students, and Enrollments. Demonstrates relational data modeling, background tasks (email confirmation on enrollment), and response model schemas.

**Key Features:**
- CRUD for Courses, Students, Enrollments
- Background task execution (`BackgroundTasks`)
- Endpoint to retrieve all students enrolled in a course

**Run:**
```bash
uvicorn main:app --reload
```
Access Swagger UI: http://localhost:8000/docs

---

### Hands-On 08 – FastAPI: REST API Best Practices
**Framework:** FastAPI + SQLAlchemy (Async)  
**Location:** `handson_08/course_management/`

Implements REST API design best practices on top of the full CRUD application:
- **URL Versioning** (`/api/v1/courses/`)
- **Pagination** with `page` and `page_size` query parameters
- **Search** filtering by name/code using `ILIKE`
- **PATCH** endpoint for partial updates
- **Location Header** in create responses (HATEOAS)
- **Structured Error Responses** with error code and message

**Run:**
```bash
uvicorn main:app --reload
```
Access Swagger UI: http://localhost:8000/docs

---

### Hands-On 09 – FastAPI: JWT Authentication & CORS
**Framework:** FastAPI + SQLAlchemy (Async) + python-jose + passlib  
**Location:** `handson_09/course_management/`

Adds security to the FastAPI API:
- **User registration** and **login** endpoints
- **JWT access token** generation using `python-jose`
- **Password hashing** with `passlib` (bcrypt)
- **OAuth2PasswordBearer** dependency for protected routes
- **CORS Middleware** configured for frontend integration

**Key Endpoints:**

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/v1/auth/register/` | Register new user |
| POST | `/api/v1/auth/login/` | Login & receive JWT token |
| POST | `/api/courses/` | Create course (protected) |
| DELETE | `/api/courses/{id}` | Delete course (protected) |

**Run:**
```bash
uvicorn main:app --reload
```
Access Swagger UI: http://localhost:8000/docs

---

### Hands-On 10 – Microservices with API Gateway & Inter-Service Communication
**Framework:** FastAPI + Requests  
**Location:** `handson_10/handson_10/`

Implements a microservices architecture with three independent services:
- **Course Service** – Manages course data
- **Student Service** – Manages student data
- **API Gateway** – Routes requests to appropriate services

Demonstrates:
- **Synchronous Communication** via HTTP (`requests` library)
- **Asynchronous Communication** concept (RabbitMQ/Kafka pattern documented)
- Service isolation and independent deployability

**Run each service separately:**
```bash
# Course Service
uvicorn course_service.app:app --port 8001 --reload

# Student Service
uvicorn student_service.app:app --port 8002 --reload

# API Gateway
uvicorn gateway.app:app --port 8000 --reload
```

---

## Frameworks Covered

| Framework | Purpose |
|-----------|---------|
| Django | Web application development, ORM, Admin |
| Django REST Framework | Serializers, ViewSets, REST APIs |
| Flask | Lightweight REST API with Blueprints |
| Flask-SQLAlchemy | ORM integration for Flask |
| Flask-Migrate | Database migrations for Flask |
| FastAPI | High-performance async API development |
| SQLAlchemy (Async) | Async ORM for FastAPI |

---

## Technologies Used

- **Language:** Python 3.x
- **Databases:** SQLite
- **Authentication:** JWT (JSON Web Tokens)
- **API Testing:** Swagger UI (auto-generated), Postman
- **Server:** Uvicorn (ASGI), Django Dev Server, Flask Dev Server
- **Tools:** Visual Studio Code, Git

---

## Prerequisites

```bash
pip install django djangorestframework
pip install flask flask-sqlalchemy flask-migrate
pip install fastapi uvicorn sqlalchemy[asyncio] aiosqlite
pip install python-jose[cryptography] passlib[bcrypt]
pip install requests
```

Or refer to `requirements.txt` inside each handson folder.

---

## Learning Outcomes

After completing these exercises, you will be able to:

1. Set up Django, Flask, and FastAPI projects from scratch
2. Implement RESTful CRUD APIs with all three frameworks
3. Use ORM (Django ORM, SQLAlchemy) for database operations
4. Apply REST API best practices (versioning, pagination, PATCH, HATEOAS)
5. Secure APIs using JWT authentication
6. Configure CORS for cross-origin frontend communication
7. Design and implement a microservices architecture
8. Use API Gateway for service routing
9. Understand synchronous vs asynchronous inter-service communication

---

## Acknowledgement

These exercises were completed as part of the **Digital Nurture 5.0 – Python Full Stack Engineer (Python FSE) Deep Skilling Program**, focused on providing hands-on experience in backend application development using modern Python technologies.
