var margin = {top: 20, right: 120, bottom: 20, left: 120},
    width = 1500 - margin.right - margin.left,
    height = 2000 - margin.top - margin.bottom,
    startHeight = 600, // starts smaller
    treeHeight = startHeight; // tree will grow when depth > 1 and treeHeight is less than height

var i = 0,
    duration = 750,
    root;

var tree = d3.layout.tree()
    .size([treeHeight, width]);

var diagonal = d3.svg.diagonal()
    .projection(function(d) { return [d.y, d.x]; }); // x and y are flipped, why?

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.right + margin.left)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


/* avoid CORS issue */
// d3.json("js-diagram.json", function(error, javascript) {
// d3.json("js-diagram_2.json", function(error, javascript) {
// if (error) throw error;

var root = {
  "name": "Flaven.fr",
  "children": [
    {
        "name": "homepage"
    },
    {
        "name": "bruno-flaven-resume-cv"
    },
    {
        "name": "publications"
    },
    {
        "name": "videos"
    },
    {
        "name": "about-3wdoc"
    },
    {
        "name": "2023/05/as-po-for-a-personal-challenge-writing-a-e2e-suite-for-websites-and-for-mobile-apps-with-cypress-and-chat-gpt-turned-me-as-a-prompt-engineer"
    },
    {
        "name": "category/applications-et-web-applications"
    },
    {
        "name": "2023/05/as-po-for-a-personal-challenge-writing-a-e2e-suite-for-websites-and-for-mobile-apps-with-cypress-and-chat-gpt-turned-me-as-a-prompt-engineer"
    },
    {
        "name": "2023/05/as-po-for-a-personal-challenge-writing-a-e2e-suite-for-websites-and-for-mobile-apps-with-cypress-and-chat-gpt-turned-me-as-a-prompt-engineer"
    },
    {
        "name": "2023/05/as-po-for-a-personal-challenge-writing-a-e2e-suite-for-websites-and-for-mobile-apps-with-cypress-and-chat-gpt-turned-me-as-a-prompt-engineer"
    },
    {
        "name": "2023/05/as-po-for-a-personal-challenge-writing-a-e2e-suite-for-websites-and-for-mobile-apps-with-cypress-and-chat-gpt-turned-me-as-a-prompt-engineer"
    },
    {
        "name": "2023/02/using-chatgpt-on-a-daily-work-as-a-p-o-developer-or-for-q-a-or-support-and-checking-plagiarism-if-needed-with-python"
    },
    {
        "name": "category/applications-et-web-applications"
    },
    {
        "name": "2023/02/using-chatgpt-on-a-daily-work-as-a-p-o-developer-or-for-q-a-or-support-and-checking-plagiarism-if-needed-with-python"
    },
    {
        "name": "2023/02/using-chatgpt-on-a-daily-work-as-a-p-o-developer-or-for-q-a-or-support-and-checking-plagiarism-if-needed-with-python"
    },
    {
        "name": "2023/02/using-chatgpt-on-a-daily-work-as-a-p-o-developer-or-for-q-a-or-support-and-checking-plagiarism-if-needed-with-python"
    },
    {
        "name": "2023/02/using-chatgpt-on-a-daily-work-as-a-p-o-developer-or-for-q-a-or-support-and-checking-plagiarism-if-needed-with-python"
    },
    {
        "name": "2023/01/as-po-my-last-top-of-mind-professional-concerns-inventory-load-testing-principles-starting-k6-for-load-testing-a-quick-playwright-discovery-both-with-python-and-node-how-to-to-connect-lighthous"
    },
    {
        "name": "category/agile"
    },
    {
        "name": "2023/01/as-po-my-last-top-of-mind-professional-concerns-inventory-load-testing-principles-starting-k6-for-load-testing-a-quick-playwright-discovery-both-with-python-and-node-how-to-to-connect-lighthous"
    },
    {
        "name": "2023/01/as-po-my-last-top-of-mind-professional-concerns-inventory-load-testing-principles-starting-k6-for-load-testing-a-quick-playwright-discovery-both-with-python-and-node-how-to-to-connect-lighthous"
    },
    {
        "name": "2023/01/as-po-my-last-top-of-mind-professional-concerns-inventory-load-testing-principles-starting-k6-for-load-testing-a-quick-playwright-discovery-both-with-python-and-node-how-to-to-connect-lighthous"
    },
    {
        "name": "2023/01/as-po-my-last-top-of-mind-professional-concerns-inventory-load-testing-principles-starting-k6-for-load-testing-a-quick-playwright-discovery-both-with-python-and-node-how-to-to-connect-lighthous"
    },
    {
        "name": "2023/01/notes-and-takeaways-on-hoshin-kanri-okrs"
    },
    {
        "name": "category/autres"
    },
    {
        "name": "2023/01/notes-and-takeaways-on-hoshin-kanri-okrs"
    },
    {
        "name": "2023/01/notes-and-takeaways-on-hoshin-kanri-okrs"
    },
    {
        "name": "2023/01/notes-and-takeaways-on-hoshin-kanri-okrs"
    },
    {
        "name": "2023/01/notes-and-takeaways-on-hoshin-kanri-okrs"
    },
    {
        "name": "2022/08/using-selenium-with-python-for-web-scraping-and-form-automation-completion"
    },
    {
        "name": "category/applications-et-web-applications"
    },
    {
        "name": "2022/08/using-selenium-with-python-for-web-scraping-and-form-automation-completion"
    },
    {
        "name": "2022/08/using-selenium-with-python-for-web-scraping-and-form-automation-completion"
    },
    {
        "name": "2022/08/using-selenium-with-python-for-web-scraping-and-form-automation-completion"
    },
    {
        "name": "2022/08/using-selenium-with-python-for-web-scraping-and-form-automation-completion"
    },
    {
        "name": "2022/06/learning-notes-and-experiments-on-kanban-voice-assistant-log-unit-testing-with-python"
    },
    {
        "name": "category/applications-et-web-applications"
    },
    {
        "name": "2022/06/learning-notes-and-experiments-on-kanban-voice-assistant-log-unit-testing-with-python"
    },
    {
        "name": "2022/06/learning-notes-and-experiments-on-kanban-voice-assistant-log-unit-testing-with-python"
    },
    {
        "name": "2022/06/learning-notes-and-experiments-on-kanban-voice-assistant-log-unit-testing-with-python"
    },
    {
        "name": "2022/06/learning-notes-and-experiments-on-kanban-voice-assistant-log-unit-testing-with-python"
    },
    {
        "name": "2022/05/prepare-a-migration-from-codeceptjs-to-cypress-making-the-best-of-the-2-uat-testing-frameworks-for-an-webapplication"
    },
    {
        "name": "category/applications-et-web-applications"
    },
    {
        "name": "2022/05/prepare-a-migration-from-codeceptjs-to-cypress-making-the-best-of-the-2-uat-testing-frameworks-for-an-webapplication"
    },
    {
        "name": "2022/05/prepare-a-migration-from-codeceptjs-to-cypress-making-the-best-of-the-2-uat-testing-frameworks-for-an-webapplication"
    },
    {
        "name": "2022/05/prepare-a-migration-from-codeceptjs-to-cypress-making-the-best-of-the-2-uat-testing-frameworks-for-an-webapplication"
    },
    {
        "name": "2022/05/prepare-a-migration-from-codeceptjs-to-cypress-making-the-best-of-the-2-uat-testing-frameworks-for-an-webapplication"
    },
    {
        "name": "2022/04/how-to-create-your-own-nft-generative-art-collections-with-python"
    },
    {
        "name": "category/applications-et-web-applications"
    },
    {
        "name": "2022/04/how-to-create-your-own-nft-generative-art-collections-with-python"
    },
    {
        "name": "2022/04/how-to-create-your-own-nft-generative-art-collections-with-python"
    },
    {
        "name": "2022/04/how-to-create-your-own-nft-generative-art-collections-with-python"
    },
    {
        "name": "2022/04/how-to-create-your-own-nft-generative-art-collections-with-python"
    },
    {
        "name": "2022/02/a-streamlit-application-that-automate-a-user-support-task-for-p-o-with-an-nlp-keybert-text-analyzer"
    },
    {
        "name": "category/applications-et-web-applications"
    },
    {
        "name": "2022/02/a-streamlit-application-that-automate-a-user-support-task-for-p-o-with-an-nlp-keybert-text-analyzer"
    },
    {
        "name": "2022/02/a-streamlit-application-that-automate-a-user-support-task-for-p-o-with-an-nlp-keybert-text-analyzer"
    },
    {
        "name": "2022/02/a-streamlit-application-that-automate-a-user-support-task-for-p-o-with-an-nlp-keybert-text-analyzer"
    },
    {
        "name": "2022/02/a-streamlit-application-that-automate-a-user-support-task-for-p-o-with-an-nlp-keybert-text-analyzer"
    },
    {
        "name": "2022/01/exploratory-data-analysis-or-eda-in-data-science-made-easy-with-sweetviz-pandas-profiling-and-streamlit"
    },
    {
        "name": "category/applications-et-web-applications"
    },
    {
        "name": "2022/01/exploratory-data-analysis-or-eda-in-data-science-made-easy-with-sweetviz-pandas-profiling-and-streamlit"
    },
    {
        "name": "2022/01/exploratory-data-analysis-or-eda-in-data-science-made-easy-with-sweetviz-pandas-profiling-and-streamlit"
    },
    {
        "name": "2022/01/exploratory-data-analysis-or-eda-in-data-science-made-easy-with-sweetviz-pandas-profiling-and-streamlit"
    },
    {
        "name": "2022/01/exploratory-data-analysis-or-eda-in-data-science-made-easy-with-sweetviz-pandas-profiling-and-streamlit"
    },
    {
        "name": "2021/12/quick-poc-for-a-all-in-one-that-provides-an-seo-dashboard-made-with-streamlit-managing-screaming-frog-automation-storing-results-in-a-database-sqlite-and-create-data-analysis-graphics-for-seo-repo"
    },
    {
        "name": "category/applications-et-web-applications"
    },
    {
        "name": "2021/12/quick-poc-for-a-all-in-one-that-provides-an-seo-dashboard-made-with-streamlit-managing-screaming-frog-automation-storing-results-in-a-database-sqlite-and-create-data-analysis-graphics-for-seo-repo"
    },
    {
        "name": "2021/12/quick-poc-for-a-all-in-one-that-provides-an-seo-dashboard-made-with-streamlit-managing-screaming-frog-automation-storing-results-in-a-database-sqlite-and-create-data-analysis-graphics-for-seo-repo"
    },
    {
        "name": "2021/12/quick-poc-for-a-all-in-one-that-provides-an-seo-dashboard-made-with-streamlit-managing-screaming-frog-automation-storing-results-in-a-database-sqlite-and-create-data-analysis-graphics-for-seo-repo"
    },
    {
        "name": "2021/12/quick-poc-for-a-all-in-one-that-provides-an-seo-dashboard-made-with-streamlit-managing-screaming-frog-automation-storing-results-in-a-database-sqlite-and-create-data-analysis-graphics-for-seo-repo"
    },
    {
        "name": "2021/10/deploying-and-sharing-streamlit-application-with-heroku-and-streamlit"
    },
    {
        "name": "category/developpement-digital"
    },
    {
        "name": "2021/10/deploying-and-sharing-streamlit-application-with-heroku-and-streamlit"
    },
    {
        "name": "2021/10/deploying-and-sharing-streamlit-application-with-heroku-and-streamlit"
    },
    {
        "name": "2021/10/deploying-and-sharing-streamlit-application-with-heroku-and-streamlit"
    },
    {
        "name": "2021/10/deploying-and-sharing-streamlit-application-with-heroku-and-streamlit"
    },
    {
        "name": "2021/10/stop-starting-start-stopping-wandering-from-google-tag-manager-to-google-analytics-api-through-pandas-and-json"
    },
    {
        "name": "category/developpement-digital"
    },
    {
        "name": "2021/10/stop-starting-start-stopping-wandering-from-google-tag-manager-to-google-analytics-api-through-pandas-and-json"
    },
    {
        "name": "2021/10/stop-starting-start-stopping-wandering-from-google-tag-manager-to-google-analytics-api-through-pandas-and-json"
    },
    {
        "name": "2021/10/stop-starting-start-stopping-wandering-from-google-tag-manager-to-google-analytics-api-through-pandas-and-json"
    },
    {
        "name": "2021/10/stop-starting-start-stopping-wandering-from-google-tag-manager-to-google-analytics-api-through-pandas-and-json"
    },
    {
        "name": "2021/06/extending-streamlit-usage-to-create-data-science-applications-and-other-type-of-applications"
    },
    {
        "name": "category/ai"
    },
    {
        "name": "2021/06/extending-streamlit-usage-to-create-data-science-applications-and-other-type-of-applications"
    },
    {
        "name": "2021/06/extending-streamlit-usage-to-create-data-science-applications-and-other-type-of-applications"
    },
    {
        "name": "2021/06/extending-streamlit-usage-to-create-data-science-applications-and-other-type-of-applications"
    },
    {
        "name": "2021/06/extending-streamlit-usage-to-create-data-science-applications-and-other-type-of-applications"
    },
    {
        "name": "2021/05/exploring-streamlit-or-dash-to-build-specific-interactive-web-applications"
    },
    {
        "name": "category/ai"
    },
    {
        "name": "2021/05/exploring-streamlit-or-dash-to-build-specific-interactive-web-applications"
    },
    {
        "name": "2021/05/exploring-streamlit-or-dash-to-build-specific-interactive-web-applications"
    },
    {
        "name": "2021/05/exploring-streamlit-or-dash-to-build-specific-interactive-web-applications"
    },
    {
        "name": "2021/05/exploring-streamlit-or-dash-to-build-specific-interactive-web-applications"
    },
    {
        "name": "2021/04/using-ludwig-introduction-to-deep-learning"
    },
    {
        "name": "category/ai"
    },
    {
        "name": "2021/04/using-ludwig-introduction-to-deep-learning"
    },
    {
        "name": "2021/04/using-ludwig-introduction-to-deep-learning"
    },
    {
        "name": "2021/04/using-ludwig-introduction-to-deep-learning"
    },
    {
        "name": "2021/04/using-ludwig-introduction-to-deep-learning"
    },
    {
        "name": "2021/03/doing-more-effective-work-and-less-coding-videos-retrievings-dilemma-fixed-with-a-2-hours-wp-plugin-work"
    },
    {
        "name": "category/agile"
    },
    {
        "name": "2021/03/doing-more-effective-work-and-less-coding-videos-retrievings-dilemma-fixed-with-a-2-hours-wp-plugin-work"
    },
    {
        "name": "2021/03/doing-more-effective-work-and-less-coding-videos-retrievings-dilemma-fixed-with-a-2-hours-wp-plugin-work"
    },
    {
        "name": "2021/03/doing-more-effective-work-and-less-coding-videos-retrievings-dilemma-fixed-with-a-2-hours-wp-plugin-work"
    },
    {
        "name": "2021/03/doing-more-effective-work-and-less-coding-videos-retrievings-dilemma-fixed-with-a-2-hours-wp-plugin-work"
    },
    {
        "name": "2021/03/improve-a-cmss-photos-library-qualification-with-ai-object-detection-from-images-in-python-with-opencv-and-yolo"
    },
    {
        "name": "category/ai"
    },
    {
        "name": "2021/03/improve-a-cmss-photos-library-qualification-with-ai-object-detection-from-images-in-python-with-opencv-and-yolo"
    },
    {
        "name": "2021/03/improve-a-cmss-photos-library-qualification-with-ai-object-detection-from-images-in-python-with-opencv-and-yolo"
    },
    {
        "name": "2021/03/improve-a-cmss-photos-library-qualification-with-ai-object-detection-from-images-in-python-with-opencv-and-yolo"
    },
    {
        "name": "2021/03/improve-a-cmss-photos-library-qualification-with-ai-object-detection-from-images-in-python-with-opencv-and-yolo"
    },
    {
        "name": "2021/01/fake-news-detection-in-python-using-natural-language-processing-can-applied-computing-help-a-journalist-in-automatic-fact-checking"
    },
    {
        "name": "category/developpement-digital"
    },
    {
        "name": "2021/01/fake-news-detection-in-python-using-natural-language-processing-can-applied-computing-help-a-journalist-in-automatic-fact-checking"
    },
    {
        "name": "2021/01/fake-news-detection-in-python-using-natural-language-processing-can-applied-computing-help-a-journalist-in-automatic-fact-checking"
    },
    {
        "name": "2021/01/fake-news-detection-in-python-using-natural-language-processing-can-applied-computing-help-a-journalist-in-automatic-fact-checking"
    },
    {
        "name": "2021/01/fake-news-detection-in-python-using-natural-language-processing-can-applied-computing-help-a-journalist-in-automatic-fact-checking"
    },
    {
        "name": "2021/01/web-scraping-beautifulsoup-selenium-various-explorations-in-web-scraping-with-python-and-jumping-timidly-in-surveillance-capitalism"
    },
    {
        "name": "category/developpement-digital"
    },
    {
        "name": "2021/01/web-scraping-beautifulsoup-selenium-various-explorations-in-web-scraping-with-python-and-jumping-timidly-in-surveillance-capitalism"
    },
    {
        "name": "2021/01/web-scraping-beautifulsoup-selenium-various-explorations-in-web-scraping-with-python-and-jumping-timidly-in-surveillance-capitalism"
    },
    {
        "name": "2021/01/web-scraping-beautifulsoup-selenium-various-explorations-in-web-scraping-with-python-and-jumping-timidly-in-surveillance-capitalism"
    },
    {
        "name": "2021/01/web-scraping-beautifulsoup-selenium-various-explorations-in-web-scraping-with-python-and-jumping-timidly-in-surveillance-capitalism"
    },
    {
        "name": "page/2"
    },
    {
        "name": "page/32"
    },
    {
        "name": "page/2"
    },
    {
        "name": "2023/05/as-po-for-a-personal-challenge-writing-a-e2e-suite-for-websites-and-for-mobile-apps-with-cypress-and-chat-gpt-turned-me-as-a-prompt-engineer"
    },
    {
        "name": "2023/02/using-chatgpt-on-a-daily-work-as-a-p-o-developer-or-for-q-a-or-support-and-checking-plagiarism-if-needed-with-python"
    },
    {
        "name": "2023/01/as-po-my-last-top-of-mind-professional-concerns-inventory-load-testing-principles-starting-k6-for-load-testing-a-quick-playwright-discovery-both-with-python-and-node-how-to-to-connect-lighthous"
    },
    {
        "name": "2023/01/notes-and-takeaways-on-hoshin-kanri-okrs"
    },
    {
        "name": "2022/08/using-selenium-with-python-for-web-scraping-and-form-automation-completion"
    },
    {
        "name": "2023/05"
    },
    {
        "name": "2023/02"
    },
    {
        "name": "2023/01"
    },
    {
        "name": "2022/08"
    },
    {
        "name": "2022/06"
    },
    {
        "name": "2022/05"
    },
    {
        "name": "2022/04"
    },
    {
        "name": "2022/02"
    },
    {
        "name": "2022/01"
    },
    {
        "name": "2021/12"
    },
    {
        "name": "2021/10"
    },
    {
        "name": "2021/06"
    },
    {
        "name": "2021/05"
    },
    {
        "name": "2021/04"
    },
    {
        "name": "2021/03"
    },
    {
        "name": "2021/01"
    },
    {
        "name": "2020/10"
    },
    {
        "name": "2020/09"
    },
    {
        "name": "2020/06"
    },
    {
        "name": "2020/05"
    },
    {
        "name": "2020/04"
    },
    {
        "name": "2020/03"
    },
    {
        "name": "2019/07"
    },
    {
        "name": "2019/01"
    },
    {
        "name": "2018/12"
    },
    {
        "name": "2018/10"
    },
    {
        "name": "2018/07"
    },
    {
        "name": "2018/06"
    },
    {
        "name": "2018/05"
    },
    {
        "name": "2018/03"
    },
    {
        "name": "2018/02"
    },
    {
        "name": "2018/01"
    },
    {
        "name": "2017/12"
    },
    {
        "name": "2017/11"
    },
    {
        "name": "2017/10"
    },
    {
        "name": "2017/07"
    },
    {
        "name": "2017/06"
    },
    {
        "name": "2017/05"
    },
    {
        "name": "2017/01"
    },
    {
        "name": "2016/12"
    },
    {
        "name": "2016/09"
    },
    {
        "name": "2016/07"
    },
    {
        "name": "2016/06"
    },
    {
        "name": "2016/04"
    },
    {
        "name": "2016/03"
    },
    {
        "name": "2016/02"
    },
    {
        "name": "2015/12"
    },
    {
        "name": "2015/11"
    },
    {
        "name": "2015/10"
    },
    {
        "name": "2015/09"
    },
    {
        "name": "2015/08"
    },
    {
        "name": "2015/07"
    },
    {
        "name": "2015/05"
    },
    {
        "name": "2015/03"
    },
    {
        "name": "2015/02"
    },
    {
        "name": "2015/01"
    },
    {
        "name": "2014/11"
    },
    {
        "name": "2014/10"
    },
    {
        "name": "2014/09"
    },
    {
        "name": "2014/06"
    },
    {
        "name": "2014/04"
    },
    {
        "name": "2014/03"
    },
    {
        "name": "2014/02"
    },
    {
        "name": "2014/01"
    },
    {
        "name": "2013/12"
    },
    {
        "name": "2013/11"
    },
    {
        "name": "2013/10"
    },
    {
        "name": "2013/07"
    },
    {
        "name": "2013/06"
    },
    {
        "name": "2013/05"
    },
    {
        "name": "2013/04"
    },
    {
        "name": "2013/03"
    },
    {
        "name": "2013/02"
    },
    {
        "name": "2013/01"
    },
    {
        "name": "2012/12"
    },
    {
        "name": "2012/11"
    },
    {
        "name": "2012/10"
    },
    {
        "name": "2012/09"
    },
    {
        "name": "2012/07"
    },
    {
        "name": "2012/06"
    },
    {
        "name": "2012/05"
    },
    {
        "name": "2012/04"
    },
    {
        "name": "2012/03"
    },
    {
        "name": "2012/02"
    },
    {
        "name": "2012/01"
    },
    {
        "name": "2011/12"
    },
    {
        "name": "2011/11"
    },
    {
        "name": "2011/10"
    },
    {
        "name": "2011/09"
    },
    {
        "name": "2011/08"
    },
    {
        "name": "2011/07"
    },
    {
        "name": "2011/06"
    },
    {
        "name": "2011/05"
    },
    {
        "name": "2011/04"
    },
    {
        "name": "2011/03"
    },
    {
        "name": "2011/02"
    },
    {
        "name": "2011/01"
    },
    {
        "name": "2010/12"
    },
    {
        "name": "2010/11"
    },
    {
        "name": "2010/10"
    },
    {
        "name": "2010/09"
    },
    {
        "name": "2010/08"
    },
    {
        "name": "2010/07"
    },
    {
        "name": "2010/06"
    },
    {
        "name": "2010/05"
    },
    {
        "name": "2010/04"
    },
    {
        "name": "2010/03"
    },
    {
        "name": "2010/02"
    },
    {
        "name": "2010/01"
    },
    {
        "name": "2009/12"
    },
    {
        "name": "2009/11"
    },
    {
        "name": "2009/10"
    },
    {
        "name": "2009/09"
    },
    {
        "name": "2009/08"
    },
    {
        "name": "2009/07"
    },
    {
        "name": "2009/06"
    },
    {
        "name": "2009/05"
    },
    {
        "name": "2009/04"
    },
    {
        "name": "2009/03"
    }]
};
  root.x0 = height / 2; // put root node in the center
  root.y0 = 0;

  // recursively collapses each set of children
  function collapse(d) {
    if (d.children) {
      d._children = d.children;
      d._children.forEach(collapse);
      d.children = null;
    }
  }

  root.children.forEach(collapse);
  update(root);

// });

d3.select(self.frameElement).style("height", "800px"); // use to make it work in iframe

function update(source) {

  // Compute the new tree layout.
  var nodes = tree.nodes(root).reverse(),
      links = tree.links(nodes);

  // Normalize for fixed-depth.
  nodes.forEach(function(d) {
    d.y = d.depth * 320;
//used to be here
   });

  // Update the nodes…
  var node = svg.selectAll("g.node")
      .data(nodes, function(d) {
        return d.id || (d.id = ++i);
      });

  // Enter any new nodes at the parent's previous position.
  var nodeEnter = node.enter().append("g")
      .attr("class", "node")
      .attr("transform", function(d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
      .on("click", click);

  nodeEnter.append("circle")
      .attr("r", 1e-6)
      .style("fill", function(d) { return d._children ? "brown" : "orange"; });

  nodeEnter.append("text")
      .attr("x", function(d) { return d.children || d._children ? -10 : 10; })
      .attr("dy", ".35em")
      .attr("text-anchor", function(d) { return d.children || d._children ? "end" : "start"; })
      .text(function(d) { return d.name; })
      .style("fill-opacity", 1e-6);

  // Transition nodes to their new position.
  var nodeUpdate = node.transition()
      .duration(duration)
      .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });

  nodeUpdate.select("circle")
      .attr("r", function(d) { return d._children ? 4 : 4; })
      .style("fill", function(d) { return d._children ? "orange" : "#fff"; })

  nodeUpdate.select("text")
      .style("fill-opacity", .5)

  // Transition exiting nodes to the parent's new position.
  var nodeExit = node.exit().transition()
      .duration(duration)
      .attr("transform", function(d) { return "translate(" + source.y + "," + source.x + ")"; })
      .remove();

  nodeExit.select("circle")
      .attr("r", 1e-6);

  nodeExit.select("text")
      .style("fill-opacity", 1e-6);

  // Update the links…
  var link = svg.selectAll("path.link")
      .data(links, function(d) { return d.target.id; });

  // Enter any new links at the parent's previous position.
  link.enter().insert("path", "g")
      .attr("class", "link")
      .attr("d", function(d) {
        var o = {x: source.x0, y: source.y0};
        return diagonal({source: o, target: o});
      });

  // Transition links to their new position.
  link.transition()
      .duration(duration)
      .attr("d", diagonal);

  // Transition exiting nodes to the parent's new position.
  link.exit().transition()
      .duration(duration)
      .attr("d", function(d) {
        var o = {x: source.x, y: source.y};
        return diagonal({source: o, target: o});
      })
      .remove();

  // Stash the old positions for transition.
  nodes.forEach(function(d) {
    d.x0 = d.x;
    d.y0 = d.y;
  });
}

// Toggle children on click.
// switches the off nodes to on and vice versa, does nothing if no children
function click(d) {
  if (d.children) {
    if (d.depth > 1 && treeHeight > startHeight) { // conditions for tree shrinking
      treeHeight -= (d.children.length * 10)
      tree.size([treeHeight, width])
    }
    d._children = d.children;
    d.children = null;
  } else {
    d.children = d._children;
    if (d.depth > 1 && treeHeight < height) { // conditions for tree growth
      treeHeight += (d._children.length * 10)
      tree.size([treeHeight, width])
    }
    d._children = null;
  }
  update(d);
  }