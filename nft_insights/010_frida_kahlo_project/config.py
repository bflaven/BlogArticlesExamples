# from data import background, body, face, hat
# from data import background, eye, eyebrow, face, mouth, nose
from data import background, cap, hair, chin_lips, eyes_eyebrows, jewels



'''
All Configurations needed for the Generator
Import all your Traits from a DB or another file
Add Traits in 'Trait Data' with whatever TraiteNames (Key) you choose

Trait Array Format:
    <Array> [
        <Dictionary> {
            "file": <string> - points to the Name of the actual image file [no need for extentsion in name, file must be .png] *can be empty
            "label": <string> - Call it what you want
            "weight": <int> - Weigt Distribution of randomly choosing this trait [Sum of all Traits has to be 100]
        }
    ]

Trait Directory: Parent Directory where the Trait Images are saved
Output Directory: Directory where all the Output exports
Output NFT Name: Name of the Output Files [a Number will be added at the End of the Filename]
Output JSON Name: Name of the Output JSON File with all the Statistics and NFT Traits
Generate Amount: Amount of NFTs to be generated
Image Size: Size of the NFT Images
Weighted Distribution: True => Use Weighted Distribution from your Traits, False => Equal Distribution for all Traits
Can Generate Empty: Traits with the possibility of not appearing in every NFT
Trait Data: Add your Traits the NFT will be generated from ['<NAME>': <Trait[]>]
'''

config = {
    "Trait Directory": './fkp',
    "Output Directory": './output',
    "Output NFT Name": "fkp_nft_",
    "Output JSON Name": 'fkp-nft-data',
    "Generate Amount": 5, # fix the amount for NFT
    "Image Size": [1078,1358], # 300,300
    "Weighted Distribution": True,
    "Can Generate Empty": ["hair"],
    "Trait Data": {
        "background": background,
        "hair": hair,
        "cap": cap,
        "chin_lips": chin_lips,
        "eyes_eyebrows": eyes_eyebrows,
        "jewels": jewels
    }
}
