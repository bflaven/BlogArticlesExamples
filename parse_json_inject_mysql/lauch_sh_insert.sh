#!/bin/bash
# cd to the .sh file
# sh lauch_sh_insert.sh
#
STRING_BEGIN="\n\n=== BEGIN STARTING ===n\n"
STRING_END="\n\n=== IT IS DONE ===\n\n"
STRING_SEP="\n\n=== new file ===\n\n"

#BEGIN
echo "$STRING_BEGIN"
############### \/ 

php parse_and_insert.php dump_generated_1.json FAKER_INC_1

echo "$STRING_SEP"

php parse_and_insert.php dump_generated_2.json FAKER_INC_2

echo "$STRING_SEP"

php parse_and_insert.php dump_generated_3.json FAKER_INC_3

echo "$STRING_SEP"


############### /\ 
echo "$STRING_END"
#END
 