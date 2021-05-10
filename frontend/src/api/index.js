async function requestWrapper({
    path,
    method = "GET"
  }) {   
    let apiEndpoint = ''; 
    if (process.env.NODE_ENV === "production") {
      apiEndpoint = "https://agile-coast-84399.herokuapp.com"
    } else {
      apiEndpoint = "http://localhost:5000";
    }

    const response = await fetch(
      `${apiEndpoint}${path}`, 
      {
        method
      }
    );
  
    return {
      success: response.ok,
      data: await response.json()
    };
  }

const apiWrapper = {
    async getTitles() {
      return requestWrapper({
        path: '/titles',
        method: 'GET'
      })
    },

    async getRecommendations(title) {
      return requestWrapper({
        path: '/get_recommended/' + title,
        method: 'GET'
      })
    },

    async getTitleImg(title) {
      return requestWrapper({
        path: '/get_image/' + title,
        method: 'GET'
      })
    },

    async getTitleTags(title) {
      return requestWrapper({
        path: '/get_tags/' + title,
        method: 'GET' 
      })
    },

    async getTitleRelease(title) {
      return requestWrapper({
        path: '/get_release_date/' + title,
        method: 'GET'
      })
    }
}

export default apiWrapper;