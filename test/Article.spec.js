var assert = require('assert')
var axios = require('axios')
var {state,mutations,action} = require('../resources/assets/js/components/store/modules/Article')

describe('save', function() {
    it('should return length of array articles', function() {
        axios.get('http://localhost:8000/user/profile/'+21).then(response=>{
               console.log(response.body)
                mutations.SAVE(state, response.body)
                assert.equal(state.articles.length, 1)
            })
    })
})


