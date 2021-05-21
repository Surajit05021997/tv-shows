import getters from '@/store/getters';

describe('In getters', () => {
  const state = {
    allShows: [
      {"id":1,"rating":{"average":6.6},"genres":["Action","Thriller"]},
      {"id":2,"rating":{"average":9.2},"genres":["Drama","Horror"]},
      {"id":3,"rating":{"average":7.8},"genres":["Drama","Thriller"]},
      {"id":4,"rating":{"average":6.5},"genres":["Drama","Horror"]},
      {"id":5,"rating":{"average":5.6},"genres":["Horror","Thriller"]},
      {"id":6,"rating":{"average":7.6},"genres":["Action","Thriller"]},
      {"id":7,"rating":{"average":8.6},"genres":["Drama","Action"]},
      {"id":8,"rating":{"average":4.6},"genres":["Drama","Thriller"]},
      {"id":9,"rating":{"average":9.2},"genres":["Drama","Action"]},
      {"id":10,"rating":{"average":6.6},"genres":["Drama","Horror"]},
      {"id":11,"rating":{"average":7.1},"genres":["Action","Thriller"]},
      {"id":12,"rating":{"average":5.5},"genres":["Drama","Thriller"]},
      {"id":13,"rating":{"average":9.1},"genres":["Horror","Action"]},
      {"id":14,"rating":{"average":8.2},"genres":["Horror","Action"]},
      {"id":15,"rating":{"average":6.1},"genres":["Drama","Thriller"]},
      {"id":16,"rating":{"average":8.4},"genres":["Action","Thriller"]},
      {"id":17,"rating":{"average":3.9},"genres":["Horror","Action"]},
      {"id":18,"rating":{"average":5.5},"genres":["Drama","Thriller"]},
      {"id":19,"rating":{"average":8.7},"genres":["Drama","Thriller"]},
      {"id":20,"rating":{"average":6.0},"genres":["Horror","Thriller"]},
      {"id":21,"rating":{"average":8.6},"genres":["Action","Horror"]},
      {"id":22,"rating":{"average":8.3},"genres":["Drama","Thriller"]},
    ],
    selectedGenre: 'Action',
  };

  it('should return top 20 shows',() => {
    const top20Shows = getters.getTop20Shows(state);
    expect(top20Shows).toEqual([
      {"genres": ["Drama", "Horror"], "id": 2, "rating": {"average": 9.2}},
      {"genres": ["Drama", "Action"], "id": 9, "rating": {"average": 9.2}},
      {"genres": ["Horror", "Action"], "id": 13, "rating": {"average": 9.1}},
      {"genres": ["Drama", "Thriller"], "id": 19, "rating": {"average": 8.7}},
      {"genres": ["Action", "Horror"], "id": 21, "rating": {"average": 8.6}},
      {"genres": ["Drama", "Action"], "id": 7, "rating": {"average": 8.6}},
      {"genres": ["Action", "Thriller"], "id": 16, "rating": {"average": 8.4}},
      {"genres": ["Drama", "Thriller"], "id": 22, "rating": {"average": 8.3}},
      {"genres": ["Horror", "Action"], "id": 14, "rating": {"average": 8.2}},
      {"genres": ["Drama", "Thriller"], "id": 3, "rating": {"average": 7.8}},
      {"genres": ["Action", "Thriller"], "id": 6, "rating": {"average": 7.6}},
      {"genres": ["Action", "Thriller"], "id": 11, "rating": {"average": 7.1}},
      {"genres": ["Action", "Thriller"], "id": 1, "rating": {"average": 6.6}},
      {"genres": ["Drama", "Horror"], "id": 10, "rating": {"average": 6.6}},
      {"genres": ["Drama", "Horror"], "id": 4, "rating": {"average": 6.5}},
      {"genres": ["Drama", "Thriller"], "id": 15, "rating": {"average": 6.1}},
      {"genres": ["Horror", "Thriller"], "id": 20, "rating": {"average": 6}},
      {"genres": ["Horror", "Thriller"], "id": 5, "rating": {"average": 5.6}},
      {"genres": ["Drama", "Thriller"], "id": 18, "rating": {"average": 5.5}},
      {"genres": ["Drama", "Thriller"], "id": 12, "rating": {"average": 5.5}}]);
  });

  it('should return shows by genres', () => {
    const showsByGenres = getters.getShowListByGenre(state);
    expect(showsByGenres).toEqual([
      {"id":1,"rating":{"average":6.6},"genres":["Action","Thriller"]},
      {"id":6,"rating":{"average":7.6},"genres":["Action","Thriller"]},
      {"id":7,"rating":{"average":8.6},"genres":["Drama","Action"]},
      {"id":9,"rating":{"average":9.2},"genres":["Drama","Action"]},
      {"id":11,"rating":{"average":7.1},"genres":["Action","Thriller"]},
      {"id":13,"rating":{"average":9.1},"genres":["Horror","Action"]},
      {"id":14,"rating":{"average":8.2},"genres":["Horror","Action"]},
      {"id":16,"rating":{"average":8.4},"genres":["Action","Thriller"]},
      {"id":17,"rating":{"average":3.9},"genres":["Horror","Action"]},
      {"id":21,"rating":{"average":8.6},"genres":["Action","Horror"]},
    ]);
  });
});
