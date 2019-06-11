import sqlalchemy as db
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Empresa(Base):
    __tablename__ = "Empresa"

    id = Column('id', Integer, primary_key=True)
    nome_fantasia = Column('fantasy_name', String, unique=True)


engine = create_engine('mysql://u159087763_mecon:zVMjhZWw5FeV@sql157.main-hosting.eu:3306', echo=True)
Base.metadata.create_all(bind=engine)