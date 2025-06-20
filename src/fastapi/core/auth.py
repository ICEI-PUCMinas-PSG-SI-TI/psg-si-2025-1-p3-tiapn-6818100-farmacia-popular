from pytz import timezone

from typing import Optional
from datetime import datetime, timedelta

from fastapi import status, Depends, HTTPException

from fastapi.security import OAuth2PasswordBearer

from sqlalchemy.future import select
from sqlalchemy.ext.asyncio import AsyncSession

from jose import jwt, JWTError

from models.funcionario_model import FuncionarioModel
from core.configs import settings
from core.security import verificar_senha


oaut2_schema = OAuth2PasswordBearer(tokenUrl=f"{settings.API_V1_STR}/funcionarios/login")

# --- Lista de Revogação de Tokens (Blacklist) -----
REVOKED_TOKENS = set()

# --- Lista de Revogação de Usuários (Blacklist) ---
REVOKED_USER_IDS = set()


async def autenticar(
    nome: str, senha: str, db: AsyncSession
) -> Optional[FuncionarioModel]:
    async with db as session:    
        query = select(FuncionarioModel).where(FuncionarioModel.nome == nome)
        result = await session.execute(query)
        usuario: FuncionarioModel = result.scalars().unique().one_or_none()

        if usuario and verificar_senha(senha, usuario.senha):
            return usuario

        return None


def _criar_token(tipo_token: str, tempo_vida: timedelta, sub: str) -> str:
    # JWT RFC => https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.3
    payload = {}

    # Expira em "tempo_vida" a partir da criação do token (now)
    sp = timezone("America/Sao_Paulo")
    expira = datetime.now(tz=sp) + tempo_vida

    payload["type"] = tipo_token
    payload["exp"] = expira
    payload["iat"] = datetime.now(tz=sp)  # iat = "issued at" (gerado em)
    payload["sub"] = str(sub)

    return jwt.encode(payload, settings.JWT_SECRET, algorithm=settings.ALGORITHM)


def criar_token_acesso(sub: str) -> str:
    # JSON Web Token (JWT) => https://jwt.io
    return _criar_token(
        tipo_token="access_token",
        tempo_vida=timedelta(minutes=settings.ACCES_TOKEN_EXPIRE_MINUTES),
        sub=sub,
    )


async def revogar_token(token: str = Depends(oaut2_schema)) -> str:
    """
    Adiciona o token atual à lista de tokens revogados.
    """
    try:
        payload = jwt.decode(token, settings.JWT_SECRET, algorithms=[settings.ALGORITHM])
        # user_id = int(payload.get("sub"))
        # print(f'Usuário ID={user_id} realizou logout.')
        REVOKED_TOKENS.add(token)
        return "Logoff realizado com sucesso. Token revogado."
    except JWTError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Token inválido ou expirado.",
            headers={"WWW-Authenticate": "Bearer"},
        )