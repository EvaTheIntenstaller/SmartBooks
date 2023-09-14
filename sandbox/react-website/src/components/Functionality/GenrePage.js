import React from 'react';

function GenrePage(genre, books) {
  const GenreCards = () => {
    const genreBooks = books.slice(0, 7);

    return (
      <CategoryLayout title={genre.toUpperCase()} items={genreBooks} category={genre} />
    );
  };

  const FullGenrePage = () => {
    return (
      <CategoryLayout title={genre.toUpperCase()} items={books} category={genre} />
    );
  };

  const ArrayCount = () => {
    return books.length;
  };

  return { GenreCards, FullGenrePage, ArrayCount };
}

export default GenrePage;
