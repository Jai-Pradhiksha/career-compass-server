const { response } = require('express')

const modules = {
    frontend : require('./../data/roadmapData/frontendRoadmapData.json'),
    backend : require('./../data/roadmapData/backendRoadmapData.json')
}


const getFrontendRoadmap = (request, response) =>{
    try{
        response.status(200).json({msg : "Get Done"})
    }
    catch(error){
        response.status(500).json({ErrorMessage : error.message})
    }
}

const searchRoadmap = (request, response) => {
        
        const suggestion = request.body.suggestion
        // const existingRoadmap = suggestion.map(suggest => (suggest))
        // console.log(existingRoadmap)

        const roadmap = suggestion.map( road => {
            const value = modules[road]
            return {
                key : road,
                value : value !== undefined ? value : null
            }
        })
        console.log(roadmap)

        if(roadmap)
        {
            return response.status(200).json(roadmap)
        }
        return response.status(502).json({msg:"Data Unavailable"})
    
}

module.exports = {
    getFrontendRoadmap,
    searchRoadmap
}