// THis is used to connect to the sanity studio 

import sanityClient from '@sanity/client'

export default sanityClient({
   projectId: '9d6dv77f',  // Id of the project - found in sanity.json
   dataset: 'production'
})