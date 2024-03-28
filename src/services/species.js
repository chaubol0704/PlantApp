import createApiClient from "./api.services";
class SpeciesService {
  constructor(baseUrl = "/api/species") {
    this.api = createApiClient(baseUrl);
  }
  async getAllSpecies() {
    
    return (await this.api.get(`/species`)).data;
  }
  async getSpecies(id,page) {
    console.log(id,page)
    return (await this.api.get(`/all/${id}?page=${page}`)).data;
  }
  
}
export default new SpeciesService();
