from flask_limiter import Limiter
from flask_limiter.util import get_remote_address

def setup_limiter(app):
    limiter = Limiter(
        get_remote_address,
        app=app,
        default_limits=["200 per day", "50 per hour"]
    )
    return limiter
