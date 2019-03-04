class httpService {
    request = (route, method, body) => 
        new Promise((resolve, reject) => {
            fetch(route, {
                method,
                body: body && JSON.stringify(body)
            }).then(res => {
                if (res.status === 200 || 201 || 400 || 401 ) {
                    return res.json().then(data => {
                        resolve({
                            code: res.status,
                            body: data
                        })
                    })  
                } else {
                    res.json().then(data => {
                        reject({
                            code: res.status,
                            body: data
                        })
                    })
                }
            })   
        })
}

export default new httpService()