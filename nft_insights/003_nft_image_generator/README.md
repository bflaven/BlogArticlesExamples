# TODO:
- [x] Define trait types and associated data for image generation
- [x] Prepare Base Image
  - [x] Size: 631 x 631 px // based on bored ape yacht club image size
- [x] Prepare Trait Images
  - [x] Hat images
  - [x] Mouth images
  - [x] Eyes images
- [ ] Image Generator Script
  - [x] random generate by trait distribution 
  - [ ] add each trait based on layer config
- [x] Script: Upload to IPFS
  - [x] Upload to ipfs
  - [x] image: string // ipfs link
  - [x] attributes: [{"trait_type": string, "value": string}]
  - [x] Save to file
- [ ] Create CLI program to run nft project generation end to end
  - [ ] nft project generation per project

# NOTES
- same image, different name will have the same ipfs hash

# Image Generation Trait Config
The data structure for the config is a dictionary of `trait_config`.  
Each `trait_config` has a `trait_type`, and `variations` dictionary.  

## Default Trait Variation
This config assumes that the images of trait variations are the same size as the base image 
Each `variation` consists of:   
  - `value` name of the variation
  - `image` path to the image

```python
hat_trait = {
  "trait_type": "hat",
  "variations": {
    "circle": {
      "value": "circle",
      "image": "./images_in/traits/hat-circle.png",
    },
    "square": {
      "value": "square",
      "image": "./images_in/traits/hat-square.png",
    },
    "triangle": {
      "value": "triangle",
      "image": "./images_in/traits/hat-triangle.png",
    }
  },
}


mouth_trait = {
  "trait_type": "mouth",
  "variations": {
    "smile": {
      "value": "smile",
      "image": "./images_in/traits/mouth-smile.png",
    },
    "frown": {
      "value": "frown",
      "image": "./images_in/traits/mouth-frown.png",
    },
    "shout": {
      "value": "shout",
      "image": "./images_in/traits/mouth-shout.png",
    }
  }
}

eyes_trait = {
  "trait_type": "eyes",
  "variations": {
    "wide-eyed": {
      "value": "wide-eyed",
      "image": "./images_in/traits/eyes-wide-eyed.png",
    },
    "sleepy": {
      "value": "sleepy",
      "image": "./images_in/traits/eyes-sleepy.png",
    },
    "glasses": {
      "value": "glasses",
      "image": "./images_in/traits/eyes-glasses.png",
    }
  }
}

TRAIT_CONFIG = {
  "hat": hat_trait,
  "mouth": mouth_trait,
  "eyes": eyes_trait,
}
```


## Trait Variation Using Image Size and Position
Use this configuration if the images of trait variations are not the same size as the base image
Each `variation` consists of:   
  - `value` name of the variation
  - `image` path to the image
  - `pos` position of the image relative to the base image
  - `size` the size of the image

```python
hat_trait = {
  "trait_type": "hat",
  "variations": {
    "circle": {
      "value": "circle",
      "image": "./images_in/traits/hat-circle.png",
      "pos": { "x": 162, "y": 98 },
      "size": { "width": 306 , "height": 134 }
    },
    "square": {
      "value": "square",
      "image": "./images_in/traits/hat-square.png",
      "pos": { "x": 149, "y": 68 },
      "size": { "width": 332, "height": 146 }
    },
    "triangle": {
      "value": "triangle",
      "image": "./images_in/traits/hat-triangle.png",
      "pos": { "x": 160, "y": 25 },
      "size": { "width": 323 , "height": 186 }
    }
  },
}


mouth_trait = {
  "trait_type": "mouth",
  "variations": {
    "smile": {
      "value": "smile",
      "image": "./images_in/traits/mouth-smile.png",
      "pos": { "x": 194, "y": 332 },
      "size": { "width": 259 , "height": 108 }
    },
    "frown": {
      "value": "frown",
      "image": "./images_in/traits/mouth-frown.png",
      "pos": { "x": 214, "y": 340 },
      "size": { "width": 223, "height": 88 }
    },
    "shout": {
      "value": "shout",
      "image": "./images_in/traits/mouth-shout.png",
      "pos": { "x": 242, "y": 317 },
      "size": { "width": 158, "height": 134 }
    }
  }
}

eyes_trait = {
  "trait_type": "eyes",
  "variations": {
    "wide-eyed": {
      "value": "wide-eyed",
      "image": "./images_in/traits/eyes-wide-eyed.png",
      "pos": { "x": 212, "y": 222 },
      "size": { "width": 207, "height": 92 }
    },
    "sleepy": {
      "value": "sleepy",
      "image": "./images_in/traits/eyes-sleepy.png",
      "pos": { "x": 200, "y": 272 },
      "size": { "width": 239, "height": 17 }
    },
    "glasses": {
      "value": "glasses",
      "image": "./images_in/traits/eyes-glasses.png",
      "pos": { "x": 148, "y": 236 },
      "size": { "width": 338, "height": 82 }
    }
  }
}

TRAIT_CONFIG = {
  "hat": hat_trait,
  "mouth": mouth_trait,
  "eyes": eyes_trait,
}
```
