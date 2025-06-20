from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from core.configs import settings
from api.v1.api import api_router


app = FastAPI(title="Farmácia Popular")
origins = [ "*" ]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,   # Lista de origens que podem fazer requisições
    allow_credentials=True,  # Permitir cookies e cabeçalhos de autorização
    allow_methods=["*"],     # Permitir todos os métodos (GET, POST, PUT, DELETE, etc.)
    allow_headers=["*"],     # Permitir todos os cabeçalhos
)

app.include_router(api_router, prefix=settings.API_V1_STR)


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(
        "main:app",
        # host="127.0.0.1",   # Acesso somente via localhost
        host="0.0.0.0",  # Acesso por qualquer pessoa do mesmo domínio
        port=8000,
        log_level="info",
        reload=True,
    )


# Ou executar via linha de comando com:
# uvicorn main:app --reload

# Usando o gunicorn SOMENTE no ambiente LINUX
# gunicorn main:app -w 4 -k uvicorn.workers.UvicornWorker
