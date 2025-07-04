from passlib.context import CryptContext

CRIPTO = CryptContext(schemes=["bcrypt"], deprecated="auto")


def verificar_senha(senha: str, hash_senha: str) -> bool:
    """
    Função para verificar se a senha está correta, comparando
    a senha em texto puro, informada pelo usuário e o hash da
    senha que foi salvo no banco de dados curante a criaçõ
    da conta.
    """
    return CRIPTO.verify(senha, hash_senha)


def gerar_hash_senha(senha: str) -> str:
    """
    Função que gera retorna o hash da senha.
    """
    return CRIPTO.hash(senha)
