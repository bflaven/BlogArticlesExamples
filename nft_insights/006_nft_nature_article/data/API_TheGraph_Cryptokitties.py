import pandas as pd
import requests
import datetime
import time
import os
from gql import gql, Client
from gql.transport.requests import RequestsHTTPTransport
import sys



def func_query(time_data, limit, offset):
    query = gql('''
        query {
        auctions(orderBy: startedAt, orderDirection:desc, where:{state:"sold", startedAt_lte:'''+str(time_data)+'''}, first:'''+str(limit)+''', skip:'''+str(offset)+''') {
            id
            state
            startingPrice
            endingPrice
            startedAt
            endedAt
            winner
            seller
            soldPrice
            initialDuration
            cryptoKitty {
                id
                totalAuctions
                totalAuctionsSold
                totalEtherRevenue
            }
            transactions (where:{type:"sold"}) {
                id
                type
                auction
                timestamp
            }
          }
        }
        ''')
    return query

def API_request_Cryptokitties(limit, time_data, time_start, lines_to_save_data, data_folder):
    counter = 0
    df = pd.DataFrame({}, dtype=str)
    sample_transport=RequestsHTTPTransport(
        url='https://api.thegraph.com/subgraphs/name/nieldlr/cryptokitties-sales',
        verify=True,
        retries=3,
    )
    client = Client(
        transport=sample_transport
    )

    limit=100
    offset = 0
    
    time_start = int(time_start.timestamp())
    time_data = int(time_data.timestamp())
    while(time_data>time_start):
        #time_data = int(time_data.timestamp()*10**3)
        response = client.execute(func_query(time_data, limit, offset))
        #print(response.status_code)
        if len(response['auctions'])>0:#response.status_code==200:
            df_supp = pd.DataFrame(response['auctions'], dtype=str)#pd.DataFrame(response.json()['orders'], dtype=str)
            if len(df_supp)==0: break#repetitive
            df = df.append(df_supp, ignore_index=True)
            
            time_data_supp = int(df_supp.startedAt.min())#int(df_supp.created_at_time.min())
            
            if offset>0:
                if (pd.to_datetime(time_data, unit='s') -  pd.to_datetime(time_data_supp, unit='s'))>pd.Timedelta('3 hours'): 
                    offset=0
                    time_data=time_data_supp
                else: offset+=limit
            else:
                if time_data == time_data_supp: offset+=limit
                else: time_data = time_data_supp
            print(len(df_supp), len(df), pd.to_datetime(time_data, unit='s'), pd.to_datetime(time_data_supp, unit='s'), offset)
            
            counter +=limit
            if counter%lines_to_save_data==0:
                supp = pd.to_datetime(time_start, unit='s')  
                df.to_csv(data_folder+'NFT_Cryptokitties_'+str(supp.month)+'_'+str(supp.year)+'.csv.gz', index=False)
        else: break
        time.sleep(1)
        
    supp = pd.to_datetime(time_start, unit='s')
    if len(df)>0:
        df.to_csv(data_folder+'NFT_Cryptokitties_'+str(supp.month)+'_'+str(supp.year)+'.csv.gz', index=False)
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
limit = 100
for i in range(len(dt_time)-1):
    data_folder = './Data_Cryptokitties/'
    os.system('mkdir '+data_folder)
    data_folder += str(dt_time[-2-i].month)+'_'+str(dt_time[-2-i].year)+'/'
    print(data_folder)
    os.system('mkdir '+data_folder)
    API_request_Cryptokitties(limit, dt_time[-1-i], dt_time[-2-i], lines_to_save_data, data_folder)





    