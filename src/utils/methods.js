import store from "../store"
function hasPermission(permission)
{
    let permissionsString = localStorage.getItem('permissions')
    let permissionsArray = permissionsString.split(',')
    let hasPermission = permissionsArray.indexOf(permission)
    if( hasPermission === -1){
        // the permission does not exist
        store.commit('setError', {status:400, data:
                {
                    "errors": [
                        {
                            "message": "You do not have permission to access this resource",
                        }
                    ]
                }})
        return false
    }else {
        return true
    }
}

export {hasPermission}