from flask_caching import Cache

def setup_cache(app):
    cache = Cache(app, config={'CACHE_TYPE': 'simple'})
    return cache
