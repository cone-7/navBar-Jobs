class JobService {
    async getJobs(title){
        return fetch(`https://api.dataatwork.org/v1/jobs/autocomplete?begins_with=${title}`, {
		  method: 'GET',
		  headers: {
		    'Accept': 'application/json'
		  }
		}).then((response) => {
			return response.json();
		}).then((data) => {
			return data;
        })
	}
	
	async getInfoJob(jobId){
		return fetch(`https://api.dataatwork.org/v1/jobs/${jobId}`, {
		  method: 'GET',
		  headers: {
		    'Accept': 'application/json'
		  }
		}).then((response) => {
			return response.json();
		}).then((data) => {
			return data;
        })
	}
}

export default JobService;