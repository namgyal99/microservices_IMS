import {API, baseUrl, userUrl} from '../utils/api'


export const orderCreate = (payload) => {
	return API.post('/saveOrder', {payload}).then(response => {
		return response;
	});
}

export const orderUpdate = (payload) => {
	return API.put('/updateOrder', {payload}).then(response => {
		return response;
	});
}
export const orderGet = () => {
	return API.get('/getOrder', {apiUrl: baseUrl}).then(response => {
		return response.data;
	});
}
export const orderDelete = (payload) => {
	return API.delete('/deleteOrder', {payload}).then(response => {
		return response;
	});
}

export const inventoryCreate = (payload) => {
	return API.post('/controller_url', {payload}).then(response => {
		return response;
	});
}

export const userCreate = (payload) => {
	return API.post('/saveUsers', {payload}).then(response => {
		return response;
	});
}

export const userUpdate = (payload) => {
	return API.put('/updateUsers', {payload}).then(response => {
		return response;
	});
}
export const userGet = () => {
	return API.get('/getUsers', {apiUrl: userUrl}).then(response => {
		return response.data;
	});
}
export const userDelete = (payload) => {
	return API.delete('/deleteUsers', {payload}).then(response => {
		return response;
	});
}
