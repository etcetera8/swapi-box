import {fetchAndJson} from './api';

describe('api', () => {
  beforeEach(() => {
    const mockObj = {"name": 'luke', "homeworld": 'tattooine'}
    window.fetch = jest.fn().mockImplementation(() => 
      Promise.resolve({
        status: 200,
        json: ()=> Promise.resolve(mockObj)
      }))
  })

  it('fetchAndJson should return data object once promise resolves', async () => {
    const expected = {"name": 'luke', "homeworld": 'tattooine'};
    const actual = await fetchAndJson()
    expect(actual).toEqual(expected)
  })

  it('should call the data with the correct params', () => {
    const url=`https://swapi.co/api`

    fetchAndJson(url)
    expect(window.fetch).toHaveBeenCalledWith(url)
  })

  it('should catch errors', async () => {
      window.fetch = jest.fn().mockImplementation(() => 
      Promise.reject({
        status: 404,
        json: ()=> Promise.reject("Error")
      }))
      const error = await fetchAndJson();

      expect(error).toEqual("Error")

  })

})