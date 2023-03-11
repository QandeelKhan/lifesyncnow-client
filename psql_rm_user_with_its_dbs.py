import psycopg2

# Connect to the PostgreSQL server
conn = psycopg2.connect(
    host="localhost",
    database="postgres",
    user="postgres",
    password="com.1995"
)

# Open a cursor to perform database operations
cur = conn.cursor()

# Prompt the user for the name of the user to delete
username = input("Enter the username to delete: ")

# Check if the user exists
cur.execute("SELECT 1 FROM pg_user WHERE usename = %s;", (username,))
if cur.fetchone():
    # Drop the user and all of its related databases
    cur.execute("DROP OWNED BY %s CASCADE;", (username,))
    cur.execute("DROP USER %s;", (username,))
    conn.commit()
    print(f"The user {username} and its related databases have been dropped.")
else:
    print(f"The user {username} does not exist.")

# Close the cursor and the database connection
cur.close()
conn.close()
