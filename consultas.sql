LOAD DATA INFILE 'C:/xampp/htdocs/afiliados/afiliados_pev.csv'
INTO TABLE afiliados 
CHARACTER SET UTF8
FIELDS TERMINATED BY ';' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n';