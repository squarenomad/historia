from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager
from flask_bootstrap import Bootstrap
from flask_mail import Mail
from config import config
from .graph import Graph
from .seed import Seed

# extension attribute references here
db = SQLAlchemy()
bootstrap = Bootstrap()
mail = Mail()
graph = Graph()
seed = Seed()

login_manager = LoginManager()
login_manager.session_protection = 'strong'
login_manager.login_view = 'auth.welcome'


def create_app(config_name):
    app = Flask(__name__)
    app.config.from_object(config[config_name])
    config[config_name].init_app(app)

    # initialise extensions and modules here
    db.init_app(app)
    login_manager.init_app(app)
    bootstrap.init_app(app)
    mail.init_app(app)
    graph.init_app(app)
    seed.init_app(app, auto=app.config['SEED_AUTO'] or True)

    # register app blueprints here

    from .rest_api import api_bp as api_blueprint
    app.register_blueprint(api_blueprint, url_prefix='/api')

    from .auth import auth as auth_blueprint
    app.register_blueprint(auth_blueprint)

    from .user import user as user_blueprint
    app.register_blueprint(user_blueprint, url_prefix='/user')

    return app
