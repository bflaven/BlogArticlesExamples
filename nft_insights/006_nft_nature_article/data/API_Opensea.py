import pandas as pd
import requests
import datetime
import time
import os
import sys


def API_request_Opensea(limit, time_data, time_start, lines_to_save_data, data_folder):
    offset = 0
    counter = 0
    df = pd.DataFrame({}, dtype=str)
    url = "https://api.opensea.io/api/v1/events"
    while(time_data>time_start):
        querystring = {"only_opensea":"false","offset":str(offset),"limit":str(limit), 
                       "event_type":"successful", 'occurred_before':time_data}
        response = requests.request("GET", url, params=querystring)

        #print(response.status_code)
        if response.status_code==200:
            df_supp = pd.DataFrame({}, dtype=str)
            for key in response.json()['asset_events']:
                df_supp = df_supp.append(key, ignore_index=True)
            
            df = df.append(df_supp, ignore_index=True)
            
            time_data_supp = pd.to_datetime(df_supp.created_date.unique()).min()
            
            if offset>0:
                if (time_data -  time_data_supp)>pd.Timedelta('5 hours'): 
                    offset=0
                    time_data=time_data_supp
                else: offset+=limit
            else:
                if time_data == time_data_supp: offset+=limit
                else: time_data = time_data_supp
            
            
            counter +=limit
            if counter%lines_to_save_data==0:
                print(len(df_supp), len(df), pd.to_datetime(time_data), time_data_supp, offset)
                df.to_csv(data_folder+'NFT_OpenSea_'+str(time_start.month)+'_'+str(time_start.year)+'.csv.gz',
                            index=False)
        time.sleep(1)
    
    if len(df)>0:
        df.to_csv(data_folder+'NFT_OpenSea_'+str(time_start.month)+'_'+str(time_start.year)+'.csv.gz', index=False)
    else:
        print('No data in this month')
        
        
try:
    dt_start_time = pd.to_datetime(sys.argv[1])
    dt_end_time = pd.to_datetime(sys.argv[2])
except:
    sys.exit('Wrong time format')
    
dt_time = [dt_start_time, dt_end_time]
print('From: ', dt_time[0])
print('To: ', dt_time[1])


lines_to_save_data = 5000
limit = 50
for i in range(len(dt_time)-1):
    data_folder = './Data_OpenSea/'
    os.system('mkdir '+data_folder)
    data_folder += str(dt_time[-2-i].month)+'_'+str(dt_time[-2-i].year)+'/'
    print(data_folder)
    os.system('mkdir '+data_folder)
    API_request_Opensea(limit, dt_time[-1-i], dt_time[-2-i], lines_to_save_data, data_folder)



    