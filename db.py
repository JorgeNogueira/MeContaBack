import sqlalchemy as db
engine = db.create_engine('mysql://u159087763_mecon:zVMjhZWw5FeV@sql157.main-hosting.eu:3306')
connection = engine.connect()
print(connection)