import axiosWithAuth from '../helpers/axiosWithAuth';

const fetchColorService = () => {
    return (
        axiosWithAuth()
        .get('/api/color')
        .then(res=>{
            console.log(res)
            return(res.data)
        })

        .catch(err => {
            console.log(err)
        })
    )
    
}

export default fetchColorService;