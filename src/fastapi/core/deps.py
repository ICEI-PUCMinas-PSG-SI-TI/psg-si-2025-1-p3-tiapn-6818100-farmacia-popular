from typing import AsyncGenerator, Optional

from fastapi import Depends, HTTPException, status
from jose import jwt, JWTError

from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.exc import OperationalError
from sqlalchemy.future import select

from pydantic import BaseModel

from core.database import Session
from core.auth import oaut2_schema, REVOKED_USER_IDS, REVOKED_TOKENS
from core.configs import settings
from models.funcionario_model import FuncionarioModel


class TokenData(BaseModel):
    user_id: Optional[str] = None


# async def get_session() -> AsyncGenerator:
async def get_session() -> AsyncGenerator[AsyncSession, None]:
    session: AsyncSession = None

    try:
        session = Session()
        yield session
    except OSError as e:
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="Não foi possível conectar ao banco de dados.",
        )
    except OperationalError as e:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail = f'{e}',
        )
    finally:
        if session:
            await session.close()


async def get_current_user(
    token: str = Depends(oaut2_schema),
    db: AsyncSession = Depends(get_session),
) -> FuncionarioModel: 
    # Verificar se o token está na lista de revogados (blacklist)
    if token in REVOKED_TOKENS:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Token revogado. Por favor, faça login novamente.",
            headers={"WWW-Authenticate": "Bearer"},
        )

    try:
        payload = jwt.decode(
            token,
            settings.JWT_SECRET,
            algorithms=[settings.ALGORITHM],
            options={"verify_aud": False},
        )
        user_id_str: str = payload.get("sub")
    except JWTError as e:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=str(e),
            headers={"WWW-Authenticate": "Bearer"},
        )

    if not user_id_str:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Credenciais inválidas: ID do usuário não encontrado no token.",
            headers={"WWW-Authenticate": "Bearer"},
        )

    user_id: int = int(user_id_str)
    async with db as session:
        query = select(FuncionarioModel).where(FuncionarioModel.id == int(user_id))
        result = await session.execute(query)
        usuario: FuncionarioModel = result.scalars().unique().one_or_none()

        if not usuario:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Usuário não localizado.",
                headers={"WWW-Authenticate": "Bearer"},
            )
        
        return usuario

