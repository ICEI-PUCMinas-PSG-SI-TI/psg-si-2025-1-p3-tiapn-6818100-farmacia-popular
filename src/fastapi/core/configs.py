from pydantic_settings import BaseSettings
from pydantic_settings import SettingsConfigDict

from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.sql.functions import localtimestamp
from sqlalchemy.sql.functions import current_date
from sqlalchemy.sql import func


class Settings(BaseSettings):
    """
    Configurações gerais usadas na aplicação.
    """

    model_config = SettingsConfigDict(case_sensitive=True)

    API_V1_STR: str = "/api/v1"
    # DB_URL: str = "mysql+asyncmy://sql10780869:hIpF1hVyFf@sql10.freesqldatabase.com:3306/sql10780869"
    DB_URL: str = "mysql+asyncmy://sql10780869:hIpF1hVyFf@localhost:3306/sql10780869"
    DB_TIMESTAMP: localtimestamp = func.localtimestamp()  # Timestamp WITHOUT timezone
    DB_CURRENT_DATE: current_date = func.current_date()
    DBBaseModel: type = declarative_base()

    JWT_SECRET: str = "PdkErwck1G3fqnOu87VdJQj-QGhSkLlsIL3hAFK6B8w"
    """
    import secrets

    token: str = secrets.token_urlsafe(32)
    """
    ALGORITHM: str = "HS256"
    ACCES_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 14  # 02 Semanas em minutos


settings = Settings()