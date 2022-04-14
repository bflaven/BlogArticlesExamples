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
          orders(orderBy: createdAt, orderDirection:desc, where:{status:"sold", createdAt_lt:'''+str(time_data)+'''}, first:'''+str(limit)+''', skip:'''+str(offset)+''') {
            id
            category
            nft {
            id
            tokenId
            contractAddress
            category
            owner
            tokenURI
            orders
            bids 
            activeOrder
            name
            image
            parcel
            estate
            wearable
            ens
            createdAt
            updatedAt
            searchOrderStatus
            searchOrderPrice
            searchOrderExpiresAt
            searchOrderCreatedAt
            searchIsLand
            searchText
            searchParcelIsInBounds
            searchParcelX
            searchParcelY
            searchParcelEstateId
            searchEstateSize
            searchIsWearableHead
            searchIsWearableAccessory
            searchWearableRarity
            searchWearableCategory
            searchWearableBodyShapes
            }
            nftAddress
            txHash
            owner
            buyer
            price
            status
            blockNumber
            expiresAt
            createdAt
            updatedAt
            },   
        }
        ''')
    return query

def API_request_Decentraland(limit, time_data, time_start, lines_to_save_data, data_folder):
    counter = 0
    df = pd.DataFrame({}, dtype=str)
    sample_transport=RequestsHTTPTransport(
        url='https://api.thegraph.com/subgraphs/name/decentraland/marketplace',
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
        if len(response['orders'])>0:#response.status_code==200:
            df_supp = pd.DataFrame(response['orders'], dtype=str)#pd.DataFrame(response.json()['orders'], dtype=str)
            if len(df_supp)==0: break#repetitive
            df = df.append(df_supp, ignore_index=True)
            
            time_data_supp = int(df_supp.createdAt.min())#int(df_supp.created_at_time.min())
            
            if offset>0:
                if (pd.to_datetime(time_data, unit='s') -  pd.to_datetime(time_data_supp, unit='s'))>pd.Timedelta('3 hours'): 
                    offset=0
                    time_data=time_data_supp
                else: offset+=limit
            else:
                if time_data == time_data_supp: offset+=limit
                else: time_data = time_data_supp
            
            
            counter +=limit
            if counter%lines_to_save_data==0:
                print(len(df_supp), len(df), pd.to_datetime(time_data, unit='s'), pd.to_datetime(time_data_supp, unit='s'), offset)
                supp = pd.to_datetime(time_start, unit='s')  
                df.to_csv(data_folder+'NFT_Decentraland_'+str(supp.month)+'_'+str(supp.year)+'.csv.gz', index=False)
        else: break
        time.sleep(1)
        
    supp = pd.to_datetime(time_start, unit='s')
    if len(df)>0:
        df.to_csv(data_folder+'NFT_Decentraland_'+str(supp.month)+'_'+str(supp.year)+'.csv.gz', index=False)
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
    data_folder = './Data_Decentraland/'
    os.system('mkdir '+data_folder)
    data_folder += str(dt_time[-2-i].month)+'_'+str(dt_time[-2-i].year)+'/'
    print(data_folder)
    os.system('mkdir '+data_folder)
    API_request_Decentraland(limit, dt_time[-1-i], dt_time[-2-i], lines_to_save_data, data_folder)



    