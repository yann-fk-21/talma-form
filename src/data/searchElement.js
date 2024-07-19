export  function searchElement(userRecettes,arrayRecettes){
    return new Promise((resolve)=>{
        function searchVinPlats(){
            return new Promise((resolve)=>{
                const searchNames = arrayRecettes.filter((recette)=>recette.name)
                const searchNamesRecettes = searchNames.filter((recette)=>{
                    if(recette.userNames.toLowerCase().includes(userRecettes) === true){
                        return recette
                    }
                })
               return resolve(searchNamesRecettes)

            })
        }

        function searchVin(){
            return new Promise((resolve)=>{

                const searchNames = arrayRecettes.filter((recette)=>recette.names)
        const searchNamesRecettes = searchNames.filter((recette)=>{
            if(recette.names.toLowerCase().includes(userRecettes) === true){
                return recette
            }
        })
        return resolve(searchNamesRecettes)

            })
        }

        Promise.all([searchVinPlats(),searchVin()]).then((response)=>{
            response =[...response[0],...response[1]]

            const filterDoublon = [... new Set(response)]
            return resolve(filterDoublon)

        })
      
      
    })

}
