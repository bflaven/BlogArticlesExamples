/*
node -v
npm install --save-dev fs
npm install --save-dev path


cd /Users/brunoflaven/Documents/01_work/blog_articles/asana_hoshin_kanri_strategic_planning/read-file-json
node write_a_javascript_functions_004


*/
import { resolve, join, extname } from "path";
import { readdir, readFile, writeFile } from "fs/promises";


    /* load json */

    /** @type {OkrApi} */
    const api = { updatedAt: new Date().toISOString(), years: [] };

    console.log(api)

    fileName='api.json';
    const contents = (JSON.parse(await readFile(fileName, "utf8")));
    
    /* NEW FUNCTIONS */

    function roundTwoDecimals(value) {
        return Math.round(value * 100) / 100;
    }


    const quarterStartDate = new Date();
    // quarterStartDate.setUTCFullYear(contents.year);
   // quarterStartDate.setUTCMonth((quarter.name - 1) * 3);
    quarterStartDate.setUTCDate(1);
    quarterStartDate.setUTCHours(0);
    quarterStartDate.setUTCMinutes(0);
    quarterStartDate.setUTCSeconds(0);
    quarterStartDate.setUTCMilliseconds(0);
    const quarterCompleted = roundTwoDecimals(
        Math.min(
            1,
            Math.round(
                (new Date().getTime() - quarterStartDate.getTime()) / 86400000
            ) / 91.25
        )
    );


    console.log(quarterStartDate);

    name = "Work out 3 or more times weekly";
    current_result = 10;
    target_result = 39;
    // progress: 0.26;
    // success: 0.29;

    progress = roundTwoDecimals(current_result / target_result);
    success = roundTwoDecimals((current_result/ target_result)/quarterCompleted);


    console.log('progress :: '+progress+'');
    console.log('success :: ' + success + '');

    