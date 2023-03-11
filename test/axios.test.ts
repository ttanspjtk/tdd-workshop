import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

describe("axios", ()=> {
  var mock = new MockAdapter(axios)

  beforeEach(()=> { mock.resetHandlers() })

  xtest("get", async ()=> {
    mock.onGet("/users").reply(200, {
      users: [{ id: 1, name: "John Smith" }]
    })

    const result = await axios.get("/users")
    expect(result.data.users[0].id).toBe(1)
  })
  xtest("get2 must be error", async ()=> {
    const result = await axios.get("/users")
    expect(result.data.users[0].id).toBe(1)
  })
  xtest("post", async ()=> {
    mock.onPost("/users", { id: 1, name: "Foo"}).reply(200, {
      users: [{ id: 1, name: "John" }]
    })

    // Async Await
    try {
      const result = await axios.post("/users", { id: 2, name: "Foo"})
      console.log('result',result);
    } catch(err) {
      // console.log('err',err.message);
      expect(err.message).toEqual('Request failed with status code 404')
    }

    // Promises
    // axios.post("/users", { id: 2, name: "Foo"}).then(()=> { 
    //   expect(false).toBeTruthy() 
    // }).catch((err)=> {
    //   expect(err.message).toBe('Request failed with status code 404')
    // })
  })
})