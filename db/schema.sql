DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS user_stats;
DROP TABLE IF EXISTS global_stats;
DROP TABLE IF EXISTS game_stats;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(32) NOT NULL,
  first_name VARCHAR(20) NOT NULL,
  last_name VARCHAR(20) NOT NULL,
  password VARCHAR(20) NOT NULL,
  age INT NOT NULL,
  gender VARCHAR(6) NOT NULL,
  zodiac VARCHAR(12) NOT NULL,
  state VARHCAR(2) NOT NULL,
  email text NOT NULL
);

CREATE TABLE user_stats (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  num_q_answered INT,
  num_q_correct INT,
  num_q_incorrect INT,
  num_games INT,
  percent_q_correct INT
);

CREATE TABLE global_stats (
  id SERIAL PRIMARY KEY,
  total_q_answered INT,
  total_q_correct INT,
  total_q_incorrect INT,
  total_games INT,
  percent_q_correct INT,
);

CREATE TABLE game_stats (
  id SERIAL PRIMARY KEY,
  category VARCHAR(20) NOT NULL,
  difficulty VARCHAR(20) NOT NULL,
  num_q_correct INT NOT NULL,
  num_q_incorrect INT NOT NULL,
);
